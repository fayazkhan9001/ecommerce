import { Inter, Poppins } from "next/font/google";

//inter font
export const inter = Inter({
  weight: ["600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});
