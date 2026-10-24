import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import clientPromise from '@/lib/mongodb';
import { getRequestDbName, serializeDocument } from '@/lib/db-utils';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  try {
    const client = await clientPromise;
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

    let dbSaved = false;
    let submissionId: string | null = null;

    try {
      const client = await clientPromise;
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
      dbSaved = true;
      submissionId = result.insertedId.toString();
    } catch (dbErr) {
      console.warn('MongoDB submission save skipped/failed:', dbErr);
    }

    // Send email via SMTP if configured
    const host = process.env.SMTP_HOST || 'mail.vivi-vita.hr';
    const port = Number(process.env.SMTP_PORT || 465);
    const user = process.env.SMTP_USER || 'info@vivi-vita.hr';
    const pass = process.env.SMTP_PASS || '7Z43bgv%3';
    const recipient = process.env.CONTACT_EMAIL_TO || 'info@vivi-vita.hr';
    const bccEmail = process.env.CONTACT_EMAIL_BCC || 'vijendrajat693@gmail.com';
    const fromEmail = process.env.CONTACT_EMAIL_FROM || user;

    let emailSent = false;
    if (user && pass && host) {
      try {
        const transporter = nodemailer.createTransport({
          host,
          port,
          secure: port === 465,
          auth: { user, pass },
        });

        const safeName = name ? String(name).replace(/</g, '&lt;') : 'Nepoznato';
        const safeEmail = email ? String(email).replace(/</g, '&lt;') : '-';
        const safePhone = phone ? String(phone).replace(/</g, '&lt;') : '-';
        const safeTopic = topic ? String(topic).replace(/</g, '&lt;') : 'Općeniti upit';
        const safeNote = note ? String(note).replace(/</g, '&lt;').replace(/\n/g, '<br/>') : '-';

        const html = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 12px; background: #ffffff;">
            <div style="background: #23909d; color: white; padding: 16px 20px; border-radius: 8px 8px 0 0; text-align: center;">
              <h2 style="margin: 0; font-size: 20px; font-weight: 600;">Novi upit s web stranice vivi-vita.hr</h2>
            </div>
            <div style="padding: 24px 16px;">
              <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; width: 120px; color: #4b5563;">Ime i prezime:</td>
                  <td style="padding: 8px 0; color: #111827;">${safeName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Email:</td>
                  <td style="padding: 8px 0; color: #111827;"><a href="mailto:${safeEmail}" style="color: #23909d;">${safeEmail}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Telefon:</td>
                  <td style="padding: 8px 0; color: #111827;">${safePhone}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Tema:</td>
                  <td style="padding: 8px 0; color: #111827;">${safeTopic}</td>
                </tr>
              </table>
              <div style="margin-top: 16px; padding: 12px; background: #f9fafb; border-radius: 8px; border: 1px solid #e5e7eb;">
                <p style="margin: 0 0 6px 0; font-weight: bold; font-size: 13px; color: #4b5563;">Poruka / Napomena:</p>
                <p style="margin: 0; font-size: 14px; color: #111827; line-height: 1.5;">${safeNote}</p>
              </div>
            </div>
            <div style="text-align: center; border-top: 1px solid #e5e7eb; padding-top: 16px; font-size: 12px; color: #9ca3af;">
              Vivi Vita Coaching · Poslano sa web obrasca
            </div>
          </div>
        `;

        await transporter.sendMail({
          from: `"Vivi Vita Web" <${fromEmail}>`,
          to: recipient,
          bcc: bccEmail,
          replyTo: email ? String(email) : undefined,
          subject: `Novi upit: ${name || 'Posjetitelj'} - ${topic || 'Konzultacije'}`,
          text: `Novi upit s web stranice:\n\nIme: ${name}\nEmail: ${email}\nTelefon: ${phone}\nTema: ${topic}\n\nPoruka:\n${note}`,
          html,
        });

        emailSent = true;
      } catch (mailErr) {
        console.error('Error sending contact notification email:', mailErr);
      }
    }

    return NextResponse.json({
      success: true,
      emailSent,
      dbSaved,
      id: submissionId,
    });
  } catch (error) {
    console.error('Error processing contact submission:', error);
    return NextResponse.json({ success: false, error: 'Failed to process contact submission' }, { status: 500 });
  }
}
