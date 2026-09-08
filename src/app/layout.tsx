import type { Metadata } from "next";
import { Smooch_Sans, Space_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const smoochSans = Smooch_Sans({
  subsets: ["latin"],
  variable: "--font-smooch-sans",
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gryffin Studio | Design & Development",
  description: "Aesthetic design & specialized software engineering studio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${smoochSans.variable} ${spaceMono.variable}`}>
      <body className="bg-black text-white font-sans antialiased">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
