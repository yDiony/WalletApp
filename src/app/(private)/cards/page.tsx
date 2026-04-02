"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Icon = ({ name, className = "" }: { name: string; className?: string }) => (
  <span className={`material-symbols-outlined ${className}`}>{name}</span>
);

export default function CardsPage() {
  return (
    <div className="min-h-screen bg-[#101419] text-[#e0e2eb] px-6 pt-12 pb-32 max-w-7xl mx-auto overflow-hidden">

      {/* HEADER */}
      <motion.section
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-12"
      >
        <span className="text-xs uppercase tracking-[0.3em] text-[#00daf3] mb-2 block">
          Management
        </span>
        <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
          My Cards
        </h2>
        <p className="text-[#c9c4d5] max-w-md">
          Control your physical and virtual assets with precision.
        </p>
      </motion.section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

        {/* LEFT - CARDS AREA */}
        <div className="lg:col-span-7 space-y-8">

          {/* CARD FÍSICO COM BORDA ANIMADA E BACKGROUND MESH */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative group"
          >
            {/* ANIMAÇÃO DA BORDA (Glow que gira) */}
            <div className="absolute -inset-[2px] rounded-2xl overflow-hidden">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_20%,#00daf3_50%,transparent_80%)] opacity-40 group-hover:opacity-100 transition-opacity"
              />
            </div>

            <div className="relative aspect-[1.586/1] w-full rounded-xl bg-[#0b0e14] p-8 flex flex-col justify-between border border-white/5 shadow-2xl overflow-hidden">

              {/* LUZ 1 - ROXA/VIOLETA (Mais intensa e rápida) */}
              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.4, 0.8, 0.4],
                  x: [-20, 100, -20],
                  y: [-20, 50, -20]
                }}
                transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 right-0 w-[70%] h-[70%] bg-[#3b00a1] blur-[60px] rounded-full mix-blend-screen"
              />

              {/* LUZ 2 - CIANO/AZUL (Movimento oposto) */}
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3],
                  x: [20, -80, 20],
                  y: [40, -40, 40]
                }}
                transition={{ duration: 9, repeat: Infinity, ease: "linear", delay: 1 }}
                className="absolute bottom-0 left-0 w-[60%] h-[60%] bg-[#00daf3]/40 blur-[50px] rounded-full mix-blend-screen"
              />

              {/* REFLEXO DE SUPERFÍCIE (SHIMMER) - Aquele brilho que passa rápido */}
              <motion.div
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent -skew-x-12 z-[1]"
              />

              <div className="relative z-10 flex justify-between">
                <span className="text-2xl font-black italic tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/40">
                  SOVEREIGN
                </span>
                <motion.div
                  animate={{
                    opacity: [0.4, 1, 0.4],
                    scale: [0.95, 1.05, 0.95]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Icon name="contactless" className="text-4xl text-white" />
                </motion.div>
              </div>

              <div className="relative z-10 space-y-6">
                <div className="flex gap-4 items-center">
                  {/* CHIP COM BRILHO PRÓPRIO */}
                  <div className="relative w-12 h-9 bg-gradient-to-br from-[#cdbdff] to-[#7b5cff] rounded-md shadow-[0_0_15px_rgba(205,189,255,0.3)]">
                    <div className="absolute inset-0 bg-black/10 rounded-md border border-white/20" />
                  </div>
                  <div className="text-xl lg:text-2xl tracking-[0.2em] text-white font-mono drop-shadow-lg">
                    •••• •••• •••• 8842
                  </div>
                </div>

                <div className="flex justify-between text-sm">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-[#c9c4d5] mb-1">Card Holder</p>
                    <p className="font-medium tracking-tight text-white">ALEXANDER VANCE</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] uppercase tracking-widest text-[#c9c4d5] mb-1">Expires</p>
                    <p className="font-medium text-white">12/28</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CARD VIRTUAL COM EFEITO DE VIDRO E PULSO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.01 }}
            className="relative rounded-xl bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-8 flex flex-col justify-between group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#00daf3]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="flex justify-between">
              <span className="text-2xl font-black italic text-[#00daf3] drop-shadow-[0_0_10px_rgba(0,218,243,0.3)]">
                VIRTUAL
              </span>
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Icon name="bolt" className="text-3xl text-[#00daf3]" />
              </motion.div>
            </div>

            <div className="mt-12">
              <p className="text-2xl tracking-[0.25em] mb-6 font-mono text-white/80">
                •••• •••• •••• 1092
              </p>

              <div className="flex gap-12 text-sm">
                <div>
                  <p className="text-[10px] uppercase text-[#c9c4d5] mb-1">CVV</p>
                  <p className="font-bold tracking-widest">***</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase text-[#c9c4d5] mb-1">Exp</p>
                  <p className="font-bold">09/26</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* RIGHT - CONTROLS & LIMITS */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-5 space-y-6"
        >
          {/* CONTROLES */}
          <div className="bg-[#181c22] rounded-2xl p-6 border border-white/5 space-y-4">
            <h3 className="text-lg font-bold mb-2">Quick Controls</h3>
            {[
              { title: "Freeze Card", icon: "ac_unit", color: "text-red-400" },
              { title: "Change PIN", icon: "password", color: "text-[#cdbdff]" },
              { title: "Contactless", icon: "contactless", color: "text-[#00daf3]" },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                whileHover={{ x: 5 }}
                className="flex justify-between items-center p-4 bg-[#1c2026] rounded-xl hover:bg-[#262a31] transition cursor-pointer border border-transparent hover:border-white/5"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#262a31] shadow-inner">
                    <Icon name={item.icon} className={`${item.color} text-[22px]`} />
                  </div>
                  <span className="font-medium">{item.title}</span>
                </div>
                <Icon name="chevron_right" className="text-[#c9c4d5] text-sm" />
              </motion.div>
            ))}
          </div>

          {/* LIMITES COM BARRAS ANIMADAS */}
          <div className="bg-[#181c22] rounded-2xl p-6 border border-white/5 space-y-6">
            <h3 className="text-lg font-bold">Spending Limits</h3>
            {[
              { label: "Daily Limit", current: 2450, total: 5000, color: "bg-[#cdbdff]", percent: "w-1/2" },
              { label: "Monthly Limit", current: 800, total: 2500, color: "bg-[#00daf3]", percent: "w-1/3" },
            ].map((limit) => (
              <div key={limit.label}>
                <div className="flex justify-between text-sm mb-3">
                  <span className="text-[#c9c4d5]">{limit.label}</span>
                  <span className="font-mono">${limit.current.toLocaleString()} / ${limit.total.toLocaleString()}</span>
                </div>
                <div className="h-2.5 bg-[#31353c] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: limit.current / limit.total * 100 + "%" }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                    className={`h-full ${limit.color} rounded-full shadow-[0_0_10px_rgba(0,0,0,0.5)]`}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* BANNER INTERATIVO */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-[#3b00a1] to-[#1c2026] rounded-2xl p-8 relative overflow-hidden border border-[#cdbdff]/20 group cursor-pointer"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-[#00daf3]/10 transition-colors" />
            <h4 className="text-xl font-bold text-[#cdbdff] mb-2 relative z-10">
              Priority Concierge
            </h4>
            <p className="text-sm text-[#c9c4d5] max-w-[200px] relative z-10 leading-relaxed">
              Unlock global airport lounge access and exclusive benefits.
            </p>
            <Icon
              name="diamond"
              className="absolute bottom-4 right-4 text-[#cdbdff]/20 text-6xl group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500"
            />
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}