import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Trophy,
  CalendarDays,
  ShieldCheck,
  Users,
  Swords,
  Crown,
  MessageCircle,
  ChevronRight,
  AtSign,
} from "lucide-react";

const tournament = {
  name: "JETACUP 4",
  date: "Septiembre 2026",
  tagline: "¿Te crees capaz de carrilear a tu equipo de maulas? Demuéstralo",
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
  const targetDate = new Date("2026-09-01T18:00:00");

  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      );
      const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
      );

      setTimeLeft({ days, hours, minutes });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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
            <a href="#contacto" className="hover:text-cyan-300">Contacto</a>
          </div>
        </nav>
      </header>

      <section className="relative overflow-hidden px-6 py-24 text-center">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.13),transparent_35%)]" />

        <div className="absolute left-0 top-1/3 -z-10 h-72 w-72 rotate-12 bg-yellow-500/10 blur-3xl" />
        <div className="absolute right-0 top-1/3 -z-10 h-72 w-72 -rotate-12 bg-amber-500/10 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Trophy className="mx-auto mb-6 h-20 w-20 text-yellow-400 drop-shadow-[0_0_18px_rgba(250,204,21,0.55)]" />

          <p className="mb-4 text-sm font-black uppercase tracking-[0.45em] text-cyan-300">
            Circuito amateur de League of Legends
          </p>

          <h1 className="text-6xl font-black tracking-tight text-yellow-400 drop-shadow-[0_0_25px_rgba(250,204,21,0.25)] md:text-8xl lg:text-9xl">
            {tournament.name}
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg text-slate-200 md:text-2xl">
            ¿Te crees capaz de carrilear a tu equipo de maulas? Demuéstralo
          </p>

          <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-yellow-400/30 bg-black/40 px-8 py-6 shadow-2xl shadow-yellow-500/10 backdrop-blur">
            <p className="text-xs font-black uppercase tracking-[0.45em] text-yellow-300">
              Comienza en
            </p>

            <div className="mt-5 grid grid-cols-3 divide-x divide-white/20">
              <div>
                <p className="text-5xl font-black text-white">
                  {timeLeft.days || 0}
                </p>
                <p className="mt-1 text-xs uppercase text-slate-400">Días</p>
              </div>

              <div>
                <p className="text-5xl font-black text-white">
                  {timeLeft.hours || 0}
                </p>
                <p className="mt-1 text-xs uppercase text-slate-400">Horas</p>
              </div>

              <div>
                <p className="text-5xl font-black text-white">
                  {timeLeft.minutes || 0}
                </p>
                <p className="mt-1 text-xs uppercase text-slate-400">Min</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={tournament.formUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-2xl border border-yellow-400/40 bg-black/40 px-8 py-4 font-black text-white shadow-lg shadow-yellow-500/10 transition hover:-translate-y-1 hover:bg-yellow-400 hover:text-black"
            >
              Inscribir equipo
              <ChevronRight size={18} />
            </a>

            <a
              href="#formato"
              className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-black/30 px-8 py-4 font-black text-white transition hover:-translate-y-1 hover:border-yellow-300 hover:bg-white/10"
            >
              Ver formato
            </a>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-4 border-y border-white/10 py-6 md:grid-cols-4">
            {[
              ["Fecha", tournament.date],
              ["Formato", "Grupos + Playoffs"],
              ["Modo", "BO3 Fearless"],
              ["Objetivo", "Una sola comunidad, una sola copa"],
            ].map(([label, value]) => (
              <div key={label} className="text-center md:border-r md:border-white/10 last:border-r-0">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
                  {label}
                </p>
                <p className="mt-2 font-black text-white">{value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="px-6 py-10">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-4">
          {[
            ["Estado", "Inscripciones pronto"],
            ["Fecha", tournament.date],
            ["Formato", "Grupos + Playoffs"],
            ["Modo", "BO3 Fearless"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-2xl border border-yellow-400/20 bg-black/40 p-5 text-center shadow-lg shadow-yellow-500/5"
            >
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-yellow-300">
                {label}
              </p>
              <p className="mt-2 text-lg font-black text-white">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-yellow-300">
              Sobre el torneo
            </p>

            <h2 className="mt-4 text-4xl font-black text-white md:text-6xl">
              Una liga de barrio con traje de final internacional.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              La JETACUP es un torneo de League of Legends para equipos de
              comunidades, creadores de contenido y jugadores que quieren competir
              con formato serio, narrativa propia y partidos que apetece castear.
            </p>
          </div>

          <div className="rounded-3xl border border-yellow-400/20 bg-gradient-to-br from-white/10 to-white/5 p-6 shadow-2xl shadow-yellow-500/10">
            {[
              ["Comunidad", "Equipos nacidos de streamers, Discords y grupos de jugadores."],
              ["Competición", "Formato claro, reglas públicas y partidos con tensión real."],
              ["Espectáculo", "Narrativa, piques sanos, casters y momentos para recordar."],
            ].map(([title, text]) => (
              <div key={title} className="border-b border-white/10 py-5 last:border-b-0">
                <h3 className="text-2xl font-black text-yellow-300">{title}</h3>
                <p className="mt-2 leading-7 text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="formato" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-yellow-300">
              Formato competitivo
            </p>

            <h2 className="mt-4 text-4xl font-black text-white md:text-6xl">
              No basta con ganar una partida. Hay que sobrevivir al formato.
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              La JETACUP mezcla fase de grupos, playoffs y BO3 Fearless para premiar
              constancia, champion pool y cabeza fría cuando la serie se calienta.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              [
                "01",
                "Fase de grupos",
                "Grupos de 4 equipos. Cada victoria cuenta y cada derrota puede complicar el camino.",
                Users,
              ],
              [
                "02",
                "Playoffs",
                "Los mejores avanzan a eliminatorias. Aquí ya no hay margen para experimentar.",
                Swords,
              ],
              [
                "03",
                "BO3 Fearless",
                "Series al mejor de 3 con formato Fearless para evitar repetir campeones y premiar la profundidad.",
                ShieldCheck,
              ],
              [
                "04",
                "Draft + Elo Cap",
                "Sistema pensado para equilibrar plantillas y que el torneo se gane dentro de la Grieta.",
                Crown,
              ],
            ].map(([number, title, text, Icon]) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-3xl border border-yellow-400/20 bg-gradient-to-br from-white/10 to-white/5 p-6 shadow-xl shadow-black/30 transition hover:-translate-y-1 hover:border-yellow-300/60"
              >
                <div className="absolute right-6 top-4 text-7xl font-black text-white/5">
                  {number}
                </div>

                <Icon className="mb-6 h-10 w-10 text-yellow-300" />

                <h3 className="text-2xl font-black text-white">{title}</h3>

                <p className="mt-3 leading-7 text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="equipos" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-yellow-300">
              Equipos participantes
            </p>

            <h2 className="mt-4 text-4xl font-black text-white md:text-6xl">
              Los nombres que quieren levantar la copa.
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              Equipos nacidos de comunidades, creadores y grupos de jugadores listos
              para entrar al circuito.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {teams.map((team, index) => (
              <div
                key={team}
                className="group relative overflow-hidden rounded-3xl border border-yellow-400/20 bg-gradient-to-br from-white/10 to-white/5 p-6 shadow-xl shadow-black/30 transition hover:-translate-y-1 hover:border-yellow-300/60"
              >
                <div className="absolute right-4 top-4 text-6xl font-black text-white/5">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl border border-yellow-300/30 bg-black/50 text-3xl font-black text-yellow-300 shadow-lg shadow-yellow-500/10">
                  {team
                    .split(" ")
                    .map((word) => word[0])
                    .join("")
                    .slice(0, 2)
                    .toUpperCase()}
                </div>

                <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-yellow-300">
                  Equipo
                </p>

                <h3 className="text-2xl font-black text-white">{team}</h3>

                <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                    Representante
                  </p>
                  <p className="mt-2 font-bold text-slate-200">
                    Por confirmar
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="calendario" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-yellow-300">
              Calendario
            </p>

            <h2 className="mt-4 text-4xl font-black text-white md:text-6xl">
              La ruta hacia la final.
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              Fechas provisionales del circuito. Se actualizarán cuando estén cerrados
              todos los equipos.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-yellow-400/20 bg-gradient-to-br from-white/10 to-white/5 shadow-2xl shadow-black/30">
            {[
              ["Jornada 1", "Por confirmar", "Inicio de la fase de grupos"],
              ["Jornada 2", "Por confirmar", "Partidos clave de clasificación"],
              ["Playoffs", "Por confirmar", "Eliminatorias BO3 Fearless"],
              ["Final", "Por confirmar", "La serie por la copa"],
            ].map(([day, date, description], index) => (
              <div
                key={day}
                className="grid gap-4 border-b border-white/10 p-6 last:border-b-0 md:grid-cols-[80px_1fr_1fr_2fr] md:items-center"
              >
                <div className="text-4xl font-black text-yellow-300/40">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500">
                    Fase
                  </p>
                  <p className="mt-1 text-xl font-black text-white">{day}</p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500">
                    Fecha
                  </p>
                  <p className="mt-1 font-bold text-yellow-300">{date}</p>
                </div>

                <p className="leading-7 text-slate-300">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-yellow-300">
              Normas principales
            </p>

            <h2 className="mt-4 text-4xl font-black text-white md:text-6xl">
              Reglas claras. Drama solo dentro de la partida.
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              La JETACUP busca competición seria sin perder el espectáculo ni el
              espíritu de comunidad.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              [
                "Puntualidad",
                "Los equipos deberán estar preparados antes de la hora oficial del partido.",
              ],
              [
                "Elo Cap",
                "Las plantillas estarán limitadas para mantener equilibrio competitivo.",
              ],
              [
                "Draft",
                "El formato de draft y bloqueos será anunciado antes del inicio del torneo.",
              ],
              [
                "Sustitutos",
                "Los cambios de jugadores deberán ser aprobados por la organización.",
              ],
              [
                "Comportamiento",
                "No se tolerarán faltas de respeto, toxicidad extrema o antideportividad.",
              ],
              [
                "Decisiones",
                "La organización tendrá la última palabra ante conflictos o situaciones no previstas.",
              ],
            ].map(([title, text], index) => (
              <div
                key={title}
                className="group rounded-3xl border border-yellow-400/20 bg-gradient-to-br from-white/10 to-white/5 p-6 shadow-xl shadow-black/30 transition hover:-translate-y-1 hover:border-yellow-300/60"
              >
                <div className="mb-5 flex items-center justify-between">
                  <ShieldCheck className="h-10 w-10 text-yellow-300" />

                  <span className="text-5xl font-black text-white/5">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-white">{title}</h3>

                <p className="mt-4 leading-7 text-slate-300">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-yellow-400/20 bg-black/40 p-6 text-center shadow-lg shadow-yellow-500/5">
            <p className="text-sm uppercase tracking-[0.3em] text-yellow-300">
              Reglamento completo
            </p>

            <p className="mx-auto mt-4 max-w-3xl text-slate-300">
              El reglamento detallado con formato, sanciones, horarios y normas de
              competición será publicado antes del inicio oficial del circuito.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-yellow-400/20 bg-gradient-to-br from-yellow-400/10 via-white/5 to-black/40 p-8 text-center shadow-2xl shadow-yellow-500/10 md:p-12">
          <Crown className="mx-auto mb-6 h-16 w-16 text-yellow-300 drop-shadow-[0_0_18px_rgba(250,204,21,0.45)]" />

          <p className="text-sm font-black uppercase tracking-[0.35em] text-yellow-300">
            Premios
          </p>

          <h2 className="mt-4 text-4xl font-black text-white md:text-6xl">
            La recompensa todavía está bajo llave.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Prize pool, trofeo, MVP, recompensas especiales y sorpresas del circuito
            se anunciarán antes del inicio oficial.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              ["Campeón", "Premio principal por anunciar"],
              ["MVP", "Reconocimiento individual"],
              ["Comunidad", "Sorpresas para equipos y viewers"],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-black/40 p-5"
              >
                <p className="text-xl font-black text-yellow-300">{title}</p>
                <p className="mt-2 text-sm text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="px-6 py-24">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-yellow-400/20 bg-gradient-to-br from-white/10 to-white/5 p-8 text-center shadow-2xl shadow-yellow-500/10 md:p-12">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-yellow-300">
            Contacto
          </p>

          <h2 className="mt-4 text-4xl font-black text-white md:text-6xl">
            ¿Quieres que tu equipo entre en la JETACUP?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Las inscripciones se harán mediante formulario oficial. Para dudas,
            propuestas o contacto con la organización, usa nuestros canales.
          </p>

          <div className="mx-auto mt-10 grid max-w-4xl gap-4 md:grid-cols-2">
            <a
              href={tournament.discordUrl}
              target="_blank"
              rel="noreferrer"
              className="group rounded-3xl border border-white/10 bg-[#5865F2]/10 p-6 text-left shadow-xl transition hover:-translate-y-1 hover:border-[#5865F2]/40"
            >
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#AAB3FF]">
                Comunidad
              </p>

              <div className="mt-4 flex items-center justify-between">
                <h3 className="text-2xl font-black text-white">
                  Discord
                </h3>

                <MessageCircle className="h-8 w-8 text-[#7289DA]" />
              </div>

              <p className="mt-3 text-sm leading-6 text-slate-300">
                Habla con la organización, equipos y comunidad.
              </p>
            </a>

            <a
              href={tournament.twitterUrl}
              target="_blank"
              rel="noreferrer"
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 text-left shadow-xl transition hover:-translate-y-1 hover:border-yellow-300/40"
            >
              <p className="text-xs font-black uppercase tracking-[0.3em] text-yellow-300">
                Redes sociales
              </p>

              <div className="mt-4 flex items-center justify-between">
                <h3 className="text-2xl font-black text-white">
                  Twitter / X
                </h3>

                <AtSign className="h-8 w-8 text-yellow-300" />
              </div>

              <p className="mt-3 text-sm leading-6 text-slate-300">
                Noticias, anuncios y clips del torneo.
              </p>
            </a>
          </div>

          <p className="mt-8 text-sm text-slate-500">
            También puedes contactar por Twitter/X cuando esté disponible el canal oficial.
          </p>
        </div>
      </section>

      <footer className="border-t border-yellow-400/20 bg-black/30 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <div>
            <p className="text-xl font-black text-yellow-300">{tournament.name}</p>
            <p className="mt-1 text-sm text-slate-500">
              Circuito amateur de League of Legends.
            </p>
          </div>

          <p className="max-w-xl text-sm leading-6 text-slate-500">
            © 2026 {tournament.name}. Web no afiliada a Riot Games. League of
            Legends es una marca de Riot Games, Inc.
          </p>
        </div>
      </footer>
    </main>
  );
}