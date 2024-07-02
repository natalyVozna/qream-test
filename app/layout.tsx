import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";

const modern = localFont({
  src: "./fonts//ModernDOS8x16.woff2",
  display: "swap",
  style: "normal",
  weight: "normal",
});

export const metadata: Metadata = {
  title: "File explorer",
  description: "File explorer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={modern.className}>
        <Header />
        <div className="container">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
