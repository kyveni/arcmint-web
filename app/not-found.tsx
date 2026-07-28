import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black px-6 text-center text-zinc-100">
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-400">404</p>
      <h1 className="mt-3 text-3xl font-semibold">This route does not exist.</h1>
      <p className="mt-3 max-w-md text-sm text-zinc-400">
        The page you are looking for is not available in ArcMint yet.
      </p>
      <Link href="/" className="mt-6 rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-black">
        Return home
      </Link>
    </div>
  );
}
