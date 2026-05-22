import { Users, Swords, ShieldCheck, Crown } from "lucide-react";

export default function Formato() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-yellow-300">
            Formato competitivo
          </p>

          <h1 className="mt-4 text-4xl font-black text-white md:text-6xl">
            No basta con ganar una partida. Hay que sobrevivir al formato.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            La JETACUP mezcla fase de grupos, playoffs y BO3 Fearless para
            premiar constancia, champion pool y cabeza fría cuando la serie se
            calienta.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {[
            ["01", "Fase de grupos", "Grupos de 4 equipos. Se clasifican los dos mejores.", Users],
            ["02", "Playoffs", "Eliminatorias entre los mejores equipos del circuito.", Swords],
            ["03", "BO3 Fearless", "Series al mejor de 3 con formato Fearless.", ShieldCheck],
            ["04", "Draft + Elo Cap", "Sistema para equilibrar plantillas y mejorar la competición.", Crown],
          ].map(([number, title, text, Icon]) => (
            <div
              key={title}
              className="rounded-3xl border border-yellow-400/20 bg-gradient-to-br from-white/10 to-white/5 p-6 shadow-xl shadow-black/30"
            >
              <div className="mb-5 flex items-center justify-between">
                <Icon className="h-10 w-10 text-yellow-300" />
                <span className="text-5xl font-black text-white/5">
                  {number}
                </span>
              </div>

              <h2 className="text-2xl font-black text-white">{title}</h2>
              <p className="mt-4 leading-7 text-slate-300">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}