import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import BaiduAnalytics from "@/components/BaiduAnalytics";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "晓雨 - CodeRains",
  description: "小小休憩之处",
  icons: {
    icon: [
      { url: "./favicon/favicon.ico" },
      { url: "./favicon/favicon.svg", type: "image/svg+xml" },
      { url: "./favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "./favicon/apple-touch-icon.png" },
      { url: "./favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <BaiduAnalytics />
      </body>
    </html>
  );
}
