"use client";
import { useState, useEffect, ReactNode, SetStateAction } from "react";
import * as motion from "motion/react-client";
import { animate } from "motion"
import {Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose} from "@/components/ui/dialog";

import { Topupicon } from "@/components/ui/svgs/topup";
import { Moresquares } from "@/components/ui/svgs/moresquares";
import { Sendmoneyicon } from "@/components/ui/svgs/sendmoney";
import { Recievemoneyicon } from "@/components/ui/svgs/recievemoney";
import {ArrowDown, ArrowUp,Landmark,} from "lucide-react";
import { Home } from "@/components/ui/svgs/navigationbar/home";
import { UserIcon } from "lucide-react";
import { Graphicstab } from "@/components/ui/svgs/navigationbar/graphicstab";
import { Button } from "@/components/ui/button";

interface Transacao {
  id: number;
  icon: ReactNode;
  titulo: string;
  data: string;
  valor: string;
}

export default function home() {
  const [transacoes, setTransacoes] = useState<Transacao[]>([]);
   const [valorFinal] = useState(298.87);
  const [valorAtual, setValorAtual] = useState(0);

  useEffect(() => {
    const controls = animate(0, valorFinal, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate: (latest: SetStateAction<number>) => setValorAtual(latest),
    });

    return () => controls.stop();
  }, [valorFinal]);

  useEffect(() => {
    const mockData: Transacao[] = [
      {
        id: 1,
        icon: <ArrowDown />,
        titulo: "Netflix Subscription",
        data: "Today 12:32",
        valor: "-$39.90",
      },
      {
        id: 2,
        icon: <ArrowUp />,
        titulo: "Top up",
        data: "Yesterday 02:12",
        valor: "+$120.00",
      },
      {
        id: 3,
        icon: <ArrowDown />,
        titulo: "Mercado Livre",
        data: "Dec 24 10:21",
        valor: "-$250.00",
      },
    ];
    setTimeout(() => setTransacoes(mockData), 1000);
  }, []);

  return (
    <div className="">
      {/* termino footer */}
      <div className="p-8 h-[30vh] bg-[linear-gradient(39deg,rgba(44,0,97,1)_0%,rgba(79,0,176,1)_100%)]">
        <motion.div
          className="w-full flex justify-between"
          initial={{ opacity: 0, x: 50, y: -20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{
            duration: 1.4,
            ease: "easeOut",
          }}
        >
          <div>
            <p className="font-[rubikMedium] text-white text-[24px]">Wallet</p>
            <p className="text-[#BDBDBD]">Active</p>
          </div>

          <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center">
            <UserIcon className="" color="#5d00a8" />
          </div>
        </motion.div>
        <div className="mt-10 flex-wrap items-center justify-center">
          <div className="flex justify-center items-center mt-4">
            <div className="relative">
          <p className="text-white text-lg absolute top-0 left-[-4vw]">$</p>
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-5xl text-white"
          >
            {valorAtual.toFixed(2)}
          </motion.p>
        </div>
          </div>
        </div>
      </div>
      {/* termino header */}

      {/* Começo body */}
      <div className="h-[70vh] bg-white w-screen relative">
        <div className="flex justify-center w-full h-[6.5vh]">
          <div className="w-[90vw] h-[10vh] bg-white absolute top-[-4vh] rounded-tr-2xl rounded-tl-2xl flex justify-around items-center">
            <div className="flex flex-col items-center">
              {/* top up account */}
              <div className="flex flex-col items-center">
                <Dialog>
                  {/* O ícone vai virar o botão de abrir */}
                  <DialogTrigger asChild>
                    <div className="flex flex-col items-center cursor-pointer">
                      <Topupicon />
                      <p>Top up</p>
                    </div>
                  </DialogTrigger>

                  {/* Conteúdo do modal */}
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Top Up your ballance</DialogTitle>
                      <DialogDescription>
                        Add funds to your wallet
                      </DialogDescription>
                    </DialogHeader>

                    <div className="py-4">
                      <p className="text-gray-700">soon</p>
                    </div>

                    <DialogFooter>
                      <DialogClose asChild>
                        <Button variant="destructive">Cancel</Button>
                      </DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            {/* Send money             */}
            <div className="flex flex-col items-center">
              <Sendmoneyicon />
              <p>Send</p>
            </div>
            {/* Request money */}
            <div className="flex flex-col items-center">
              <Recievemoneyicon />
              <p>Request</p>
            </div>
            {/* Withdraw */}
            <div className="flex flex-col items-center">
              <Landmark className="stroke-[#5d00a8] stroke-1 w-[30px] h-[30px]" />
              <p>Withdraw</p>
            </div>
          </div>
        </div>
        {/* 

          Latest Transactions
          
          */}
        <div className="p-4">
          <div className="flex justify-center items-center">
            <div className="w-full flex justify-between">
              <p className="text-[14px] font-bold">Latest Transactions</p>
              <p className="text-[12px] text-gray-400">View all</p>
            </div>
          </div>
          {transacoes.length > 0 ? (
            transacoes.map((t) => (
              <div
                key={t.id}
                className="flex justify-between items-center bg-gray-100 p-3 rounded-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-[#E6DDFF] p-2 rounded-sm shadow">
                    {t.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.titulo}</p>
                    <p className="text-xs text-gray-400">{t.data}</p>
                  </div>
                </div>
                <p
                  className={`text-xs tracking-wide font-bold ${
                    t.valor.startsWith("-") ? "text-red-500" : "text-[#289B4F]"
                  }`}
                >
                  {t.valor}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-400 text-sm text-center mt-2">
              Carregando transações...
            </p>
          )}
        </div>
        {/* 
            
            Promo & Discounts
            
            */}
        <div>
          <div className="w-full p-4">
            {/* Cabeçalho */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-900">
                Promo & Discount
              </h2>
              <span className="text-purple-600 text-sm cursor-pointer">
                See more
              </span>
            </div>

            {/* Card de Promo */}
            <div className="w-full h-40 rounded-3xl bg-gradient-to-r from-purple-900 to-purple-700 p-4 relative overflow-hidden">
              <h3 className="text-white text-xl font-bold mb-2">
                Special Offer
                <br />
                For Today’s Top Up
              </h3>
              <p className="text-purple-200 text-sm">
                Get discount for every top up, transfer and payment
              </p>

              {/* Elementos decorativos */}
              <div className="absolute top-0 right-0 w-8 h-8 bg-purple-500 rounded-full opacity-50"></div>
              <div className="absolute bottom-4 left-4 w-12 h-3 bg-purple-400 rounded-full opacity-50"></div>
            </div>
          </div>
        </div>

        {/* fim do body branco */}
      </div>
    </div>
  );
}
