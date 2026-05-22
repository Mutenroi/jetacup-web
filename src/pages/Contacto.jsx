import { MessageCircle, AtSign } from "lucide-react";

const links = {
  discordUrl: "#",
  twitterUrl: "#",
};

export default function Contacto() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-yellow-400/20 bg-gradient-to-br from-white/10 to-white/5 p-8 text-center shadow-2xl shadow-yellow-500/10 md:p-12">
        <p className="text-sm font-black uppercase tracking-[0.35em] text-yellow-300">Contacto</p>
        <h1 className="mt-4 text-4xl font-black md:text-6xl">Habla con la organización.</h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Para dudas, propuestas o contacto con la JETACUP, usa nuestros canales oficiales.
        </p>

        <div className="mx-auto mt-10 grid max-w-4xl gap-4 md:grid-cols-2">
          <a href={links.discordUrl} target="_blank" rel="noreferrer" className="rounded-3xl border border-white/10 bg-[#5865F2]/10 p-6 text-left shadow-xl transition hover:-translate-y-1 hover:border-[#5865F2]/40">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#AAB3FF]">Comunidad</p>
            <div className="mt-4 flex items-center justify-between">
              <h2 className="text-2xl font-black">Discord</h2>
              <MessageCircle className="h-8 w-8 text-yellow-300" />
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-300">Habla con organización, equipos y comunidad.</p>
          </a>

          <a href={links.twitterUrl} target="_blank" rel="noreferrer" className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left shadow-xl transition hover:-translate-y-1 hover:border-yellow-300/40">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-yellow-300">Redes sociales</p>
            <div className="mt-4 flex items-center justify-between">
              <h2 className="text-2xl font-black">Twitter / X</h2>
              <AtSign className="h-8 w-8 text-yellow-300" />
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-300">Noticias, anuncios y clips del torneo.</p>
          </a>
        </div>
      </div>
    </section>
  );
}