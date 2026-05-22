import { CalendarDays } from "lucide-react";

export default function Calendario() {
  const schedule = [
    ["Jornada 1", "Por confirmar", "Inicio de la fase de grupos"],
    ["Jornada 2", "Por confirmar", "Partidos clave de clasificación"],
    ["Playoffs", "Por confirmar", "Eliminatorias BO3 Fearless"],
    ["Final", "Por confirmar", "La serie por la copa"],
  ];

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <PageTitle title="Calendario" subtitle="La ruta hacia la final." />
        <div className="overflow-hidden rounded-3xl border border-yellow-400/20 bg-gradient-to-br from-white/10 to-white/5 shadow-2xl shadow-black/30">
          {schedule.map(([day, date, description], index) => (
            <div key={day} className="grid gap-4 border-b border-white/10 p-6 last:border-b-0 md:grid-cols-[80px_1fr_1fr_2fr] md:items-center">
              <div className="text-4xl font-black text-yellow-300/40">{String(index + 1).padStart(2, "0")}</div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500">Fase</p>
                <p className="mt-1 text-xl font-black">{day}</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500">Fecha</p>
                <p className="mt-1 font-bold text-yellow-300">{date}</p>
              </div>
              <p className="leading-7 text-slate-300">{description}</p>
              <CalendarDays className="hidden" />
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