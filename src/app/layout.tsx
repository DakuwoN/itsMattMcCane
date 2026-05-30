import type { Metadata } from "next";
import { DM_Sans, DM_Mono, DM_Serif_Display } from "next/font/google";
import { Roboto_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

// Google fonts

const robotoMono = Roboto_Mono({
  weight: ['400', '500', '700'],
  style: ["normal", "italic"],
  variable: "--font-mono",
})

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
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
      <body className={`${dmSans.variable} ${dmMono.variable} ${dmSerif.variable} ${robotoMono.variable} bg-background`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
