import { motion } from "framer-motion";
import {
  Trophy,
  CalendarDays,
  ShieldCheck,
  Users,
  Swords,
  Crown,
  MessageCircle,
  ChevronRight,
} from "lucide-react";

const tournament = {
  name: "JETACUP 4",
  date: "Septiembre 2026",
  tagline: "Donde las comunidades entran a la Grieta con hambre de gloria.",
  discordUrl: "#",
  twitterUrl: "#",
  formUrl: "PEGA_AQUI_TU_LINK_DE_GOOGLE_FORMS",
};

const teams = [
  "Patin Piti",
  "Flex del Averno",
  "Flex Soriana",
  "Follaculos",
  "Cagamierdas",
  "Próximo equipo",
];

function Button({ children }) {
  return (
    <a
      href="#contacto"
      className="inline-flex items-center gap-2 rounded-xl bg-blue-500 px-6 py-3 font-bold text-white hover:bg-blue-400"
    >
      {children}
      <ChevronRight size={18} />
    </a>
  );
}

export default function App() {
  return (
    <main className="min-h-screen bg-[#050814] text-white">
      <div className="fixed inset-0 -z-10">
        <div className="absolute left-[-100px] top-[-100px] h-80 w-80 rounded-full bg-yellow-400/20 blur-3xl" />
        <div className="absolute right-[-100px] top-[200px] h-96 w-96 rounded-full bg-amber-500/20 blur-3xl" />
        <div className="absolute bottom-[-120px] left-[30%] h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050814]/80 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-3 font-black">
            <Trophy className="h-7 w-7 text-yellow-400" />
            JETACUP
          </a>

          <div className="hidden gap-6 text-sm font-bold text-slate-300 md:flex">
            <a href="#formato" className="hover:text-cyan-300">Formato</a>
            <a href="#equipos" className="hover:text-cyan-300">Equipos</a>
            <a href="#calendario" className="hover:text-cyan-300">Calendario</a>
            <a href="#contacto" className="hover:text-cyan-300">Inscripción</a>
          </div>
        </nav>
      </header>

      <section className="px-6 py-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Trophy className="mx-auto mb-6 h-20 w-20 text-yellow-400" />

          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">
            Circuito amateur de League of Legends
          </p>

          <h1 className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 bg-clip-text text-6xl font-black text-transparent md:text-8xl">
            {tournament.name}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
            {tournament.tagline}
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Button>Inscribir equipo</Button>
            <a
              href="#formato"
              className="rounded-xl border border-white/20 px-6 py-3 font-bold text-white hover:bg-white/10"
            >
              Ver formato
            </a>
          </div>
        </motion.div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-4xl font-black">Sobre el torneo</h2>
          <p className="mt-4 text-slate-300">
            La JETACUP es un torneo de League of Legends para equipos de
            comunidades, creadores de contenido y jugadores con ganas de
            competir en serio.
          </p>
        </div>
      </section>

      <section id="formato" className="px-6 py-16">
        <h2 className="text-center text-4xl font-black">
          Formato competitivo
        </h2>

        <div className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-4">
          {[
            ["Fase de grupos", Users],
            ["Playoffs", Swords],
            ["BO3 Fearless", ShieldCheck],
            ["Draft + Elo Cap", Crown],
          ].map(([title, Icon]) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <Icon className="mb-4 h-8 w-8 text-cyan-300" />
              <h3 className="text-xl font-black">{title}</h3>
              <p className="mt-3 text-sm text-slate-300">
                Información editable del formato del torneo.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="equipos" className="px-6 py-20">
        <h2 className="text-center text-4xl font-black">
          Equipos participantes
        </h2>

        <div className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-3">
          {teams.map((team) => (
            <div
              key={team}
              className="group rounded-3xl border border-yellow-400/20 bg-gradient-to-br from-white/10 to-white/5 p-6 shadow-xl shadow-black/30 transition hover:-translate-y-1 hover:border-yellow-300/60"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-300 to-amber-500 text-2xl font-black text-black shadow-lg shadow-yellow-500/20">
                {team.slice(0, 2).toUpperCase()}
              </div>
              <h3 className="text-2xl font-black">{team}</h3>
              <p className="mt-2 text-slate-400">
                Representante por confirmar
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-16">
        <h2 className="text-center text-4xl font-black">Calendario</h2>

        <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-white/10 bg-white/5">
          {["Jornada 1", "Jornada 2", "Playoffs", "Final"].map((day) => (
            <div
              key={day}
              className="flex items-center justify-between border-b border-white/10 p-5 last:border-b-0"
            >
              <span className="font-bold">{day}</span>
              <span className="text-cyan-300">Fecha por confirmar</span>
              <CalendarDays className="text-yellow-400" />
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-16">
        <h2 className="text-center text-4xl font-black">Normas principales</h2>

        <ul className="mx-auto mt-10 max-w-3xl space-y-4">
          {[
            "Puntualidad obligatoria.",
            "Elo cap para equilibrar equipos.",
            "Draft competitivo.",
            "Sustitutos bajo aprobación.",
            "Respeto entre jugadores, staff y comunidades.",
          ].map((rule) => (
            <li
              key={rule}
              className="flex gap-3 rounded-xl bg-white/5 p-4 text-slate-200"
            >
              <ShieldCheck className="text-cyan-300" />
              {rule}
            </li>
          ))}
        </ul>
      </section>

      <section className="px-6 py-16 text-center">
        <Crown className="mx-auto mb-4 h-12 w-12 text-yellow-400" />
        <h2 className="text-4xl font-black">Premios por anunciar</h2>
        <p className="mt-4 text-slate-300">
          Aquí podrás poner prize pool, trofeo, MVP o recompensas especiales.
        </p>
      </section>

      <section id="contacto" className="px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-3xl border border-yellow-400/20 bg-gradient-to-br from-white/10 to-white/5 p-8 shadow-2xl shadow-yellow-500/10">
          <h2 className="text-center text-4xl font-black">
            Inscripción de equipos
          </h2>

          <form className="mt-8 grid gap-4">
            <input
              className="rounded-xl border border-white/10 bg-black/50 p-4 text-white outline-none placeholder:text-slate-500 focus:border-yellow-300"
              placeholder="Nombre del equipo"
            />
            <input
              className="rounded-xl border border-white/10 bg-black/50 p-4 text-white outline-none placeholder:text-slate-500 focus:border-yellow-300"
              placeholder="Representante"
            />
            <input
              className="rounded-xl border border-white/10 bg-black/50 p-4 text-white outline-none placeholder:text-slate-500 focus:border-yellow-300"
              placeholder="Discord o email"
            />
            <textarea
              className="rounded-xl border border-white/10 bg-black/50 p-4 text-white outline-none placeholder:text-slate-500 focus:border-yellow-300"
              placeholder="Cuéntanos quiénes sois"
            />

            <a
              href={tournament.formUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-gradient-to-r from-yellow-400 to-amber-500 p-4 font-black text-black hover:from-yellow-300 hover:to-amber-400"
            >
              Apúntate
            </a>
          </form>

          <div className="mt-6 flex justify-center gap-4">
            <a href={tournament.discordUrl} className="flex gap-2 font-bold text-yellow-300 hover:text-yellow-200">
              <MessageCircle /> Discord
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500">
        © 2026 {tournament.name}. Web no afiliada a Riot Games.
      </footer>
    </main>
  );
}