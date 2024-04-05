"use client"
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { RecoilRoot } from "recoil";

const inter = Poppins({ weight:["400"] , subsets : ["latin"]});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <>
      <RecoilRoot>{children}</RecoilRoot>
      </>
  );
}