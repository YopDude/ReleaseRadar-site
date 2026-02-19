import { motion } from "framer-motion";

function baseUrl(path: string) {
  // Works on GitHub Pages project sites because Astro/Vite sets BASE_URL.
  const base = import.meta.env.BASE_URL || "/";
  return `${base}${path.replace(/^\//, "")}`;
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute top-24 left-1/4 h-[380px] w-[380px] rounded-full bg-indigo-500/15 blur-3xl" />
        <div className="absolute top-40 right-1/4 h-[380px] w-[380px] rounded-full bg-emerald-400/10 blur-3xl" />
      </div>

      <div className="mx-auto grid min-h-[92vh] max-w-6xl grid-cols-1 items-center gap-10 px-5 pt-16 pb-16 md:grid-cols-2 md:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-white/70 ring-1 ring-white/10">
            <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
            Desktop app — free
          </div>

          <h1 className="mt-6 text-5xl font-semibold tracking-tight md:text-6xl">
            Track what actually matters.
            <span className="block text-white/70">Across everything.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/65 md:text-lg">
            ReleaseRadar monitors updates across anime, manga, movies, TV, sports,
            and custom sources — without noise.
            <br />
            If something changes, you’ll know. If it doesn’t, you won’t be bothered.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={baseUrl("/downloads")}
              className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              Download for PC
            </a>
            <a
              href="#how"
              className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/0 px-5 py-3 text-sm font-semibold text-white/80 transition hover:border-white/25 hover:text-white"
            >
              See how it works
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-2 text-xs text-white/55">
            {[
              "Anime + Manga imports (MAL / AniList)",
              "Sports start/end alerts",
              "Custom web tracking",
            ].map((t) => (
              <span
                key={t}
                className="rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right column: animated preview area (placeholder visuals) */}
        <div className="relative z-10">
          <div className="relative mx-auto aspect-[4/3] w-full max-w-[560px] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 shadow-2xl">
            <div className="absolute inset-0 opacity-70" />
            <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.18),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(120,119,198,0.25),transparent_55%),radial-gradient(circle_at_35%_85%,rgba(16,185,129,0.14),transparent_55%)]" />
            <div className="absolute inset-0 p-5">
              <div className="flex items-center justify-between">
                <div className="text-xs font-semibold text-white/70">ReleaseRadar</div>
                <div className="text-xs text-white/50">Preview</div>
              </div>
              <div className="mt-4 grid gap-3">
                {[
                  { k: "Anime", v: "New episode" },
                  { k: "Manga", v: "New chapter" },
                  { k: "NBA", v: "Game starts" },
                  { k: "Movie", v: "Release window" },
                ].map((row) => (
                  <div
                    key={row.k}
                    className="flex items-center justify-between rounded-2xl bg-black/25 px-4 py-3 ring-1 ring-white/10"
                  >
                    <div className="text-sm font-semibold text-white/85">{row.k}</div>
                    <div className="text-xs text-white/60">{row.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 text-center text-xs text-white/45">
            Placeholder visuals — swap with real screenshots later.
          </div>
        </div>
      </div>
    </section>
  );
}
