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
  title: "Oreofe Daniel Oladepo (BlaccDante) - Software Engineer Portfolio",
  description: "Full-stack software engineer specializing in Web3, creative technologies, and modern web applications. View my projects and get in touch.",
  keywords: ["software engineer", "web3", "frontend", "backend", "portfolio", "react", "nextjs"],
  authors: [{ name: "Oreofe Daniel Oladepo", url: "https://github.com/blaccdante" }],
  openGraph: {
    title: "Oreofe Daniel Oladepo - Software Engineer Portfolio",
    description: "Full-stack software engineer specializing in Web3, creative technologies, and modern web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
