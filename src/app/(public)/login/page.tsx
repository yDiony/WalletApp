import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#101419] px-6 py-16 text-[#e0e2eb]">
      <div className="mx-auto flex w-full max-w-md flex-col gap-6 rounded-3xl border border-white/10 bg-[#181c22] p-8 shadow-2xl">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-[#00daf3]">
            WalletApp
          </p>
          <h1 className="text-3xl font-bold">Login</h1>
          <p className="text-sm text-[#c9c4d5]">
            Esta tela foi criada para manter o build consistente e pronta para
            evoluir no deploy da Vercel.
          </p>
        </div>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-2xl border border-white/10 bg-[#101419] px-4 py-3 outline-none transition focus:border-[#cdbdff]"
          />
          <input
            type="password"
            placeholder="Senha"
            className="w-full rounded-2xl border border-white/10 bg-[#101419] px-4 py-3 outline-none transition focus:border-[#cdbdff]"
          />
          <button
            type="button"
            className="w-full rounded-2xl bg-[#cdbdff] px-4 py-3 font-semibold text-[#370096] transition hover:opacity-90"
          >
            Entrar
          </button>
        </form>

        <p className="text-sm text-[#c9c4d5]">
          Ainda não tem conta?{" "}
          <Link className="text-[#00daf3]" href="/register">
            Criar cadastro
          </Link>
        </p>
      </div>
    </main>
  );
}
