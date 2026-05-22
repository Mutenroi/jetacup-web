import { Routes, Route, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import Home from "./pages/Home";
import Formato from "./pages/Formato";
import Equipos from "./pages/Equipos";
import Calendario from "./pages/Calendario";
import Reglas from "./pages/Reglas";
import FAQ from "./pages/FAQ";
import Contacto from "./pages/Contacto";

import logo from "./assets/logo.png";

export default function App() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="relative flex min-h-screen flex-col bg-[#020712] text-white">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#020712]">
        <div className="absolute left-[-20%] top-[-10%] h-[600px] w-[600px] rounded-full bg-yellow-500/10 blur-3xl" />
        <div className="absolute right-[-20%] top-[20%] h-[700px] w-[700px] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-[-25%] left-1/2 h-[700px] w-[900px] -translate-x-1/2 rounded-full bg-yellow-400/10 blur-3xl" />

        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020712_75%)]" />
      </div>
      <header className="sticky top-0 z-50 border-b border-yellow-400/20 bg-black/80 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <NavLink to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="JETACUP"
              className="h-14 w-14 object-contain"
            />
          </NavLink>

          <div className="hidden items-center gap-8 text-sm font-black uppercase md:flex">
            {[
              ["/", "Inicio"],
              ["/formato", "Formato"],
              ["/equipos", "Equipos"],
              ["/calendario", "Calendario"],
              ["/reglas", "Reglas"],
              ["/faq", "FAQ"],
              ["/contacto", "Contacto"],
            ].map(([path, label]) => (
              <NavLink
                key={path}
                to={path}
                end={path === "/"}
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-300"
                    : "text-white hover:text-yellow-300"
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-xl border border-yellow-400/30 p-3 text-yellow-300 md:hidden"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>

        </nav>

        {menuOpen && (
          <div className="border-b border-yellow-400/20 bg-black/95 px-6 py-6 md:hidden">
            <div className="flex flex-col gap-5 text-sm font-black uppercase">
              {[
                ["/", "Inicio"],
                ["/formato", "Formato"],
                ["/equipos", "Equipos"],
                ["/calendario", "Calendario"],
                ["/reglas", "Reglas"],
                ["/faq", "FAQ"],
                ["/contacto", "Contacto"],
              ].map(([path, label]) => (
                <NavLink
                  key={path}
                  to={path}
                  end={path === "/"}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive ? "text-yellow-300" : "text-white"
                  }
                >
                  {label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </header>

      <div className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            className="relative z-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/formato" element={<Formato />} />
              <Route path="/equipos" element={<Equipos />} />
              <Route path="/calendario" element={<Calendario />} />
              <Route path="/reglas" element={<Reglas />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contacto" element={<Contacto />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </div>

      <footer className="relative z-10 border-t border-yellow-400/20 bg-black/40 px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <div>
            <p className="text-xl font-black text-yellow-300">JETACUP</p>
            <p className="mt-1 text-sm text-slate-500">
              Circuito amateur de League of Legends.
            </p>
          </div>

          <p className="max-w-xl text-sm leading-6 text-slate-500">
            © 2026 JETACUP. Web no afiliada a Riot Games. League of Legends es una
            marca de Riot Games, Inc.
          </p>
        </div>
      </footer>
    </main>
  );
}