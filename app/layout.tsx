import { SpeedInsights } from "@vercel/speed-insights/next"
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
      <body className="p-8 md:p-16 max-w-5xl">
	<Header />
        {children}
	<Footer />
	<SpeedInsights />
      </body>
    </html>
  );
}
