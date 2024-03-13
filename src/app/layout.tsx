import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";

const inter = Inter({ subsets: [ "latin" ] });

export const metadata: Metadata = {
  title: "360 Realty",
  description: "Property Sales and Management Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ inter.className }>
        <Navbar />
        <main>
          { children }
        </main>
      </body>
    </html>
  );
}
