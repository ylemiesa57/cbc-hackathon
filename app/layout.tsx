import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CBC Hackathon — April 26, 2026",
  description:
    "Claude Builders Club Hackathon at MIT Media Lab. Build at the frontier. 100 MIT students. April 26, 2026.",
  openGraph: {
    title: "CBC Hackathon — April 26, 2026",
    description: "Build at the frontier. MIT Media Lab, Cambridge MA.",
    type: "website",
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
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0D1B2A] text-[#F4F4F4]">
        {children}
      </body>
    </html>
  );
}
