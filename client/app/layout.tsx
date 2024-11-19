import type { Metadata } from "next";
import { overpass, poppins } from "./components/fonts";

import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | এক টাকাই বৃক্ষরোপণ",
    default: "মূল পাতা | এক টাকাই বৃক্ষরোপণ",
  },
  description:
    "Give One Taka Daily, Change Bangladesh Gradually by Planting Trees",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${overpass.className} ${poppins.className} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
