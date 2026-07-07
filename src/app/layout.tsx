import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tasty Wasp - Independent Branding Studio",
  description:
    "Tasty Wasp is an independent branding studio building identities, motion, and digital systems worth keeping."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
