import { useEffect, useState } from "react";
import banner from "../assets/banner.png";

const tournament = {
  formUrl: "#",
};

export default function Home() {
  const targetDate = new Date("2026-09-01T18:00:00");
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;

      setTimeLeft({
        days: Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24))),
        hours: Math.max(0, Math.floor((diff / (1000 * 60 * 60)) % 24)),
        minutes: Math.max(0, Math.floor((diff / (1000 * 60)) % 60)),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative flex min-h-[calc(100vh-140px)] flex-col justify-center overflow-hidden border-b border-yellow-400/20 px-6 pb-10 pt-6 text-center">
        <div className="absolute inset-0 -z-10 bg-[#020712]" />

        <div className="absolute inset-0 -z-10 opacity-80">
          <div className="absolute left-[-10%] top-[10%] h-[500px] w-[500px] rounded-full bg-yellow-500/10 blur-3xl" />
          <div className="absolute right-[-10%] top-[15%] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-yellow-400/10 blur-3xl" />
        </div>

        <div className="absolute inset-0 -z-10 opacity-20 bg-[linear-gradient(120deg,transparent_0%,rgba(250,204,21,.18)_20%,transparent_35%,transparent_65%,rgba(250,204,21,.14)_80%,transparent_100%)]" />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center">
          <div className="mx-auto -mt-6 max-h-[420px] w-full max-w-5xl overflow-hidden">
            <img
              src={banner}
              alt="JETACUP"
              className="mx-auto w-full -translate-y-20 scale-125"
            />
          </div>

          <p className="mx-auto mt-1 max-w-4xl text-lg font-black uppercase tracking-[0.22em] text-slate-200 md:text-2xl">
            El circuito amateur de{" "}
            <span className="text-yellow-300">
              League of Legends
            </span>
          </p>

          <div className="mx-auto mt-8 grid max-w-5xl gap-5 md:grid-cols-4">
            {[
              ["🏆", "Torneo amateur", "Para comunidades y equipos"],
              ["📅", "Fase de grupos", "+ Playoffs"],
              ["⚔️", "BO3 Fearless", "Formato competitivo"],
              ["👑", "Premios", "Y reconocimiento"],
            ].map(([icon, title, text]) => (
              <div
                key={title}
                className="rounded-3xl border border-yellow-400/25 bg-black/50 p-5 shadow-xl shadow-black/40 backdrop-blur"
              >
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl border border-yellow-400/40 text-3xl shadow-lg shadow-yellow-500/10">
                  {icon}
                </div>

                <p className="text-base font-black uppercase text-white">
                  {title}
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {text}
                </p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-yellow-400/25 bg-black/50 p-6 shadow-2xl shadow-yellow-500/10 backdrop-blur">
            <p className="text-xs font-black uppercase tracking-[0.35em] text-yellow-300">
              Comienza en
            </p>

            <div className="mt-5 grid grid-cols-3 divide-x divide-white/10">
              <div>
                <p className="text-4xl font-black text-white md:text-5xl">
                  {timeLeft.days}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-500">
                  Días
                </p>
              </div>

              <div>
                <p className="text-4xl font-black text-white md:text-5xl">
                  {timeLeft.hours}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-500">
                  Horas
                </p>
              </div>

              <div>
                <p className="text-4xl font-black text-white md:text-5xl">
                  {timeLeft.minutes}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-500">
                  Min
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <a
              href={tournament.formUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-yellow-300 to-amber-500 px-12 py-5 text-xl font-black uppercase text-black shadow-2xl shadow-yellow-500/30 transition hover:-translate-y-1 hover:scale-105"
            >
              Inscribir equipo
            </a>
          </div>
        </div>
      </section>
    </>
  );
}