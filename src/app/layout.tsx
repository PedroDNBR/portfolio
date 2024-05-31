import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { config } from "@/config";

const relaway = Raleway({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = config.general.metadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={relaway.className}>{children}</body>
    </html>
  );
}
