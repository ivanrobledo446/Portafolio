import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Outfit } from "next/font/google";
import "normalize.css/normalize.css";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Iván Robledo - Portafolio",
  description: "Acerca de mi, experiencia y proyectos",
  icons: {
    icon: "/img/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
