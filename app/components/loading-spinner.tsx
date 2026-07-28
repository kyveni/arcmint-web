export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center gap-3 rounded-2xl border border-emerald-500/20 bg-zinc-900/70 p-4 text-sm text-zinc-300">
      <div className="h-5 w-5 animate-spin rounded-full border-2 border-emerald-400 border-t-transparent" />
      <span>Analyzing token intelligence…</span>
    </div>
  );
}
