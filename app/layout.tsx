import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ayush Sikarwar | Full Stack Developer",
  description: "Personal portfolio of Ayush Sikarwar - Full Stack Developer & Open Source Enthusiast",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-gray-950 text-white antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
