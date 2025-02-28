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
    <>
      <div className="p-8">
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
            <p className="font-[rubikMedium] text-[24px]">Wallet</p>
            <p className="text-[#BDBDBD]">Active</p>
          </div>

          <div>
            <p>usericon</p>
          </div>
        </motion.div>

        <div className="mt-10 rounded-[50px] bg-[#5B259F] w-full h-[140px] overflow-hidden relative">
          <motion.svg
            width="54"
            height="54"
            viewBox="0 0 54 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            animate={{
              x: `calc(${randomPosition.x}% - 27px)`, 
              y: `calc(${randomPosition.y}% - 27px)`, 
            }}
            transition={{
              type: "spring",
              stiffness: 50, 
              damping: 25,
            }}
          >
            <circle cx="27" cy="27" r="27" fill="#6E34B8" />
          </motion.svg>
        </div>
      </div>
    </>
  );
}
