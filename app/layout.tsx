import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter, Libre_Caslon_Text } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const libre = Libre_Caslon_Text({
  variable: "--font-libre",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Leo Wealth",
  description: "Created and Designs By Utsav Patel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/leo-wealth-favicon.svg" sizes="any" />
      <body className={`${inter.variable} ${libre.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
