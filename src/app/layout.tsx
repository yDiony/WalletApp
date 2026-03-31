"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Home } from "@/components/ui/svgs/navigationbar/home";
import { Graphicstab } from "@/components/ui/svgs/navigationbar/graphicstab";
import { CreditCard } from "lucide-react";
import { Moresquares } from "@/components/ui/svgs/moresquares";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";


const inter = Inter({ subsets: ["latin"] });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const Icon = ({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) => <span className={`material-symbols-outlined ${className}`}>{name}</span>;


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        {/* NAV */}
        <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:hidden">
          <div className="flex items-center gap-10 px-8 py-3 rounded-full bg-[#181c22]/90 backdrop-blur-xl border border-[#474553]/20 shadow-lg">
            {[
              { name: "Início", icon: "home", href: "/" },
              { name: "Extrato", icon: "query_stats", href: "/history" },
              { name: "Cartão", icon: "credit_card", href: "/cards" },
              { name: "Menu", icon: "grid_view", href: "/menu" },
            ].map((item) => (
              <Link key={item.name} href={item.href}>
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  className="flex flex-col items-center text-[10px]"
                >
                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-full transition ${
                      pathname === item.href
                        ? "bg-[#cdbdff]/20 text-[#cdbdff]"
                        : "text-[#c9c4d5]"
                    }`}
                  >
                    <Icon
                      name={item.icon}
                      className={`${
                        pathname === item.href ? "nav-active" : ""
                      } text-[22px]`}
                    />
                  </div>

                  <span
                    className={`mt-1 uppercase tracking-widest ${
                      pathname === item.href
                        ? "text-[#cdbdff]"
                        : "text-[#c9c4d5]"
                    }`}
                  >
                    {item.name}
                  </span>
                </motion.div>
              </Link>
            ))}
          </div>
        </nav>
      </body>
    </html>
  );
}