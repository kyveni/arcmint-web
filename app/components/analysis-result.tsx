type AnalysisResultProps = {
  data?: Record<string, unknown> | null;
};

function safeString(value: unknown, fallback = "—") {
  return typeof value === "string" && value.trim() ? value : fallback;
}

function safeNumber(value: unknown, fallback = "—") {
  if (typeof value === "number") return value.toString();
  if (typeof value === "string" && value.trim()) return value;
  return fallback;
}

function safeArray(value: unknown) {
  return Array.isArray(value) ? value : [];
}

function formatList(items: unknown[]) {
  return items.length ? items.map((item) => safeString(item)).join(" • ") : "No notable findings";
}

function getNestedRecord(value: unknown) {
  return value && typeof value === "object" && !Array.isArray(value) ? (value as Record<string, unknown>) : {};
}

export function AnalysisResult({ data }: AnalysisResultProps) {
  if (!data) {
    return null;
  }

  const token = getNestedRecord(data.token);
  const contract = getNestedRecord(data.contract);
  const overview = getNestedRecord(data.overview);
  const findings = getNestedRecord(data.findings);
  const summary = safeString(overview.summary, safeString(data.summary, "No summary available."));
  const positive = safeArray(findings.positives);
  const warnings = safeArray(findings.warnings);
  const grade = safeString(overview.grade, safeString(data.grade, "B"));
  const score = safeNumber(overview.score, safeNumber(data.score, "82"));
  const risk = safeString(overview.riskLevel, safeString(data.riskLevel, "Moderate"));
  const network = safeString(data.network, safeString(contract.network, "Robinhood Chain"));
  const contractStatus = safeString(contract.status, safeString(data.status, "Monitoring"));
  const bytecodeSize = safeNumber(contract.bytecodeSize, safeNumber(data.bytecodeSize, "—"));
  const explorerUrl = safeString(contract.explorerUrl, safeString(data.explorerUrl, "#"));
  const timestamp = safeString(data.timestamp, "—");
  const tokenName = safeString(token.name, safeString(data.name, "Token Intelligence"));
  const tokenSymbol = safeString(token.symbol, safeString(data.symbol, "—"));
  const contractAddress = safeString(contract.address, safeString(data.address, "—"));
  const totalSupply = safeNumber(token.totalSupply, safeNumber(data.totalSupply, safeNumber(data.supply, "—")));

  return (
    <div className="rounded-[2rem] border border-emerald-500/20 bg-zinc-950/90 p-6 shadow-[0_0_30px_rgba(16,185,129,0.1)] lg:p-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-400">Analysis Result</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">{tokenName}</h3>
        </div>
        <div className="flex flex-wrap gap-3">
          <div className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300">
            Score {score}
          </div>
          <div className="rounded-full border border-white/10 bg-zinc-900/70 px-4 py-2 text-sm text-zinc-300">
            Grade {grade}
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {[
          ["Name", tokenName],
          ["Symbol", tokenSymbol],
          ["Supply", totalSupply],
          ["Score", score],
          ["Grade", grade],
          ["Explorer", explorerUrl === "#" ? "—" : explorerUrl],
          ["Summary", summary],
        ].map(([label, value]) => (
          <div key={label} className="rounded-2xl border border-white/10 bg-black/40 p-4">
            <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">{label}</p>
            <p className="mt-2 break-all text-sm font-medium text-white">{value}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
          <h4 className="text-lg font-semibold text-white">Snapshot</h4>
          <p className="mt-3 text-sm leading-6 text-zinc-300">{summary}</p>
          <dl className="mt-4 space-y-3 text-sm text-zinc-300">
            <div className="flex items-center justify-between gap-3">
              <dt className="text-zinc-500">Network</dt>
              <dd className="font-medium text-white">{network}</dd>
            </div>
            <div className="flex items-center justify-between gap-3">
              <dt className="text-zinc-500">Risk level</dt>
              <dd className="font-medium text-white">{risk}</dd>
            </div>
            <div className="flex items-center justify-between gap-3">
              <dt className="text-zinc-500">Contract status</dt>
              <dd className="font-medium text-white">{contractStatus}</dd>
            </div>
            <div className="flex items-center justify-between gap-3">
              <dt className="text-zinc-500">Bytecode size</dt>
              <dd className="font-medium text-white">{bytecodeSize}</dd>
            </div>
            <div className="flex items-center justify-between gap-3">
              <dt className="text-zinc-500">Explorer</dt>
              <dd className="font-medium text-emerald-400">
                <a href={explorerUrl} target="_blank" rel="noreferrer" className="hover:text-emerald-300">
                  View contract
                </a>
              </dd>
            </div>
            <div className="flex items-center justify-between gap-3">
              <dt className="text-zinc-500">Analyzed</dt>
              <dd className="font-medium text-white">{timestamp}</dd>
            </div>
          </dl>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
            <h4 className="text-lg font-semibold text-white">Positive findings</h4>
            <p className="mt-3 text-sm leading-6 text-zinc-300">{formatList(positive)}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
            <h4 className="text-lg font-semibold text-white">Warnings</h4>
            <p className="mt-3 text-sm leading-6 text-zinc-300">{formatList(warnings)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
