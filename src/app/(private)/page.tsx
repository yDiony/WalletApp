"use client";
import * as motion from "motion/react-client";
import { useEffect, useState } from "react";

export default function home() {
  const [randomPosition, setRandomPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomPosition({
        x: Math.random() * 100,
        y: Math.random() * 100,
      });
    }, 1000); // Atualiza a posição a cada 2 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="">
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

          <div>
            <p>usericon</p>
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
      <div className="h-[70vh] bg-white w-screen relative flex justify-center">
          <div className="w-[90vw] h-[10vh] bg-white absolute top-[-4vh] rounded-tr-2xl rounded-tl-2xl">

          </div>
      </div>
    </div>
  );
}
