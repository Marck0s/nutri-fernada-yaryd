"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Reveal from "./Reveal";
import SplitHeading from "./SplitHeading";
import { prefersReducedMotion } from "@/lib/reducedMotion";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeToReducedMotion(onStoreChange: () => void) {
  const query = window.matchMedia(REDUCED_MOTION_QUERY);
  query.addEventListener("change", onStoreChange);
  return () => query.removeEventListener("change", onStoreChange);
}

const TESTIMONIALS = [
  {
    name: "Ana Chiste",
    initials: "A",
    time: "há 8 meses",
    text: "Estava em um momento difícil da menopausa e a Fernanda me ajudou muito com minha dieta e equilíbrio dos meus hormônios. A abordagem dela é simples e personalizada exatamente para o que eu precisava. Amei e super recomendo!",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjULwCdUfVFlQsN9m836kOtbtk3z-tM733FijlWfVcqVCbLNQr1A=s64-c-rp-mo-br100",
  },
  {
    name: "Fernanda Shintaku",
    initials: "BS",
    time: "há 9 meses",
    text: "Fernanda é uma profissional incrível! Super atenciosa, tem uma escuta ativa e acolhedora, demonstra paciência e real interesse em entender o contexto e a rotina antes de propor qualquer ajuste. Sua preocupação em construir uma dieta compatível com a realidade torna o processo muito mais leve e sustentável.",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUluOxhlNKdsj7zM4Ros1PJRqIgTq21mYyiwq6jvZiUZP1dDNTH=s64-c-rp-mo-br100",
  },
  {
    name: "Michelle Freua",
    initials: "M",
    time: "há 2 meses",
    text: "A Fernanda é extremamente querida, atenciosa! Me ajudou muito em alguns pontos importantes que eu precisava ajustar no meu corpo. Ela é perfeita, sempre pronta para ajudar, extremamente educada. Ela não é 10, ela é 1000. Amei conhecer essa profissional maravilhosa, não largo mais.",
  },
  {
    name: "Professora Karina Prazeres",
    initials: "BS",
    time: "há 2 meses",
    text: "A Fernanda é uma profissional de muita excelência! Principalmente para mulheres, que assim como eu, estão no Climatério! Me ajudou demais não apenas no meu processo de emagrecimento, mas também de reeducação alimentar. Com ela aprendi a escolher os melhores alimentos, porcionar, aprimorei o paladar, conheci novas receitas e o melhor jeito de me alimentar! E isso tudo resultou num corpo mais magro, forte e com mais disposição!! Recomendo demais o trabalho da Fê!",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVlXT3OD5iv45ZjfxVwkoaDlBDpP7_66fBF7xEh07k2gQmaknJjqw=s64-c-rp-mo-br100",
  },
  {
    name: "Sandra Regina Ferreira Soares De Jesus",
    initials: "S",
    time: "há 3 meses",
    text: "Excelente profissional. Entendeu minhas expectativas e adequou o planejamento. Fez suplementares que mudou a minha vida. Melhorando o nível de energia, disposição e qualidade de sono. Recomendo.",
  },
  {
    name: "Simone Martins",
    initials: "MA",
    time: "há 8 meses",
    text: "Experiência excelente. Clínica linda, além da Fernanda ser uma profissional extremamente competente, atenciosa, com um plano 100% customizado de verdade, como eu jamais tinha experimentado. O acompanhamento é afetivo, respeitando nossos limites, de perto, sem ser invasivo. As trocas são reais, pensadas sob medida. Adoro e recomendo de olhos fechados.",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWEITob8rEIhBC1ZurvDKuCOeEtLhfKnaYWgHokkYbZQ91X5_U96w=s64-c-rp-mo-br100",
  },
  {
    name: "Tais Santos",
    initials: "BS",
    time: "há 9 meses",
    text: "Excelente profissional, atendimento via meet com muita definição, clareza nas explicações referente ao tratamento! Conhecimento técnico sobre emagrecimento com qualidade de vida! Atendimento voltado as questões da menopausa e como podemos levar uma vida mais ativa! Uma pessoa muito agradável de conversar e trocar experiencias! Super indico!",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVpvpwWuCmHz_oh7yDePC-TY1FmGogM9o1j0Va0OlzqYlAZ6VOOBA=s64-c-rp-mo-ba12-br100",
  },
  {
    name: "Vivian Sereda",
    initials: "V",
    time: "há 4 meses",
    text: "Quero deixar registrado o quanto fiquei satisfeita com o atendimento. A Dra. Fernanda é extremamente atenciosa, competente e conduz a consulta com muita calma, o que faz toda a diferença. Me senti acolhida e bem orientada em todos os momentos. Adorei a experiência! 🌷",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWNgkgIxnDj1nfGWDZZHcLIg1BltBCa9B47mD55pGm0wQfnCTpJ=s64-c-rp-mo-br100",
  },
  
];

export default function Testimonials() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [rowRevealed, setRowRevealed] = useState(false);

  // `useSyncExternalStore` reads the preference on the client while hydrating
  // from the server snapshot, so the first paint matches the SSR markup and no
  // motion preference mismatch reaches the DOM.
  const reducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    prefersReducedMotion,
    () => false
  );

  // Reduced motion means no entrance at all — the cards render in their final
  // position, so there is nothing to transition.
  const cardsRevealed = reducedMotion || rowRevealed;

  // The cards are revealed as one row, never one by one.
  //
  // `Reveal` observes each card against the *viewport*, but the carousel clips
  // every card past its visible width. Those cards therefore never report
  // `isIntersecting`, so they sat forever at `translateY(28px)` / `opacity: 0`
  // — invisible, and 28px lower than the cards that *were* in view — until the
  // user panned the carousel and watched them pop up one by one. Observing the
  // scroller instead anchors the entrance to the row as a whole and keeps the
  // per-card stagger.
  useEffect(() => {
    if (reducedMotion) return;

    const node = scrollerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRowRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -12% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [reducedMotion]);

  const scrollBy = (direction: 1 | -1) => {
    const node = scrollerRef.current;
    if (!node) return;
    node.scrollBy({
      left: direction * (node.clientWidth * 0.85),
      behavior: reducedMotion ? "instant" : "smooth",
    });
  };

  return (
    <section id="depoimentos" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal direction="up">
            <p className="mb-4 flex items-center justify-center gap-3 text-sm uppercase tracking-[0.25em] text-sage">
              <span className="h-px w-8 bg-clay" />
              Depoimentos
            </p>
          </Reveal>
          <SplitHeading className="font-display text-3xl leading-tight text-ink sm:text-4xl">
            <span className="text-[#808077]">
              O que dizem as pacientes
            </span>
          </SplitHeading>
          <Reveal direction="up" delay={120}>
            <div className="mt-6 flex flex-col items-center gap-2">
              <div className="flex items-center gap-1" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} viewBox="0 0 20 20" className="h-5 w-5 fill-clay">
                    <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.2-5.4 3.2 1.3-6-4.6-4.1 6.1-.6L10 1.5z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-ink-soft">
                <span className="font-semibold text-ink">5.0 </span> de 5.0 &middot; avaliações no Google
              </p>
            </div>
          </Reveal>
        </div>

        <div className="relative mt-14">
          {/* `overflow-y-hidden` is load-bearing, not cosmetic. Because `overflow-x`
              is not `visible`, `overflow-y` would compute to `auto`, and a
              transformed descendant (the cards' `translateY(28px)` entrance)
              extends the scrollable overflow area — which left the carousel
              user-scrollable by 28px - 16px (the `pb-4`) = 12px *vertically*. The
              first wheel tick / first swipe over a card was swallowed by the row
              scrolling itself, so the page refused to move while the whole card row
              visibly jumped up. `hidden` makes the row non-user-scrollable on Y and
              hands the gesture straight back to the page.
              (`clip` would be tidier — it does not create a scroll container at all
              — but Chrome normalises `overflow-x: auto` + `overflow-y: clip` down to
              `hidden`, so `hidden` is the value that actually lands.)
              `touch-action: pan-x pan-y` is then mandatory on touch: a
              horizontal-only scroller otherwise infers a pan-x touch-action region,
              which traps vertical swipes before they can chain.
              `overscroll-x-contain` keeps horizontal over-scroll from chaining.
              `items-stretch` is the flex default and is stated explicitly because
              equal card height depends on it together with the `h-full` card below. */}
          <div
            ref={scrollerRef}
            tabIndex={0}
            role="region"
            aria-label="Depoimentos das pacientes"
            className="flex snap-x snap-mandatory items-stretch gap-6 overflow-x-auto overflow-y-hidden overscroll-x-contain [touch-action:pan-x_pan-y] scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay [&::-webkit-scrollbar]:hidden"
          >
            {TESTIMONIALS.map((t, index) => (
              <div
                key={t.name}
                data-reveal="up"
                data-revealed={cardsRevealed}
                style={{
                  transitionDelay: `${index * 80}ms`,
                  transition: reducedMotion ? "none" : undefined,
                }}
                className="w-[85%] shrink-0 snap-start sm:w-[60%] lg:w-[32%]"
              >
                <div className="flex h-full flex-col rounded-[1.5rem] bg-white p-7 shadow-rest">
                  <div className="flex items-center gap-3">
                    {t.avatar ? (
                      <>
                        <Image
                          src={t.avatar}
                          alt={t.name}
                          width={44}
                          height={44}
                          className="rounded-full object-cover"
                          priority
                        />
                        <div>
                          <p className="text-sm font-medium text-ink">{t.name}</p>
                          <p className="text-xs text-ink-soft/70">{t.time}</p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-clay/15 font-display text-sm text-clay">
                          {t.initials}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-ink">{t.name}</p>
                          <p className="text-xs text-ink-soft/70">{t.time}</p>
                        </div>
                      </>
                    )}
                    <svg viewBox="0 0 24 24" className="ml-auto h-5 w-5" aria-hidden="true">
                      <path
                        fill="#4285F4"
                        d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47a5.53 5.53 0 0 1-2.4 3.63v3h3.88c2.27-2.09 3.54-5.17 3.54-8.87z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.87-3c-1.08.72-2.45 1.15-4.06 1.15-3.13 0-5.78-2.11-6.73-4.96H1.27v3.11A12 12 0 0 0 12 24z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.27 14.28A7.2 7.2 0 0 1 4.89 12c0-.79.14-1.56.38-2.28V6.61H1.27A12 12 0 0 0 0 12c0 1.93.46 3.76 1.27 5.39z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.94 1.19 15.24 0 12 0A12 12 0 0 0 1.27 6.61l4 3.11C6.22 6.86 8.87 4.75 12 4.75z"
                      />
                    </svg>
                  </div>
                  <div className="mt-3 flex gap-0.5" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-clay">
                        <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.2-5.4 3.2 1.3-6-4.6-4.1 6.1-.6L10 1.5z" />
                      </svg>
                    ))}
                  </div>
                  <p className="mt-4 flex-1 text-[0.92rem] leading-relaxed text-ink-soft">
                    &ldquo;{t.text}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center gap-3">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Depoimento anterior"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-sage/30 text-ink transition-colors duration-300 hover:border-clay hover:text-clay focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Próximo depoimento"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-sage/30 text-ink transition-colors duration-300 hover:border-clay hover:text-clay focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
