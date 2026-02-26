import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";


const arenaUno = localFont({
  src: [
    {
      path: "./fonts/ArenaUno-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/ArenaUno-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/ArenaUno-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-arena", 
});



export const metadata: Metadata = {
  title: "Paritrana Innovation",
  description: "Redefining Excellence at Paritrana Innovation - We build cutting-edge solutions designed to protect, empower, and scale your business in the digital age.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body
        className={` ${arenaUno.variable} antialiased`}
      >
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
