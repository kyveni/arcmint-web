"use client";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black px-6 text-center text-zinc-100">
      <h2 className="text-2xl font-semibold">Something went wrong.</h2>
      <p className="mt-3 max-w-md text-sm text-zinc-400">
        ArcMint hit an unexpected issue while preparing your analysis experience.
      </p>
      <button
        type="button"
        onClick={() => reset()}
        className="mt-6 rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-black"
      >
        Try again
      </button>
    </div>
  );
}
