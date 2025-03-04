import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from '@/app/header'
import Footer from '@/app/footer'

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Whole Presence Counseling",
  description: "Video counseling for Oregon clients",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.className} antialiased`}>
      <body className="m-8 md:m-16 max-w-3xl">
	<Header />
        {children}
	<Footer />
      </body>
    </html>
  );
}
