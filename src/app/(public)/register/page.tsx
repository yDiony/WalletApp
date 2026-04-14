import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-[#101419] px-6 py-16 text-[#e0e2eb]">
      <div className="mx-auto flex w-full max-w-md flex-col gap-6 rounded-3xl border border-white/10 bg-[#181c22] p-8 shadow-2xl">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-[#00daf3]">
            WalletApp
          </p>
          <h1 className="text-3xl font-bold">Criar conta</h1>
          <p className="text-sm text-[#c9c4d5]">
            Cadastro inicial preparado para o projeto publicar sem falhas de
            rota no build.
          </p>
        </div>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Nome completo"
            className="w-full rounded-2xl border border-white/10 bg-[#101419] px-4 py-3 outline-none transition focus:border-[#cdbdff]"
          />
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
            className="w-full rounded-2xl bg-[#00daf3] px-4 py-3 font-semibold text-[#00363d] transition hover:opacity-90"
          >
            Continuar
          </button>
        </form>

        <p className="text-sm text-[#c9c4d5]">
          Já tem conta?{" "}
          <Link className="text-[#cdbdff]" href="/login">
            Fazer login
          </Link>
        </p>
      </div>
    </main>
  );
}
