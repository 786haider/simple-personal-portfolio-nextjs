import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";



export const metadata: Metadata = {
  title: "Simple-portfolio-web",
  description: " By Haider Huusain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className=""
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
