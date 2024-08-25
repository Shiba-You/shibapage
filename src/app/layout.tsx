import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/globals.scss";
import { Author } from "next/dist/lib/metadata/types/metadata-types";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shiba-You's HP",
  description: "This page is Shiba-You's HP.",
  authors: {
    name: "Shiba-You",
  } as Author,
  icons: "https://avatars.githubusercontent.com/u/50415577?v=4",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
