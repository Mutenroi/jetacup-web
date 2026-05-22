const teams = ["Patin Piti", "Flex del Averno", "Flex Soriana", "Follaculos", "Cagamierdas", "Próximo equipo"];

export default function Equipos() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <PageTitle title="Equipos participantes" subtitle="Los nombres que quieren levantar la copa." />
        <div className="grid gap-6 md:grid-cols-3">
          {teams.map((team, index) => (
            <div key={team} className="rounded-3xl border border-yellow-400/20 bg-gradient-to-br from-white/10 to-white/5 p-6 shadow-xl shadow-black/30">
              <div className="text-5xl font-black text-white/5">{String(index + 1).padStart(2, "0")}</div>
              <div className="my-6 flex h-20 w-20 items-center justify-center rounded-3xl border border-yellow-300/30 bg-black/50 text-3xl font-black text-yellow-300">
                {team.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase()}
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-yellow-300">Equipo</p>
              <h2 className="mt-2 text-2xl font-black">{team}</h2>
              <p className="mt-4 text-slate-300">Representante por confirmar.</p>
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