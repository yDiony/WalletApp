"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";



const Icon = ({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) => <span className={`material-symbols-outlined ${className}`}>{name}</span>;

export default function HomePage() {
  const pathname = usePathname();
  return (
    <div className="min-h-screen bg-[#101419] text-[#e0e2eb]">
      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#101419]/80 border-b border-[#474553]/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-[#474553]/30">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBl-Dq648KwNKRSRVLclvqcpKW54EqK3pM-y0KIBXLXVpeJnbO8SlqyaTuPD1ZIcKEdzfxoAAg2HO-8zoBNthMb6hkJvfGKXjLVOEqSpCIEQRKo6hG7uyjtP4rXprAp2Y3-irnVvirOwS9IofYzLuzPFoclNR3iqcMrhCK5XWAq6FoxoQ8cMX60rIyEv3CSoqp4IfANanSSdWJ9GyDqHkWTEiWzGwJK9k1xnuiUI0vth7dCovvFRZFCCqsDnyz3ZxytDFQC7C7nvyH9"
                alt="user"
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
            <h1 className="text-[#cdbdff] font-bold text-lg">
              Sovereign Vault
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <nav className="hidden md:flex bg-[#181c22] p-1 rounded-full">
              {["Início", "Extrato", "Cartões", "Investir"].map((item, i) => (
                <button
                  key={item}
                  className={`px-4 py-2 text-xs rounded-full transition-all ${i === 0
                    ? "bg-[#cdbdff] text-[#370096]"
                    : "text-[#c9c4d5] hover:bg-[#1c2026]"
                    }`}
                >
                  {item}
                </button>
              ))}
            </nav>

            <motion.button
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full hover:bg-[#1c2026]"
            >
              <Icon name="notifications" />
            </motion.button>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="pt-24 pb-32 px-6 max-w-7xl mx-auto space-y-8">
        {/* SALDO */}
        <section>
          <p className="text-xs uppercase tracking-widest text-[#c9c4d5]">
            Saldo Disponível
          </p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-extrabold"
          >
            R$ 298,87
          </motion.h2>

          <div className="flex gap-2 mt-2 text-sm">
            <span className="text-[#00daf3]">Rendimento:</span>
            <span className="text-[#00daf3] font-bold">+R$ 12,40</span>
          </div>
        </section>

        {/* CARDS */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-[#181c22] p-6 rounded-xl border border-[#474553]/20"
          >
            <div className="flex justify-between">
              <p className="text-xs text-[#c9c4d5] uppercase">
                Patrimônio Total
              </p>
              <Icon name="account_balance" className="text-[#cdbdff]" />
            </div>
            <p className="text-2xl font-bold text-[#cdbdff] mt-4">
              R$ 12.450,00
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-[#3b00a1] p-6 rounded-xl relative overflow-hidden"
          >
            <div className="flex justify-between">
              <p className="text-xs text-[#a68bff] uppercase">Fatura</p>
              <Icon name="credit_card" className="text-[#a68bff]" />
            </div>

            <p className="text-xl font-bold mt-4">Vence em 24 Out</p>
            <p className="text-[#a68bff]">R$ 1.540,20</p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 bg-white/20 px-4 py-2 rounded-full text-xs"
            >
              Pagar fatura
            </motion.button>
          </motion.div>
        </section>

        {/* AÇÕES */}
        <section>
          <h3 className="text-xs uppercase text-[#c9c4d5] mb-4">
            Transações rápidas
          </h3>

          <div className="grid grid-cols-4 gap-4">
            {[
              { name: "Pix", icon: "qr_code_2" },
              { name: "Transferir", icon: "send" },
              { name: "Boletos", icon: "receipt_long" },
              { name: "Investir", icon: "savings" },
            ].map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                className="flex flex-col items-center gap-2"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#181c22] border border-[#474553]/20 hover:bg-[#cdbdff] hover:text-[#370096] transition">
                  <Icon name={item.icon} />
                </div>
                <span className="text-[10px] text-[#c9c4d5] uppercase">
                  {item.name}
                </span>
              </motion.button>
            ))}
          </div>
        </section>

        {/* BANNER */}
        <motion.section
          whileHover={{ scale: 1.01 }}
          className="relative h-56 rounded-xl overflow-hidden"
        >
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlqNnBpsWavij_o2_vHmDC9x9hm3GwBEMJ2HSsCOmRX9acGxxC6XJ_Pr-mWg-ZYKdLDunJ1DZulo2T3Z51N5CBph5zQuWtGODGkDolQ-SjkJGD-NcQYDunYlyEKbXVOf7nwu2hyF2wuh3pLUY0U9u6sTPW0geujmPXeBrK4v_pkYdV5_ZA_02NhS6vjryVuNXDkaEFsv2x6MGroVYu7nKLooqrkjy1FuEDt44HE_WkPTTU2OEgV8oqcxnbRRiqSELC8priKsF1x6Sn"
            alt="banner"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#101419] via-[#101419]/70 to-transparent" />

          <div className="relative h-full flex flex-col justify-center px-6 max-w-sm">
            <span className="bg-[#00daf3] text-[#00363d] text-[10px] px-2 py-1 rounded-full mb-3 uppercase">
              Oportunidade
            </span>
            <h2 className="text-xl font-bold">Renda Fixa Premium</h2>
            <p className="text-sm text-[#e0e2eb]/70 mb-4">
              110% do CDI para clientes premium.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-[#cdbdff] text-[#370096] px-4 py-2 rounded-full text-sm"
            >
              Saiba mais
            </motion.button>
          </div>
        </motion.section>

        {/* TRANSAÇÕES */}
        <section>
          <div className="flex justify-between mb-4">
            <h3 className="text-xs text-[#c9c4d5] uppercase">
              Últimos lançamentos
            </h3>
            <span className="text-xs text-[#00daf3] cursor-pointer">
              Ver tudo
            </span>
          </div>

          <div className="space-y-2">
            {[
              {
                name: "Netflix",
                icon: "subscriptions",
                value: "-R$ 55,90",
              },
              {
                name: "Pix recebido",
                icon: "payments",
                value: "+R$ 1200,00",
              },
              {
                name: "Mercado Livre",
                icon: "shopping_cart",
                value: "-R$ 242,30",
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.01 }}
                className="flex justify-between items-center p-4 bg-[#181c22] rounded-lg border border-[#474553]/10"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#262a31]">
                    <Icon name={t.icon} />
                  </div>
                  <span>{t.name}</span>
                </div>
                <span
                  className={
                    t.value.includes("+") ? "text-[#00daf3]" : "text-white"
                  }
                >
                  {t.value}
                </span>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

     
    </div>
  );
}
