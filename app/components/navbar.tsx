"use client";

import Link from "next/link";
import { Menu, Sparkles } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "Analyze", href: "#analyzer" },
  { label: "Launchpad", href: "#launchpad" },
  { label: "Explore", href: "#features" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="#" className="flex items-center gap-2 text-lg font-semibold text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
            <Sparkles className="h-4 w-4" />
          </span>
          ArcMint
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
          {links.map((link) => (
            <Link key={link.label} href={link.href} className="transition hover:text-emerald-400">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => window.alert("Coming Soon")}
            className="hidden rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300 transition hover:bg-emerald-500/20 md:inline-flex"
          >
            Connect Wallet
          </button>
          <button
            type="button"
            className="rounded-full border border-white/10 p-2 text-zinc-200 md:hidden"
            onClick={() => setMobileOpen((value) => !value)}
            aria-label="Toggle navigation"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="border-t border-white/10 bg-black/90 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3 text-sm text-zinc-300">
            {links.map((link) => (
              <Link key={link.label} href={link.href} className="transition hover:text-emerald-400" onClick={() => setMobileOpen(false)}>
                {link.label}
              </Link>
            ))}
            <button type="button" onClick={() => window.alert("Coming Soon")} className="w-fit rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-emerald-300">
              Connect Wallet
            </button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
