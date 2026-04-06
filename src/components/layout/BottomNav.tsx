"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Icon from "../ui/Icon";
import QuickActionMenu from "./QuickActionMenu";

export default function BottomNav() {
  const pathname = usePathname();

  // Removemos o "Cartão" daqui para tratá-lo separadamente
  const items = [
    { name: "Início", icon: "home", href: "/" },
    { name: "Extrato", icon: "query_stats", href: "/history" },
    { name: "Menu", icon: "grid_view", href: "/menu" },
  ];

  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:hidden">
      <div className="flex items-center gap-10 px-8 py-3 rounded-full bg-[#181c22]/90 backdrop-blur-xl border border-[#474553]/20 shadow-lg">
        
        {/* Renderiza os primeiros dois itens: Início e Extrato */}
        {items.slice(0, 2).map((item) => {
          const active = pathname === item.href;
          return (
            <Link key={item.name} href={item.href}>
              <motion.div
                whileTap={{ scale: 0.9 }}
                className="flex flex-col items-center text-[10px]"
              >
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-full transition ${
                    active ? "bg-[#cdbdff]/20 text-[#cdbdff]" : "text-[#c9c4d5]"
                  }`}
                >
                  <Icon
                    name={item.icon}
                    className={`${active ? "nav-active" : ""} text-[22px]`}
                  />
                </div>
                <span className={`mt-1 uppercase tracking-widest ${active ? "text-[#cdbdff]" : "text-[#c9c4d5]"}`}>
                  {item.name}
                </span>
              </motion.div>
            </Link>
          );
        })}

       
        <QuickActionMenu />

        {/* Renderiza o último item: Menu */}
        {items.slice(2).map((item) => {
          const active = pathname === item.href;
          return (
            <Link key={item.name} href={item.href}>
              <motion.div
                whileTap={{ scale: 0.9 }}
                className="flex flex-col items-center text-[10px]"
              >
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-full transition ${
                    active ? "bg-[#cdbdff]/20 text-[#cdbdff]" : "text-[#c9c4d5]"
                  }`}
                >
                  <Icon
                    name={item.icon}
                    className={`${active ? "nav-active" : ""} text-[22px]`}
                  />
                </div>
                <span className={`mt-1 uppercase tracking-widest ${active ? "text-[#cdbdff]" : "text-[#c9c4d5]"}`}>
                  {item.name}
                </span>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}