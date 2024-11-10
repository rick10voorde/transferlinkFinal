import type { Metadata } from "next";
import { ClerkProvider } from '@clerk/nextjs';
import { Figtree } from 'next/font/google';
import localFont from "next/font/local";
import Navbar from '@/components/layout/Navbar';
import "./globals.css";

const figtree = Figtree({ 
  subsets: ['latin'],
  variable: '--font-figtree',
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "TransferLink",
  description: "The professional platform for football transfers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${figtree.variable} font-sans antialiased min-h-screen flex flex-col`}
        >
          <Navbar />
          <main className="flex-1 pt-16">
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}