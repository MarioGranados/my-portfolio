import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FX from "./components/FX";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });


  export const metadata = {
  title: "Mario Granados | Web Developer & SEO Freelancer",
  description:
    "I design and build modern, fast, SEO-optimized websites for small businesses. Get more customers with a professional online presence.",
  keywords: [
    "web developer",
    "freelancer",
    "SEO websites",
    "business website",
    "Next.js developer",
  ],
  openGraph: {
    title: "Mario Granados | Web Developer",
    description:
      "Modern websites that help businesses grow online.",
    type: "website",
    url: "https://MarioGranados.com",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased `}
    >
      <body className="min-h-full flex flex-col bg-slate-950 ">
        <Navbar />
        <FX/>
<main className="min-h-screen bg-linear-to-b from-[#0B1120] via-[#070B14] to-black text-white">
  {children}
</main>        <Footer />
      </body>
    </html>
  );
}
