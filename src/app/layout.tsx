import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import AdminBar from '../components/layout/AdminBar';
import ThemeProvider from '../components/theme/ThemeProvider';
import './globals.css';

export const metadata: Metadata = {
  title: 'Marina Coaching - Od Dobre Djevojcice do Zene Koja Vodi Svoj Zivot',
  description:
    'Programi i 1:1 rad za zene koje su cijeli zivot zivjele po tudim pravilima i zele poceti zivjeti svoj zivot.',
  openGraph: {
    title: 'Marina Coaching - Od Dobre Djevojcice do Zene Koja Vodi Svoj Zivot',
    description:
      'Programi i 1:1 rad za zene koje su cijeli zivot zivjele po tudim pravilima i zele poceti zivjeti svoj zivot.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const cookieStore = await cookies();
  const isAdmin = cookieStore.get('admin_token')?.value === 'true';

  return (
    <html lang="hr">
      <body className="vivivita-body">
        <ThemeProvider />
        {isAdmin && <AdminBar />}
        {children}
      </body>
    </html>
  );
}
