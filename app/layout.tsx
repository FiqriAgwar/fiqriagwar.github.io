import type React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aliffiqri Agwar - Software Engineer & Many More",
  description:
    "Portfolio showcasing software engineering skills, and other expertise of Aliffiqri Agwar",
  icons: [
    {
      rel: "icon",
      type: "image",
      url: "/images/abouts/profpic.jpg",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col`}
      >
        <Navigation />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

import "./globals.css";
