import type { Metadata } from "next";
import { overpass, poppins } from "./components/fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: "এক টাকাই ব্রিক্ষরুপন",
  description:
    "GiGive One Taka Daily, Change Bangladesh Gradually by Planting Trees",
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
        {children}
      </body>
    </html>
  );
}
