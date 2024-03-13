import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import { ReactNode } from "react";

const inter = Inter({ subsets: [ "latin" ] });

export const metadata: Metadata = {
  title: "360 Realty",
  description: "Property Sales and Management Solutions",
  openGraph: {
    images: "/img/hero.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html data-theme="light">
      <body className={ inter.className }>
        <Navbar />
        <main>
          { children }
        </main>
      </body>
    </html >
  );
}
