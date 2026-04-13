"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Icon from "../ui/Icon"; // Certifique-on de que o caminho está correto

export default function QuickActionMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const actions = [
    { title: "Cartões", icon: "credit_card", color: "text-[#cdbdff]", href: "/cards" },
    { title: "Congelar cartão", icon: "ac_unit", color: "text-red-400" },
    { title: "Limites de Gastos", icon: "tune", color: "text-[#00daf3]" },
  ];

  return (
    /* Trocamos a div externa para não conflitar com o layout do BottomNav */
    <div className="relative flex flex-col items-center">
      
      {isOpen && (
        <div 
          className="fixed inset-0 z-[-1]" 
          onClick={() => setIsOpen(false)} 
        />
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: -20, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="absolute bottom-full mb-4 w-52 overflow-hidden rounded-3xl border border-white/10 bg-[#1c2026]/90 p-2 backdrop-blur-2xl shadow-2xl z-[60]"
          >
            <div className="flex flex-col gap-1">
              {actions.map((action, i) => (
                <button
                  key={action.title}
                  onClick={() => {
                    if (action.href) router.push(action.href);
                    setIsOpen(false);
                  }}
                  className="flex items-center gap-3 rounded-2xl p-3 transition-colors hover:bg-white/5 text-left w-full"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5">
                    <Icon name={action.icon} className={`${action.color} text-[18px]`} />
                  </div>
                  <span className="text-sm font-medium text-gray-200">{action.title}</span>
                </button>
              ))}
            </div>
            <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-[#1c2026] border-b border-r border-white/10" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Este é o único botão de disparo. 
          Certifique-se de que no BottomNav você NÃO envolveu o <QuickActionMenu /> com um <Link> ou outro <button> */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col items-center text-[10px] outline-none"
        type="button"
      >
        <motion.div
          animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
          className={`w-10 h-10 flex items-center justify-center rounded-full transition ${
            isOpen 
              ? "bg-[#cdbdff]/20 text-[#cdbdff]" 
              : "text-[#c9c4d5]"
          }`}
        >
          <Icon 
            name={isOpen ? "close" : "credit_card"} 
            className={`${isOpen ? "nav-active" : ""} text-[22px]`} 
          />
        </motion.div>

        <span
          className={`mt-1 uppercase tracking-widest transition-colors ${
            isOpen ? "text-[#cdbdff]" : "text-[#c9c4d5]"
          }`}
        >
          Cartão
        </span>
      </button>
    </div>
  );
}