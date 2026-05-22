import { ShieldCheck } from "lucide-react";

export default function Reglas() {
  const rules = [
    ["Puntualidad", "Los equipos deberán estar preparados antes de la hora oficial del partido."],
    ["Elo Cap", "Las plantillas estarán limitadas para mantener equilibrio competitivo."],
    ["Draft", "El formato de draft y bloqueos será anunciado antes del inicio del torneo."],
    ["Sustitutos", "Los cambios de jugadores deberán ser aprobados por la organización."],
    ["Comportamiento", "No se tolerarán faltas de respeto, toxicidad extrema o antideportividad."],
    ["Decisiones", "La organización tendrá la última palabra ante conflictos o situaciones no previstas."],
  ];

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <PageTitle title="Normas principales" subtitle="Reglas claras. Drama solo dentro de la partida." />
        <div className="grid gap-6 md:grid-cols-2">
          {rules.map(([title, text], index) => (
            <div key={title} className="rounded-3xl border border-yellow-400/20 bg-gradient-to-br from-white/10 to-white/5 p-6 shadow-xl shadow-black/30">
              <div className="mb-5 flex items-center justify-between">
                <ShieldCheck className="h-10 w-10 text-yellow-300" />
                <span className="text-5xl font-black text-white/5">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <h2 className="text-2xl font-black">{title}</h2>
              <p className="mt-4 leading-7 text-slate-300">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PageTitle({ title, subtitle }) {
  return (
    <div className="mb-14 text-center">
      <p className="text-sm font-black uppercase tracking-[0.35em] text-yellow-300">JETACUP</p>
      <h1 className="mt-4 text-4xl font-black md:text-6xl">{title}</h1>
      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">{subtitle}</p>
    </div>
  );
}