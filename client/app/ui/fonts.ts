import { Poppins, Overpass } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  fallback: ["overpass"],
});

export const overpass = Overpass({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-overpass",
  fallback: ["poppins"],
});
