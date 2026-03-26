import type { Metadata } from "next";
import { Libre_Baskerville } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";
import PageTransition from "@/components/PageTransition";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  weight: ["400"],
  style: ["italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alex — Portfolio",
  description: "Portfolio site.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${libreBaskerville.variable} antialiased`}>
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <CustomCursor />
        <PageTransition>{children}</PageTransition>
        <Analytics />
      </body>
    </html>
  );
}
