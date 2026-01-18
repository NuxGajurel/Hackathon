import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import I18nProvider from "./i18n-provider";
import { AuthProvider } from "../context/AuthContext";
import GoogleAuthWrapper from "../components/GoogleAuthWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SaralSewa - Hamro Sewa | Healthcare for Rural Nepal",
  description: "AI-powered healthcare management system for rural areas of Nepal",
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
        <I18nProvider>
          <GoogleAuthWrapper>
            <AuthProvider>
              <Navbar />
              {children}
            </AuthProvider>
          </GoogleAuthWrapper>
        </I18nProvider>
      </body>
    </html>
  );
}
