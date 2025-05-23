import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { openSans, laila } from "@/fonts/fonts";
import { Suspense } from "react";
import Loading from "@/components/Others/Loading";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "first Event Tap",
  description: "Event Tap",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
         <link rel="stylesheet" href="https://unpkg.com/swiper/css/swiper.css"/>
        <link rel="stylesheet" href="https://unpkg.com/swiper/css/swiper.min.css"/>
      </head>
      <body
        className={`${openSans.variable} ${laila.variable}`}
      >
        <Toaster position="top-center" expand={true} richColors />
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
