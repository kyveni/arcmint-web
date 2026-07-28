"use client";

import { useMemo, useState } from "react";
import { AlertTriangle, ArrowRight, Search } from "lucide-react";
import { LoadingSpinner } from "./loading-spinner";
import { AnalysisResult } from "./analysis-result";

const isValidEvmAddress = (value: string) => /^0x[a-fA-F0-9]{40}$/.test(value);

export function TokenAnalyzer() {
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Record<string, unknown> | null>(null);

  const canSubmit = useMemo(() => address.trim().length > 0, [address]);

  async function readBody(response: Response) {
    const text = await response.text();

    if (!text) {
      return { raw: "", parsed: null };
    }

    try {
      return { raw: text, parsed: JSON.parse(text) as unknown };
    } catch {
      return { raw: text, parsed: text };
    }
  }

  async function handleAnalyze() {
    const sanitized = address.trim();
    if (!isValidEvmAddress(sanitized)) {
      setError("Enter a valid EVM address beginning with 0x and containing 40 hexadecimal characters.");
      setResult(null);
      return;
    }

    setError("");
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch(`/api/analyze/${encodeURIComponent(sanitized)}`);
      const { raw, parsed } = await readBody(response);

      if (!response.ok) {
        const backendError = typeof parsed === "object" && parsed !== null && "error" in parsed && typeof (parsed as Record<string, unknown>).error === "string"
          ? (parsed as Record<string, unknown>).error
          : typeof parsed === "string" && parsed.trim()
            ? parsed
            : raw || "The ArcMint Brain API could not analyze this contract right now.";
        throw new Error(typeof backendError === "string" ? backendError : "The ArcMint Brain API could not analyze this contract right now.");
      }

      if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
        console.debug("[analyze] raw response", raw);
        console.debug("[analyze] parsed object", parsed);
        setResult(parsed as Record<string, unknown>);
      } else {
        throw new Error(raw || "The ArcMint Brain API returned an unexpected response.");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Analysis failed unexpectedly.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="analyzer" className="rounded-[2rem] border border-white/10 bg-zinc-950/60 p-6 shadow-[0_0_40px_rgba(0,0,0,0.3)] lg:p-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-400">Token Analyzer</p>
          <h2 className="mt-2 text-3xl font-semibold text-white">Analyze token contracts with AI clarity.</h2>
        </div>
        <div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300">
          Robinhood Chain ready
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[1.5rem] border border-white/10 bg-black/40 p-4 sm:p-6">
          <label htmlFor="contract-address" className="text-sm font-medium text-zinc-300">
            Contract address
          </label>
          <div className="mt-3 flex flex-col gap-3 sm:flex-row">
            <div className="flex flex-1 items-center gap-3 rounded-2xl border border-white/10 bg-zinc-900/70 px-4 py-3">
              <Search className="h-4 w-4 text-emerald-400" />
              <input
                id="contract-address"
                value={address}
                onChange={(event) => setAddress(event.target.value)}
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-zinc-500"
                placeholder="0x..."
                spellCheck={false}
              />
            </div>
            <button
              type="button"
              onClick={handleAnalyze}
              disabled={!canSubmit || loading}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-4 py-3 text-sm font-semibold text-black transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Analyzing" : "Analyze Token"}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <p className="mt-3 text-sm text-zinc-400">Paste a valid EVM contract address to receive AI-generated analysis and launch guidance.</p>

          {error ? (
            <div className="mt-4 flex items-start gap-3 rounded-2xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-300">
              <AlertTriangle className="mt-0.5 h-4 w-4" />
              <span>{error}</span>
            </div>
          ) : null}

          {loading ? <div className="mt-6"><LoadingSpinner /></div> : null}
        </div>

        <div className="rounded-[1.5rem] border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-zinc-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-400">Built for</p>
          <h3 className="mt-2 text-xl font-semibold text-white">Launch-ready intelligence</h3>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-zinc-300">
            <li>• Contract insight summaries</li>
            <li>• Risk and quality scoring</li>
            <li>• Launchpad preparation checks</li>
            <li>• Mobile-first analysis workflow</li>
          </ul>
        </div>
      </div>

      {result ? <div className="mt-8"><AnalysisResult data={result} /></div> : null}
    </section>
  );
}
