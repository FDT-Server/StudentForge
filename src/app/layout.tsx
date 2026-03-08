import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import SubNavbar from "@/components/SubNavbar";
import WhatsAppButton from "@/components/WhatsAppButton";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Student Forge | Empowering the Future of Education",
  description: "Student Forge is a premier ed-tech platform designed to empower students and educators with cutting-edge learning tools.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} font-sans antialiased`}
      >
        <header className="fixed top-0 z-50 w-full">
          <TopBanner />
          <Navbar />
          <SubNavbar />
        </header>
        <main className="pt-[124px]">
          {children}
        </main>
        <WhatsAppButton />
      </body>
    </html>
  );
}
