import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Layout from '../components/layout/Layout';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tiberius AI | Business Process Automation for SMEs",
  description: "AI-powered business process automation, documentation, and optimization solutions for SMEs across the UK and Ireland.",
  keywords: "business process automation, AI automation, business process documentation, SME automation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-deep-blue text-text-light`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
