"use client";

import { formatCurrency } from "@/lib/utils/format";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import dynamic from 'next/dynamic';

// Player de Lottie com SSR desativado
const Lottie = dynamic(() => import('react-lottie-player'), { ssr: false });

export default function TransactionModal({ data, onClose }: any) {
  const [isLottiePlaying, setIsLottiePlaying] = useState(true);

  // Reseta o estado quando o modal abre com novos dados
  useEffect(() => {
    if (data) setIsLottiePlaying(true);
  }, [data]);

  return (
    <AnimatePresence>
      {data && (
        <div className="fixed inset-0 z-[999] flex items-end justify-center">
          {/* BACKDROP */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* MODAL */}
          <motion.div
            key="modal"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300, mass: 0.8 }}
            drag="y"
            dragConstraints={{ top: 0 }}
            dragElastic={0.1}
            onDragEnd={(e, info) => {
              if (info.offset.y > 100 || info.velocity.y > 500) {
                onClose();
              }
            }}
            className="relative w-full max-w-lg bg-[#181c22] rounded-t-[2.5rem] shadow-2xl flex flex-col max-h-[92vh] touch-none"
          >
            {/* EXTENSÃO DE FUNDO (OVERSCAN) */}
            <div className="absolute top-[98%] left-0 right-0 h-[100vh] bg-[#181c22] z-[-1]" />

            {/* HANDLE */}
            <div className="flex justify-center py-5 cursor-grab active:cursor-grabbing">
              <div className="w-12 h-1.5 bg-white/20 rounded-full" />
            </div>

            {/* CONTEÚDO */}
            <div className="flex-1 overflow-y-auto px-6 pb-10">
              <div className="flex flex-col items-center text-center">
                {/* ÍCONE CATEGORIA */}
                <div className="w-20 h-20 rounded-3xl bg-[#cdbdff]/10 flex items-center justify-center mb-4 border border-[#cdbdff]/20">
                  <span className="material-symbols-outlined text-4xl text-[#cdbdff]">
                    {data.icon}
                  </span>
                </div>
                
                <h2 className="text-gray-400 font-medium text-sm tracking-widest uppercase">
                  {data.name}
                </h2>
                
                <p className="text-4xl font-bold mt-2 text-white">
                  {formatCurrency(data.amount)}
                </p>

                {/* ÁREA DE STATUS FIXA (Evita Layout Shift) */}
                <div className="relative w-full h-[80px] flex items-center justify-center mt-2">
                  <AnimatePresence mode="wait">
                    {isLottiePlaying ? (
                      <motion.div
                        key="lottie"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="absolute"
                      >
                        <Lottie
                          loop={false}
                          play
                          path="/animations/success-check.json"
                          style={{ width: '90px', height: '90px' }}
                          onComplete={() => setIsLottiePlaying(false)}
                        />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="pill"
                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0b2f30] border border-[#0d4f52]"
                      >
                        <span className="material-symbols-outlined text-[#18e0e6] text-lg">
                          check_circle
                        </span>
                        <span className="text-[#18e0e6] font-bold text-xs tracking-wider uppercase">
                          SUCCESSFUL
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* GRID DE INFO */}
              <div className="grid grid-cols-2 gap-3 mb-8 mt-4">
                <div className="bg-[#232832]/50 p-4 rounded-2xl border border-white/5">
                  <p className="text-[10px] text-gray-500 uppercase font-bold mb-1">Data</p>
                  <p className="text-sm font-medium text-gray-200">
                    {new Date(data.date).toLocaleDateString("pt-BR")}
                  </p>
                </div>
                <div className="bg-[#232832]/50 p-4 rounded-2xl border border-white/5">
                  <p className="text-[10px] text-gray-500 uppercase font-bold mb-1">Categoria</p>
                  <p className="text-sm font-medium text-gray-200">{data.category}</p>
                </div>
              </div>

              {/* BOTÃO */}
              <motion.button 
                whileTap={{ scale: 0.96 }}
                className="w-full py-4 rounded-2xl bg-[#7b5cff] text-white font-bold shadow-lg shadow-[#7b5cff]/20 active:bg-[#6e4ef5] transition-colors"
              >
                Compartilhar Comprovante
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}