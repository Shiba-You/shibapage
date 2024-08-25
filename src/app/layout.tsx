import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/globals.scss";
import { Author } from "next/dist/lib/metadata/types/metadata-types";
import Header from "@/features/common/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shiba-You's HP",
  description: "This page is Shiba-You's HP.",
  authors: {
    name: "Shiba-You",
  } as Author,
  icons:
    "https://user-images.githubusercontent.com/50415577/196866382-ed9ebf64-f2c2-4efa-8094-e223a5cf5d70.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
