import type { Metadata } from "next";
import { Assistant } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const assistant = Assistant({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-assistant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "edward",
  description: "software engineer based in houston",
  openGraph: {
    title: "edward wang",
    description: "software engineer based in houston",
    url: "https://eddwang.me",
    siteName: "edward wang",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "edward wang",
    description: "software engineer based in houston",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={assistant.variable}>
      <body className="antialiased">
        <div className="mx-auto max-w-2xl px-6 py-12 md:py-20">
          <Nav />
          <main className="mt-16">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
