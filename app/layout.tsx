import type { Metadata } from "next";
import {Mona_Sans} from "next/font/google";
import "./globals.css"
import React from "react";
import { Toaster } from "sonner";


const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PrepWise",
  description: "An AI powered interview prep platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='dark'>
      <body className={`${monaSans.className} antialiased pattern bg-top bg-no-repeat`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
