import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NextJs Boilerplate',
  description: 'nextjs Boilerplate setting',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body>{children}</body>
    </html>
  );
}
