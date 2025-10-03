"use client";
import * as motion from "motion/react-client";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import { Topupicon } from "@/components/ui/svgs/topup";
import { History } from "@/components/ui/svgs/history";
import { Sendmoneyicon } from "@/components/ui/svgs/sendmoney";
import { Recievemoneyicon } from "@/components/ui/svgs/recievemoney";
import { Moreicon } from "@/components/ui/svgs/more";
import { Home } from "@/components/ui/svgs/navigationbar/home";
import { UserIcon } from "lucide-react";
import { Graphicstab } from "@/components/ui/svgs/navigationbar/graphicstab";
import { Button } from "@/components/ui/button";
export default function home() {
  const [randomPosition, setRandomPosition] = useState({ x: 0, y: 0 });

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setRandomPosition({
  //       x: Math.random() * 100,
  //       y: Math.random() * 100,
  //     });
  //   }, 1000); // Atualiza a posição a cada 2 segundos

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="">
      <div className="fixed max-w-screen h-[10vh] bottom-0 z-10 flex justify-between ">
        <div className="bg-white h-full w-screen flex justify-between place-items-center p-4">
          <div>
            <Home />
          </div>
          <div className="">
            <Graphicstab />
          </div>
          <div>
            <Topupicon />
          </div>
          <div>
            <Topupicon />
          </div>
        </div>
      </div>
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
              <p className="text-5xl text-white">298,87</p>
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
                        Aqui você pode adicionar saldo na sua carteira.
                      </DialogDescription>
                    </DialogHeader>

                    <div className="py-4">
                      <p className="text-gray-700">
                        Coloque aqui inputs, botões ou o que quiser.
                      </p>
                    </div>

                    <DialogFooter>
                      <DialogClose asChild>
                        <Button variant="outline">Cancelar</Button>
                      </DialogClose>
                      <Button>Confirmar</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <Sendmoneyicon />
              <p>Send</p>
            </div>
            <div className="flex flex-col items-center">
              <Recievemoneyicon />
              <p>Request</p>
            </div>
            <div className="flex flex-col items-center">
              <History />
              <p>History</p>
            </div>
          </div>
        </div>

        <div className="">
          <p className="p-4 text-2xl text-">Pagamentos</p>
          <div className="grid grid-cols-4 gap-6 px-6">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-red-100 flex items-center justify-center rounded-xl">
                <span className="text-red-500 text-xl">🌐</span>
              </div>
              <p className="mt-2 text-sm">Internet</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-yellow-100 flex items-center justify-center rounded-xl">
                <span className="text-yellow-500 text-xl">⚡</span>
              </div>
              <p className="mt-2 text-sm">Electricity</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-green-100 flex items-center justify-center rounded-xl">
                <span className="text-green-500 text-xl">🎟️</span>
              </div>
              <p className="mt-2 text-sm">Voucher</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-sky-100 flex items-center justify-center rounded-xl">
                <span className="text-sky-500 text-xl">🛡️</span>
              </div>
              <p className="mt-2 text-sm">Assurance</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-purple-100 flex items-center justify-center rounded-xl">
                <span className="text-purple-500 text-xl">💳</span>
              </div>
              <p className="mt-2 text-sm">M Card</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-pink-100 flex items-center justify-center rounded-xl">
                <span className="text-pink-500 text-xl">📑</span>
              </div>
              <p className="mt-2 text-sm">Bill</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-indigo-100 flex items-center justify-center rounded-xl">
                <span className="text-indigo-500 text-xl">🛒</span>
              </div>
              <p className="mt-2 text-sm">Merchant</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gray-100 flex items-center justify-center rounded-xl">
                <Moreicon />
              </div>
              <p className="mt-2 text-sm">More</p>
            </div>
          </div>
        </div>

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
