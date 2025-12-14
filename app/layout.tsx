import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { personalsInfos } from "@/src/datas/PersonalInfos";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: personalsInfos.pseudo,
  applicationName: personalsInfos.pseudo,
  description: personalsInfos.resume,
  keywords: "Développement, Design, Full-Stack, Digital Solutions",
  authors: [{name: "Marley Pregovi MBOUNGOU", url: "https://pregovi.cg",}],
  appleWebApp: { capable: true, title: personalsInfos.pseudo, statusBarStyle: "black-translucent" },
  robots: "index, follow",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
