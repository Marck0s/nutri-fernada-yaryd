"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#como-ajudo", label: "Especialização" },
  { href: "#consulta", label: "A consulta" },
  { href: "#depoimentos", label: "Depoimentos" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-cream/90 backdrop-blur-md shadow-[0_1px_0_0_var(--color-line)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#hero" className="flex items-center gap-3 shrink-0" aria-label="Nutri Fernanda Yaryd - início">
          <Image
            src="/images/logo.png"
            alt="Logotipo Nutri Fernanda Yaryd"
            width={100}
            height={100}
            className="h-12 w-auto mix-blend-multiply"
            priority
          />
        </a>

        <nav className="hidden lg:flex items-center gap-9" aria-label="Navegação principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.92rem] text-ink-soft hover:text-clay transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#agendar"
            className="inline-flex items-center rounded-full bg-clay px-6 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-clay-dark hover:shadow-lg"
          >
            Agendar consulta
          </a>
        </div>

        <button
          type="button"
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span
            className={`block h-[1.5px] w-6 bg-ink transition-transform duration-300 ${
              menuOpen ? "translate-y-[6.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[1.5px] w-6 bg-ink transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-[1.5px] w-6 bg-ink transition-transform duration-300 ${
              menuOpen ? "-translate-y-[6.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ease-out ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav
          className="flex flex-col gap-1 bg-cream-soft px-6 pb-6 pt-2 border-t border-line"
          aria-label="Navegação móvel"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-3 text-base text-ink-soft hover:text-clay transition-colors border-b border-line/70"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#agendar"
            onClick={() => setMenuOpen(false)}
            className="mt-4 inline-flex items-center justify-center rounded-full bg-clay px-6 py-3 text-sm font-medium text-white"
          >
            Agendar consulta
          </a>
        </nav>
      </div>
    </header>
  );
}
