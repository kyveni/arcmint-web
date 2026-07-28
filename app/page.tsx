import { ArrowRight, BrainCircuit, CandlestickChart, ShieldCheck, Sparkles, TrendingUp, Waves } from "lucide-react";
import { Navbar } from "./components/navbar";
import { TokenAnalyzer } from "./components/token-analyzer";
import { FeatureCard } from "./components/feature-card";
import { LaunchpadPreview } from "./components/launchpad-preview";
import Footer from "./components/footer";

const features = [
  {
    icon: BrainCircuit,
    title: "AI Token Analysis",
    description: "Understand contract structure, token behavior, and launch readiness in a single view.",
  },
  {
    icon: ShieldCheck,
    title: "Smart Contract Insights",
    description: "Inspect key contract characteristics and highlight meaningful operational signals.",
  },
  {
    icon: TrendingUp,
    title: "Risk Scoring",
    description: "Surface risk indicators with a clear, human-readable assessment.",
  },
  {
    icon: Waves,
    title: "Robinhood Chain Native",
    description: "Built for the Robinhood Chain ecosystem with a launch-first story.",
  },
  {
    icon: CandlestickChart,
    title: "Liquidity Intelligence",
    description: "Monitor readiness signals and anticipate liquidity-related launch questions.",
  },
  {
    icon: Sparkles,
    title: "Launch Assistance",
    description: "Prepare your launch plan with guided insight and clear next steps.",
  },
];

const steps = [
  {
    title: "Paste Contract",
    description: "Drop in a contract address and let ArcMint start the analysis path.",
  },
  {
    title: "Run Analysis",
    description: "Our AI workflow reviews token metrics, contract data, and risk signals.",
  },
  {
    title: "Review Intelligence",
    description: "See a professional report with launch guidance and confidence signals.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.16),_transparent_30%)] text-zinc-100">
      <Navbar />
      <main>
        <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-300">
              <Sparkles className="h-4 w-4" />
              Robinhood Chain Mainnet
            </div>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Launch Smarter. Analyze Faster.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-zinc-400">
              ArcMint analyzes token contracts, surfaces meaningful insights, and helps users evaluate launch readiness on Robinhood Chain with AI-powered intelligence.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#analyzer" className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-emerald-400">
                Analyze Token
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#launchpad" className="inline-flex items-center justify-center rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-zinc-200 transition hover:border-emerald-400/40 hover:text-emerald-300">
                Explore Launches
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-black/50 p-6 shadow-[0_0_40px_rgba(0,0,0,0.3)]">
            <div className="rounded-[1.5rem] border border-emerald-500/20 bg-zinc-900/80 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-400">ArcMint Brain</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">AI-powered token intelligence for every launch decision.</h2>
              <div className="mt-6 space-y-3 text-sm text-zinc-400">
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 px-4 py-3">
                  <span>Contract review</span>
                  <span className="font-medium text-emerald-300">Live</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 px-4 py-3">
                  <span>Risk guidance</span>
                  <span className="font-medium text-emerald-300">Live</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 px-4 py-3">
                  <span>Launch prep</span>
                  <span className="font-medium text-emerald-300">Coming Soon</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="analyzer" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <TokenAnalyzer />
        </section>

        <section id="features" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-400">Core Features</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">A clean operating system for token intelligence.</h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard key={feature.title} icon={feature.icon} title={feature.title} description={feature.description} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-400">How It Works</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Three steps to review launch intelligence.</h2>
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.title} className="rounded-[1.5rem] border border-white/10 bg-zinc-900/70 p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/15 text-sm font-semibold text-emerald-300">
                  0{index + 1}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="launchpad" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <LaunchpadPreview />
        </section>
      </main>
      <Footer />
    </div>
  );
}
