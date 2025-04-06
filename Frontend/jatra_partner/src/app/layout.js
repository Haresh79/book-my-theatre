import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/component/Sidebar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Partner App",
  description: "Upload a Jatra, Short film, Drama all informations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-wrap`}>
        <Sidebar/>
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
