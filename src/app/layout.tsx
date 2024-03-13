import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import { ReactNode } from "react";
import { ogImage } from "@/constant";

const inter = Inter({ subsets: [ "latin" ] });

export const metadata: Metadata = {
  title: "360 Realty",
  description: "Property Sales and Management Solutions",
  metadataBase: new URL("https://360realty.vercel.app/"),
  openGraph: {
    images: [
      {
        url: ogImage.src,
        width: ogImage.width,
        height: ogImage.height
      },
    ],
  },
  twitter: {
    images: [
      {
        url: ogImage.src,
        width: ogImage.width,
        height: ogImage.height
      },
    ]
  },
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
