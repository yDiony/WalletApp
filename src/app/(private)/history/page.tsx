"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import TransactionItem from "@/components/transactions/TransactionItem";
import { transactions } from "@/lib/data/mock";
import { groupTransactions } from "@/lib/utils/groupTransactions";
import { formatCurrency } from "@/lib/utils/format";
import { useState } from "react";
import TransactionModal from "@/components/transactions/TransactionModal";


const Icon = ({ name, className = "" }: any) => (
  <span className={`material-symbols-outlined ${className}`}>
    {name}
  </span>
);

export default function ExtratoPage() {

  const pathname = usePathname();
  const grouped = groupTransactions(transactions) as Record<string, any[]>;
  const [selectedTransaction, setSelectedTransaction] = useState<any>(null);
  return (
    <div className="min-h-screen bg-[#101419] text-[#e0e2eb] pb-32">

      {/* HEADER SIMPLIFICADO */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#101419]/80 border-b border-[#474553]/20">
        <div className="flex items-center justify-between px-6 py-4">

          <div className="flex items-center gap-3">
            <Link href="/">
              <motion.div whileTap={{ scale: 0.9 }}>
                <Icon name="arrow_back" className="text-[#c9c4d5]" />
              </motion.div>
            </Link>

            <div>
              <h1 className="text-lg font-bold">Atividade</h1>
              <p className="text-xs text-[#c9c4d5] uppercase tracking-widest">
                Outubro
              </p>
            </div>
          </div>

          <Icon name="search" className="text-[#c9c4d5]" />
        </div>
      </header>

      {/* CONTEÚDO */}
      <main className="pt-24 px-6 space-y-8">

        {/* RESUMO */}
        <section className="bg-[#181c22] p-6 rounded-xl border border-[#474553]/20 flex justify-between">

          <div>
            <p className="text-[10px] uppercase text-[#c9c4d5]">
              Entradas
            </p>
            <p className="text-[#00daf3] font-bold text-xl">
              +R$ 12.450
            </p>
          </div>

          <div className="w-px bg-[#474553]/30" />

          <div className="text-right">
            <p className="text-[10px] uppercase text-[#c9c4d5]">
              Saídas
            </p>
            <p className="font-bold text-xl">
              -R$ 8.124
            </p>
          </div>
        </section>

        {/* BUSCA */}
        <div className="relative">
          <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c9c4d5]" name="search" />
          <input
            placeholder="Buscar transações..."
            className="w-full bg-[#181c22] rounded-xl py-4 pl-12 pr-4 outline-none border border-[#474553]/20 focus:border-[#cdbdff]"
          />
        </div>

        {/* LISTA */}
        {Object.entries(grouped).map(([date, items]) => (
          <div key={date}>
            <h3 className="text-sm text-[#c9c4d5] mb-3">{date}</h3>

            <div className="space-y-3">

              {items.map((t: any) => (

                <TransactionItem

                  key={t.id}
                  name={t.name}
                  icon={t.icon}
                  value={formatCurrency(t.amount)}
                  onClick={() => setSelectedTransaction(t)}
                />
              ))}
            </div>
          </div>
        ))}
      </main>
      
      <TransactionModal
        data={selectedTransaction}
        onClose={() => setSelectedTransaction(null)}
      />
    </div>

  );
}