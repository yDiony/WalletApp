"use client";

import Image from "next/image";

const Icon = ({ name, className = "" }: { name: string; className?: string }) => (
  <span className={`material-symbols-outlined ${className}`}>{name}</span>
);

export default function CardsPage() {
  return (
    <div className="min-h-screen bg-[#101419] text-[#e0e2eb] px-6 pt-24 pb-32 max-w-7xl mx-auto">

      {/* HEADER */}
      <section className="mb-12">
        <span className="text-xs uppercase tracking-[0.3em] text-[#00daf3] mb-2 block">
          Management
        </span>

        <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
          My Cards
        </h2>

        <p className="text-[#c9c4d5] max-w-md">
          Control your physical and virtual assets with precision.
        </p>
      </section>

      {/* GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

        {/* LEFT */}
        <div className="lg:col-span-7 space-y-8">

          {/* CARD FÍSICO */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#cdbdff]/20 to-[#00daf3]/20 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000" />

            <div className="relative aspect-[1.586/1] w-full rounded-xl bg-gradient-to-br from-[#1c2026] via-[#0b0e14] to-[#3b00a1]/20 p-8 flex flex-col justify-between border border-[#474553]/10 shadow-2xl">

              <div className="flex justify-between">
                <span className="text-2xl font-black italic tracking-tighter">
                  SOVEREIGN
                </span>
                <Icon name="contactless" className="text-4xl text-white/20" />
              </div>

              <div className="space-y-6">
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-9 bg-[#cdbdff]/30 rounded-md" />
                  <div className="text-xl tracking-[0.2em] text-white/80">
                    •••• •••• •••• 8842
                  </div>
                </div>

                <div className="flex justify-between text-sm">
                  <div>
                    <p className="text-xs text-[#c9c4d5]">Card Holder</p>
                    <p>ALEXANDER VANCE</p>
                  </div>

                  <div>
                    <p className="text-xs text-[#c9c4d5]">Expires</p>
                    <p>12/28</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CARD VIRTUAL */}
          <div className="relative rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 flex flex-col justify-between">

            <div className="flex justify-between">
              <span className="text-2xl font-black italic text-[#00daf3]">
                VIRTUAL
              </span>
              <Icon name="bolt" className="text-3xl text-[#00daf3]" />
            </div>

            <div>
              <p className="text-2xl tracking-[0.25em] mb-6">
                •••• •••• •••• 1092
              </p>

              <div className="flex gap-12 text-sm">
                <div>
                  <p className="text-xs text-[#c9c4d5]">CVV</p>
                  <p>***</p>
                </div>

                <div>
                  <p className="text-xs text-[#c9c4d5]">Exp</p>
                  <p>09/26</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT */}
        <div className="lg:col-span-5 space-y-6">

          {/* CONTROLES */}
          <div className="bg-[#181c22] rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-bold">Quick Controls</h3>

            {[
              { title: "Freeze Card", icon: "ac_unit", color: "text-red-400" },
              { title: "Change PIN", icon: "password", color: "text-[#cdbdff]" },
              { title: "Contactless", icon: "contactless", color: "text-[#00daf3]" },
            ].map((item) => (
              <div
                key={item.title}
                className="flex justify-between items-center p-4 bg-[#1c2026] rounded-xl hover:bg-[#262a31] transition"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#262a31]">
                    <Icon name={item.icon} className={`${item.color} text-[22px]`} />
                  </div>

                  <span>{item.title}</span>
                </div>

                <Icon name="chevron_right" className="text-[#c9c4d5]" />
              </div>
            ))}
          </div>

          {/* LIMITES */}
          <div className="bg-[#181c22] rounded-lg p-6 space-y-6">
            <h3 className="text-lg font-bold">Spending Limits</h3>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-[#c9c4d5]">Daily Limit</span>
                <span>$2,450 / $5,000</span>
              </div>

              <div className="h-2 bg-[#31353c] rounded-full">
                <div className="h-full w-1/2 bg-[#cdbdff] rounded-full" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-[#c9c4d5]">Monthly Limit</span>
                <span>$800 / $2,500</span>
              </div>

              <div className="h-2 bg-[#31353c] rounded-full">
                <div className="h-full w-1/3 bg-[#00daf3] rounded-full" />
              </div>
            </div>
          </div>

          {/* BANNER */}
          <div className="bg-[#3b00a1] rounded-xl p-6 relative overflow-hidden">
            <h4 className="text-xl font-bold text-[#cdbdff] mb-2">
              Priority Concierge
            </h4>

            <p className="text-sm text-[#c9c4d5]">
              Unlock global airport lounge access.
            </p>

            <Icon
              name="diamond"
              className="absolute bottom-4 right-4 text-[#cdbdff]/20 text-5xl"
            />
          </div>

        </div>
      </div>
    </div>
  );
}