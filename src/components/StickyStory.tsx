import { motion, useScroll, useTransform } from "framer-motion";
import React, { useMemo, useRef } from "react";

type Step = {
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  bullets?: string[];
};

export default function StickyStory(props: { baseUrl: string }) {
  const { baseUrl } = props;
  const ref = useRef<HTMLDivElement | null>(null);

  const steps: Step[] = useMemo(
    () => [
      {
        eyebrow: "All-in-one",
        title: "One dashboard for everything you track.",
        body:
          "Anime, manga, movies, TV, sports, and custom sources in one place. Add it once, then stop thinking about it.",
        image: `${baseUrl}placeholders/dashboard.svg`,
        bullets: ["Grouped by day", "Fast add flow", "Clean “new” surfacing"],
      },
      {
        eyebrow: "Import",
        title: "Bring your MAL / AniList lists over in seconds.",
        body:
          "If you already have lists, you shouldn't have to rebuild them. Import and you're instantly tracking what you already care about.",
        image: `${baseUrl}placeholders/import.svg`,
        bullets: ["Anime + manga lists", "No manual re-adding", "Pick up where you left off"],
      },
      {
        eyebrow: "Custom",
        title: "Track pages that matter to you.",
        body:
          "Blogs, price changes, restocks, release pages. If a page changing matters, you can track it.",
        image: `${baseUrl}placeholders/custom.svg`,
        bullets: ["Blog updates", "Product price drops", "Store restocks"],
      },
      {
        eyebrow: "Notifications",
        title: "You choose what counts as meaningful.",
        body:
          "Keep it quiet, or get pings for exactly what you select (like game start vs game end). No spam, no surprises.",
        image: `${baseUrl}placeholders/notify.svg`,
        bullets: ["Per-item toggles", "Start / end options", "No noisy defaults"],
      },
    ],
    [baseUrl]
  );

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // background glow subtly shifts as you scroll
  const glowX = useTransform(scrollYProgress, [0, 1], ["15%", "80%"]);
  const glowY = useTransform(scrollYProgress, [0, 1], ["20%", "35%"]);

  return (
    <section className="relative mx-auto max-w-6xl px-5 py-20">
      <div className="mb-10">
        <div className="text-xs font-semibold tracking-widest text-white/50 uppercase">
          The story
        </div>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          Not static. Not noisy. Just useful.
        </h2>
        <p className="mt-4 max-w-2xl text-white/65 leading-relaxed">
          Scroll through how ReleaseRadar feels in real use. (Screenshots are placeholders for now -
          we'll swap in real UI grabs.)
        </p>
      </div>

      <div ref={ref} className="relative grid gap-10 md:grid-cols-2">
        {/* Left: steps */}
        <div className="space-y-6 md:space-y-10">
          {steps.map((s, idx) => (
            <StepCard key={idx} step={s} index={idx} progress={scrollYProgress} total={steps.length} />
          ))}
        </div>

        {/* Right: sticky frame */}
        <div className="md:sticky md:top-24 md:h-[calc(100vh-10rem)]">
          <motion.div
            className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5"
          >
            <motion.div
              className="absolute inset-0 opacity-60"
              style={{
                background:
                  "radial-gradient(circle at var(--x) var(--y), rgba(120,119,198,0.35), transparent 55%)",
                ["--x" as any]: glowX,
                ["--y" as any]: glowY,
              }}
            />
            <div className="relative flex h-full items-center justify-center p-6">
              <ImageStack steps={steps} progress={scrollYProgress} />
            </div>

            <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-black/35 p-4 ring-1 ring-white/10 backdrop-blur">
              <div className="text-[11px] text-white/55">Screenshot plan</div>
              <div className="mt-1 text-sm text-white/85">
                Replace these placeholders with 4 consistent UI screenshots (same window size).
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StepCard(props: { step: Step; index: number; progress: any; total: number }) {
  const { step, index, progress, total } = props;
  const start = index / total;
  const end = (index + 1) / total;

  const opacity = useTransform(progress, [start, (start + end) / 2, end], [0.55, 1, 0.55]);
  const y = useTransform(progress, [start, (start + end) / 2, end], [16, 0, -16]);

  return (
    <motion.div style={{ opacity, y }} className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="text-[11px] font-semibold tracking-widest text-white/50 uppercase">
        {step.eyebrow}
      </div>
      <div className="mt-2 text-xl font-semibold">{step.title}</div>
      <p className="mt-3 text-sm text-white/65 leading-relaxed">{step.body}</p>
      {step.bullets?.length ? (
        <ul className="mt-4 space-y-1 text-sm text-white/65">
          {step.bullets.map((b) => (
            <li key={b}>• {b}</li>
          ))}
        </ul>
      ) : null}
    </motion.div>
  );
}

function ImageStack(props: { steps: Step[]; progress: any }) {
  const { steps, progress } = props;

  return (
    <div className="relative w-full max-w-[520px]">
      {steps.map((s, idx) => (
        <ImageLayer key={s.image} step={s} index={idx} progress={progress} total={steps.length} />
      ))}
      <div className="mt-4 text-center text-xs text-white/45">
        Placeholder artwork • swap with real screenshots later
      </div>
    </div>
  );
}

function ImageLayer(props: { step: Step; index: number; progress: any; total: number }) {
  const { step, index, progress, total } = props;
  const start = index / total;
  const end = (index + 1) / total;

  const opacity = useTransform(progress, [start, (start + end) / 2, end], [0, 1, 0]);
  const scale = useTransform(progress, [start, (start + end) / 2, end], [0.98, 1, 1.02]);

  return (
    <motion.div style={{ opacity, scale }} className="absolute inset-0">
      <div className="rounded-2xl ring-1 ring-white/10 overflow-hidden bg-black/30">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={step.image}
          alt=""
          className="block w-full h-auto select-none"
          draggable={false}
        />
      </div>
    </motion.div>
  );
}
