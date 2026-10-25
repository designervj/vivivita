import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import clientPromise from '@/lib/mongodb';
import { getRequestDbName, serializeDocument } from '@/lib/db-utils';

export const dynamic = 'force-dynamic';

// Reusable / pooled SMTP Transporter for high-performance sending without handshake lag
let cachedTransporter: ReturnType<typeof nodemailer.createTransport> | null = null;

function getMailTransporter(host: string, port: number, user: string, pass: string) {
  if (cachedTransporter) return cachedTransporter;

  cachedTransporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
    pool: true,
    maxConnections: 3,
    maxMessages: 100,
    connectionTimeout: 7000,
    greetingTimeout: 7000,
    socketTimeout: 9000,
    tls: {
      rejectUnauthorized: false,
    },
  });

  return cachedTransporter;
}

export async function GET(req: NextRequest) {
  try {
    const client = await clientPromise;
    if (!client) {
      return NextResponse.json({ success: true, data: [] });
    }
    const db = client.db(getRequestDbName(req));
    const submissions = await db
      .collection('form_submissions')
      .find({ form: 'contact' })
      .sort({ createdAt: -1 })
      .limit(100)
      .toArray();

    return NextResponse.json({ success: true, data: submissions.map(serializeDocument) });
  } catch (error) {
    console.error('Error fetching contact submissions:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch contact submissions' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Record<string, unknown>;
    const { name, email, phone, topic, note } = body || {};

    // 1. Asynchronous DB save task (runs concurrently, does not block email)
    const saveToDbPromise = (async (): Promise<{ dbSaved: boolean; submissionId: string | null }> => {
      try {
        const client = await clientPromise;
        if (!client) {
          return { dbSaved: false, submissionId: null };
        }
        const db = client.db(getRequestDbName(req));
        const submission = {
          form: 'contact',
          payload: body,
          status: 'new',
          source: 'vivivita-website',
          createdAt: new Date(),
          updatedAt: new Date(),
        };

        const result = await db.collection('form_submissions').insertOne(submission);
        return { dbSaved: true, submissionId: result.insertedId.toString() };
      } catch (dbErr) {
        console.warn('MongoDB submission save skipped/failed:', dbErr);
        return { dbSaved: false, submissionId: null };
      }
    })();

    // 2. Email SMTP preparation
    const host = process.env.SMTP_HOST || 'mail.vivi-vita.hr';
    const port = Number(process.env.SMTP_PORT || 465);
    const user = process.env.SMTP_USER || 'info@vivi-vita.hr';
    const pass = process.env.SMTP_PASS || '7Z43bgv%3';
    const recipient = process.env.CONTACT_EMAIL_TO || 'info@vivi-vita.hr';
    const bccEmail = process.env.CONTACT_EMAIL_BCC || 'vijendrajat693@gmail.com';
    const fromEmail = process.env.CONTACT_EMAIL_FROM || user;

    const safeName = name ? String(name).replace(/</g, '&lt;').trim() : 'Posjetitelj';
    const safeEmail = email ? String(email).replace(/</g, '&lt;').trim() : '';
    const safePhone = phone ? String(phone).replace(/</g, '&lt;').trim() : '';
    const safeTopic = topic ? String(topic).replace(/</g, '&lt;').trim() : 'Opći upit';
    const safeNote = note
      ? String(note).replace(/</g, '&lt;').replace(/\n/g, '<br/>')
      : 'Nema dodatne poruke.';

    const formattedDate = new Intl.DateTimeFormat('hr-HR', {
      timeZone: 'Europe/Zagreb',
      dateStyle: 'medium',
      timeStyle: 'short',
    }).format(new Date());

    // Clean, crisp SVG icons to replace emojis
    const iconUser = `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#788f95" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:-2px;margin-right:7px;"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`;
    const iconMail = `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#788f95" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:-2px;margin-right:7px;"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`;
    const iconPhone = `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#788f95" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:-2px;margin-right:7px;"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`;
    const iconTag = `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#788f95" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:-2px;margin-right:7px;"><path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"/><circle cx="7.5" cy="7.5" r=".5" fill="#788f95"/></svg>`;
    const iconMessage = `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#758d92" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:-2px;margin-right:6px;"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`;
    const iconClock = `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:-2px;margin-right:5px;"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`;
    const iconReply = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:-2px;margin-right:8px;"><polyline points="9 17 4 12 9 7"/><path d="M20 18v-2a4 4 0 0 0-4-4H4"/></svg>`;
    const iconCall = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1a6470" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:-2px;margin-right:8px;"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`;

    const htmlContent = `<!DOCTYPE html>
<html lang="hr" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>Novi upit: ${safeName}</title>
  <!-- Google Web Fonts for supported email clients -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,400&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
  <style type="text/css">
    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { -ms-interpolation-mode: bicubic; border: 0; outline: none; text-decoration: none; }
    body { margin: 0; padding: 0; width: 100% !important; background-color: #f1f5f6; font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }
    .email-container { max-width: 620px; margin: 0 auto; }
    .accent-link:hover { text-decoration: underline !important; color: #084c56 !important; }
    .btn-reply:hover { background-color: #0d3b42 !important; }
  </style>
</head>
<body style="margin:0;padding:0;background-color:#f1f5f6;color:#1e293b;-webkit-font-smoothing:antialiased;">
  <!-- Preheader text (preview in inbox) -->
  <div style="display:none;font-size:1px;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;mso-hide:all;">
    Novi kontakt upit od ${safeName} (${safeTopic}) — Vivi Vita Wellness Studio
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f1f5f6;padding:32px 12px;">
    <tr>
      <td align="center">
        <!-- Main Card -->
        <table role="presentation" class="email-container" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:620px;background-color:#ffffff;border-radius:18px;overflow:hidden;box-shadow:0 8px 30px rgba(15,35,40,0.08);border:1px solid #e2e8ea;">

          <!-- LUXURY HEADER -->
          <tr>
            <td style="background:linear-gradient(135deg, #0b343b 0%, #154c55 55%, #1b6370 100%);padding:38px 32px 30px;text-align:center;position:relative;">
              <!-- Brand Ornament / Badge -->
              <table role="presentation" align="center" cellpadding="0" cellspacing="0" border="0" style="margin:0 auto 12px auto;">
                <tr>
                  <td style="background:rgba(255,255,255,0.12);border-radius:30px;padding:5px 16px;">
                    <span style="font-family:'Plus Jakarta Sans',sans-serif;font-size:11px;font-weight:700;letter-spacing:2.5px;color:#f3e3be;text-transform:uppercase;">
                      ✦ WELLNESS &amp; HEALTH STUDIO ✦
                    </span>
                  </td>
                </tr>
              </table>

              <!-- Main Title -->
              <h1 style="margin:0 0 6px 0;font-family:'Cormorant Garamond',Georgia,serif;font-size:36px;font-weight:500;color:#ffffff;letter-spacing:1px;line-height:1.15;">
                Vivivita
              </h1>
              <p style="margin:0;font-family:'Plus Jakarta Sans',sans-serif;font-size:13.5px;font-weight:500;color:#d3e9ed;letter-spacing:0.3px;">
                Novi upit pristigao s web obrasca
              </p>
            </td>
          </tr>

          <!-- GOLD ACCENT DIVIDER -->
          <tr>
            <td height="3" style="background:linear-gradient(90deg, #bfa054 0%, #ecd68a 50%, #bfa054 100%);font-size:0;line-height:0;">&nbsp;</td>
          </tr>

          <!-- TIME & STATUS BAR -->
          <tr>
            <td style="padding:18px 32px 14px 32px;background:#f8fafb;border-bottom:1px solid #edf1f3;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="vertical-align:middle;">
                    <span style="font-family:'Plus Jakarta Sans',sans-serif;font-size:12px;font-weight:600;color:#64748b;display:inline-block;">
                      ${iconClock}Vrijeme: <strong style="color:#0f2b30;">${formattedDate}</strong>
                    </span>
                  </td>
                  <td align="right" style="vertical-align:middle;">
                    <span style="display:inline-block;background:#e0f2f1;color:#0b5c68;font-family:'Plus Jakarta Sans',sans-serif;font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;padding:4px 12px;border-radius:20px;border:1px solid #b2dfdb;">
                      ● Novo
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- INQUIRY DETAILS SECTION -->
          <tr>
            <td style="padding:28px 32px 20px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:separate;border-spacing:0;">
                
                <!-- ROW 1: IME I PREZIME -->
                <tr>
                  <td style="padding:14px 16px;background:#ffffff;border-bottom:1px solid #f1f5f7;width:160px;vertical-align:middle;">
                    <span style="display:inline-block;white-space:nowrap;font-family:'Plus Jakarta Sans',sans-serif;font-size:11.5px;font-weight:700;letter-spacing:1px;color:#788f95;text-transform:uppercase;">
                      ${iconUser}Ime i prezime
                    </span>
                  </td>
                  <td style="padding:14px 16px;background:#ffffff;border-bottom:1px solid #f1f5f7;vertical-align:middle;">
                    <span style="font-family:'Plus Jakarta Sans',sans-serif;font-size:15px;font-weight:600;color:#0f172a;">
                      ${safeName}
                    </span>
                  </td>
                </tr>

                <!-- ROW 2: EMAIL -->
                <tr>
                  <td style="padding:14px 16px;background:#fcfdfd;border-bottom:1px solid #f1f5f7;width:160px;vertical-align:middle;">
                    <span style="display:inline-block;white-space:nowrap;font-family:'Plus Jakarta Sans',sans-serif;font-size:11.5px;font-weight:700;letter-spacing:1px;color:#788f95;text-transform:uppercase;">
                      ${iconMail}Email adresa
                    </span>
                  </td>
                  <td style="padding:14px 16px;background:#fcfdfd;border-bottom:1px solid #f1f5f7;vertical-align:middle;">
                    ${
                      safeEmail
                        ? `<a href="mailto:${safeEmail}" style="font-family:'Plus Jakarta Sans',sans-serif;font-size:15px;font-weight:700;color:#0b6674;text-decoration:underline;text-underline-offset:3px;" class="accent-link">${safeEmail}</a>`
                        : `<span style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;color:#94a3b8;font-style:italic;">Nije navedeno</span>`
                    }
                  </td>
                </tr>

                <!-- ROW 3: TELEFON -->
                <tr>
                  <td style="padding:14px 16px;background:#ffffff;border-bottom:1px solid #f1f5f7;width:160px;vertical-align:middle;">
                    <span style="display:inline-block;white-space:nowrap;font-family:'Plus Jakarta Sans',sans-serif;font-size:11.5px;font-weight:700;letter-spacing:1px;color:#788f95;text-transform:uppercase;">
                      ${iconPhone}Telefon
                    </span>
                  </td>
                  <td style="padding:14px 16px;background:#ffffff;border-bottom:1px solid #f1f5f7;vertical-align:middle;">
                    ${
                      safePhone
                        ? `<a href="tel:${safePhone.replace(/\s+/g, '')}" style="font-family:'Plus Jakarta Sans',sans-serif;font-size:15px;font-weight:600;color:#0b6674;text-decoration:none;" class="accent-link">${safePhone}</a>`
                        : `<span style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;color:#94a3b8;font-style:italic;">Nije navedeno</span>`
                    }
                  </td>
                </tr>

                <!-- ROW 4: TEMA / USLUGA -->
                <tr>
                  <td style="padding:14px 16px;background:#fcfdfd;width:160px;vertical-align:middle;">
                    <span style="display:inline-block;white-space:nowrap;font-family:'Plus Jakarta Sans',sans-serif;font-size:11.5px;font-weight:700;letter-spacing:1px;color:#788f95;text-transform:uppercase;">
                      ${iconTag}Tema / Usluga
                    </span>
                  </td>
                  <td style="padding:14px 16px;background:#fcfdfd;vertical-align:middle;">
                    <span style="display:inline-block;background:#e9f4f6;color:#135b66;font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:700;padding:5px 14px;border-radius:8px;border:1px solid #cee5e9;">
                      ${safeTopic}
                    </span>
                  </td>
                </tr>

              </table>

              <!-- MESSAGE BLOCKQUOTE CARD -->
              <div style="margin-top:24px;background:#f9fbfb;border-left:4px solid #145963;border-radius:0 12px 12px 0;padding:20px 22px;border-top:1px solid #ebf1f2;border-right:1px solid #ebf1f2;border-bottom:1px solid #ebf1f2;">
                <p style="margin:0 0 10px 0;font-family:'Plus Jakarta Sans',sans-serif;font-size:11px;font-weight:700;letter-spacing:1.5px;color:#758d92;text-transform:uppercase;">
                  ${iconMessage}Poruka klijenta
                </p>
                <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:14.5px;line-height:1.75;color:#1e293b;white-space:pre-wrap;">
                  ${safeNote}
                </div>
              </div>

              <!-- ACTION CTA BUTTONS -->
              <div style="margin-top:32px;text-align:center;">
                ${
                  safeEmail
                    ? `<a href="mailto:${safeEmail}" class="btn-reply" style="display:inline-block;background:linear-gradient(135deg, #124a52 0%, #1a6470 100%);color:#ffffff;font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;text-decoration:none;padding:14px 34px;border-radius:50px;letter-spacing:0.4px;box-shadow:0 6px 18px rgba(18,74,82,0.25);margin:4px;">${iconReply}Odgovori na upit</a>`
                    : ''
                }
                ${
                  safePhone
                    ? `<a href="tel:${safePhone.replace(/\s+/g, '')}" style="display:inline-block;background:#ffffff;border:1.5px solid #1a6470;color:#1a6470;font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:700;text-decoration:none;padding:12px 28px;border-radius:50px;letter-spacing:0.4px;margin:4px;">${iconCall}Pozovi klijenta</a>`
                    : ''
                }
              </div>

            </td>
          </tr>

          <!-- ELEGANT FOOTER -->
          <tr>
            <td style="background:#0a2c32;padding:26px 32px;text-align:center;">
              <p style="margin:0 0 6px 0;font-family:'Cormorant Garamond',Georgia,serif;font-size:20px;font-weight:500;color:#ffffff;letter-spacing:1px;">
                Vivivita Wellness Studio
              </p>
              <p style="margin:0 0 14px 0;font-family:'Plus Jakarta Sans',sans-serif;font-size:12px;color:#a2c1c6;">
                Holistički pristup zdravlju, tijelu i duhu
              </p>
              <table role="presentation" align="center" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="padding:0 8px;">
                    <a href="https://vivi-vita.hr" style="font-family:'Plus Jakarta Sans',sans-serif;font-size:12px;font-weight:600;color:#e8cf8d;text-decoration:none;">🌐 Posjeti web stranicu</a>
                  </td>
                  <td style="color:#527c83;font-size:12px;">•</td>
                  <td style="padding:0 8px;">
                    <a href="mailto:info@vivi-vita.hr" style="font-family:'Plus Jakarta Sans',sans-serif;font-size:12px;font-weight:600;color:#e8cf8d;text-decoration:none;">✉ info@vivi-vita.hr</a>
                  </td>
                </tr>
              </table>
              <p style="margin:16px 0 0 0;font-family:'Plus Jakarta Sans',sans-serif;font-size:11px;color:#678c93;line-height:1.5;">
                Ova obavijest je automatski generirana s kontakt obrasca na <a href="https://vivi-vita.hr" style="color:#8bb6bd;text-decoration:none;">vivi-vita.hr</a>.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

    // 3. Email sending task
    let emailSent = false;
    let mailError: string | null = null;

    if (user && pass && host) {
      try {
        const transporter = getMailTransporter(host, port, user, pass);

        await transporter.sendMail({
          from: `"Vivi Vita Studio" <${fromEmail}>`,
          to: recipient,
          bcc: bccEmail,
          replyTo: safeEmail ? safeEmail : undefined,
          subject: `Novi upit: ${safeName} — ${safeTopic}`,
          text: `Novi upit s web stranice:\n\nIme: ${name}\nEmail: ${email}\nTelefon: ${phone}\nTema: ${topic}\nDatum: ${formattedDate}\n\nPoruka:\n${note}`,
          html: htmlContent,
        });

        emailSent = true;
      } catch (err: unknown) {
        mailError = err instanceof Error ? err.message : String(err);
        console.error('Error sending contact notification email:', err);
      }
    } else {
      console.warn('SMTP credentials not fully configured; skipping email dispatch.');
    }

    // Await DB save result (which ran in parallel with email)
    const { dbSaved, submissionId } = await saveToDbPromise;

    return NextResponse.json({
      success: emailSent || dbSaved,
      emailSent,
      dbSaved,
      id: submissionId,
      error: mailError || undefined,
    });
  } catch (error) {
    console.error('Error processing contact submission:', error);
    return NextResponse.json({ success: false, error: 'Failed to process contact submission' }, { status: 500 });
  }
}

