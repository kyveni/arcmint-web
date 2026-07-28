import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/50 px-4 py-8 text-sm text-zinc-400 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold text-white">ArcMint</p>
          <p className="mt-1">Robinhood Chain intelligence, simplified.</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="#" className="transition hover:text-emerald-400">Robinhood Chain</Link>
          <Link href="#" className="transition hover:text-emerald-400">Documentation</Link>
          <Link href="#" className="transition hover:text-emerald-400">X / Twitter</Link>
          <span className="max-w-xs text-zinc-500">Risk disclaimer: analysis is informational and not financial advice.</span>
        </div>
      </div>
    </footer>
  );
}
