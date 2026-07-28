const steps = [
  { title: "Create Token", description: "Define your concept, supply, and launch narrative." },
  { title: "Configure Supply", description: "Set tokenomics with transparent cap and vesting controls." },
  { title: "Add Liquidity", description: "Seed launch liquidity and prepare your public debut." },
  { title: "Launch on Robinhood Chain", description: "Go live with launchpad tooling built for streamlined deployment." },
];

export function LaunchpadPreview() {
  return (
    <section className="rounded-[2rem] border border-emerald-500/20 bg-gradient-to-br from-zinc-950 via-zinc-900 to-emerald-950/40 p-8 shadow-[0_0_30px_rgba(16,185,129,0.12)]">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-400">Launchpad Preview</p>
          <h2 className="mt-2 text-3xl font-semibold text-white">A guided path from ideation to launch.</h2>
        </div>
        <div className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300">
          Coming Soon
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {steps.map((step, index) => (
          <div key={step.title} className="rounded-2xl border border-white/10 bg-black/30 p-5">
            <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/15 text-sm font-semibold text-emerald-300">
              0{index + 1}
            </div>
            <h3 className="text-lg font-semibold text-white">{step.title}</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-400">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
