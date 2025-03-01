import type { Metadata } from "next";
import { PT_Sans } from "next/font/google";
import Navbar from "./components/Navbar";
import "./styles/globals.css";

const ptSans = PT_Sans({
  variable: "--font-pt-sans",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Mohamed Ibrahim - Software Developer",
  description:
    "Software Developer skilled in web & mobile development, AI, and scalable software solutions.",
  keywords: [
    "Mohamed Ibrahim",
    "Software Engineer",
    "Software Developer",
    "Web Development",
    "Mobile Development",
    "React",
    "Next.js",
    "Android",
    "Firebase",
    "AI",
    "Full Stack Developer",
    "UTSC",
    "University of Toronto",
    "Computer Science",
  ],
  authors: [{ name: "Mohamed Ibrahim", url: "https://yourwebsite.com" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ptSans.variable} antialiased bg-primary relative`}>
        <Navbar />
        <main className="max-w-screen-xl mx-auto px-8">{children}</main>
        <footer className="absolute bottom-0 w-full text-center py-2 -z-10">&copy; {new Date().getFullYear()} Mohamed Ibrahim</footer>
      </body>
    </html>
  );
}
