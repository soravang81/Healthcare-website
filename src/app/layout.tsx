import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

const inter = Poppins({ weight:["400"] , subsets : ["latin"]});

export const metadata: Metadata = {
  title: "Healthcare",
  description: "Healthcare Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
