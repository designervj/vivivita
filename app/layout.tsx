import type { Metadata } from 'next';
import '../src/index.css';

export const metadata: Metadata = {
  title: 'Marina Coaching - Od Dobre Djevojčice do Žene Koja Vodi Svoj Život',
  description:
    'Programi i 1:1 rad za žene koje su cijeli život živjele po tuđim pravilima i žele početi živjeti svoj život.',
  openGraph: {
    title: 'Marina Coaching - Od Dobre Djevojčice do Žene Koja Vodi Svoj Život',
    description:
      'Programi i 1:1 rad za žene koje su cijeli život živjele po tuđim pravilima i žele početi živjeti svoj život.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="hr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#fafafa] text-[#2c3338] antialiased">{children}</body>
    </html>
  );
}
