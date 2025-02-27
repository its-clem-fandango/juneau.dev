import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Juneau Dahl | Personal Website",
  description: "Personal website and portfolio showcasing my work and projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans selection:bg-foreground selection:text-background`}
      >
        <div className="fixed top-0 left-0 w-full h-1 bg-foreground z-50"></div>
        <div className="fixed bottom-0 left-0 w-full h-1 bg-foreground z-50"></div>
        <div className="fixed top-0 left-0 h-full w-1 bg-foreground z-50"></div>
        <div className="fixed top-0 right-0 h-full w-1 bg-foreground z-50"></div>
        {children}
      </body>
    </html>
  );
}
