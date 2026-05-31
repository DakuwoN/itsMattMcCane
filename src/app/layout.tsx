import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

// Google fonts

const robotoMono = Roboto_Mono({
  weight: ['400', '500', '700'],
  style: ["normal", "italic"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Matthew McCane",
  description: "Software Engineering",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoMono.variable} bg-background`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
