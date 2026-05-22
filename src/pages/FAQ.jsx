export default function FAQ() {
  const faqs = [
    ["¿Quién puede participar?", "Equipos amateur, comunidades, grupos de amigos y equipos creados por creadores de contenido."],
    ["¿Habrá elo cap?", "Sí. El objetivo es equilibrar la competición y evitar plantillas descompensadas."],
    ["¿Cómo funcionan las inscripciones?", "Las inscripciones se realizarán mediante el formulario oficial."],
    ["¿Se retransmitirán los partidos?", "Sí. Habrá stream oficial, casters y cobertura en redes sociales."],
    ["¿Puedo hacer cambios en mi roster?", "Los cambios estarán limitados y sujetos a aprobación de la organización."],
  ];

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <PageTitle title="Preguntas frecuentes" subtitle="Lo típico que todo el mundo pregunta cinco minutos antes del torneo." />
        <div className="space-y-4">
          {faqs.map(([question, answer]) => (
            <div key={question} className="rounded-3xl border border-yellow-400/20 bg-gradient-to-br from-white/10 to-white/5 p-6 shadow-xl shadow-black/20">
              <h2 className="text-2xl font-black">{question}</h2>
              <p className="mt-4 leading-7 text-slate-300">{answer}</p>
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