import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local';

const interphases = localFont({
  src: [
    {
      path: '@/assets/fonts/TTInterphases/TT Interphases Pro Trial Light.ttf',
      weight: '100',
    },
    {
      path: '@/assets/fonts/TTInterphases/TT Interphases Pro Trial Thin.ttf',
      weight: '200',
    },
    {
      path: '@/assets/fonts/TTInterphases/TT Interphases Pro Trial Regular.ttf',
      weight: '300',
    },
    {
      path: '@/assets/fonts/TTInterphases/TT Interphases Pro Trial Medium.ttf',
      weight: '300',
    },
    {
      path: '@/assets/fonts/TTInterphases/TT Interphases Pro Trial Bold.ttf',
      weight: '700',
    },
    {
      path: '@/assets/fonts/TTInterphases/TT Interphases Pro Trial ExtraBold.ttf',
      weight: '900',
    },
  ],
  variable: '--font-interphases',
});

export const metadata: Metadata = {
  title: "Sushi",
  description: "Sushi restaurant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interphases.className} font-interphases antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
