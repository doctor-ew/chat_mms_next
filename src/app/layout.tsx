// /apps/web/app/layout.tsx

//import "./globals.css";
import "../styles/tailwind.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ask GPT About Pocket Morties",
  description: "Ask GPT About Pocket Morties",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
      <html lang="en">
      <link href="https://unpkg.com/tailwindcss@^2.0/dist/tailwind.min.css" rel="stylesheet"/>
      <body className={inter.className}>{children}</body>
      </html>
  );
}
