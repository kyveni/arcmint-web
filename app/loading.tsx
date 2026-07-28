export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-6 text-zinc-100">
      <div className="flex items-center gap-3 rounded-2xl border border-emerald-500/20 bg-zinc-900/70 px-5 py-4 text-sm text-zinc-300">
        <div className="h-5 w-5 animate-spin rounded-full border-2 border-emerald-400 border-t-transparent" />
        <span>Preparing ArcMint…</span>
      </div>
    </div>
  );
}
