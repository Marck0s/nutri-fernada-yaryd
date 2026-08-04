"use client";

import Image from "next/image";
import { useRef } from "react";
import Reveal from "./Reveal";
import SplitHeading from "./SplitHeading";

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

  const scrollBy = (direction: 1 | -1) => {
    const node = scrollerRef.current;
    if (!node) return;
    node.scrollBy({ left: direction * (node.clientWidth * 0.85), behavior: "smooth" });
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
          <div
            ref={scrollerRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {TESTIMONIALS.map((t, index) => (
              <Reveal
                key={t.name}
                direction="up"
                delay={index * 80}
                className="w-[85%] shrink-0 snap-start sm:w-[60%] lg:w-[32%]"
              >
                <div className="flex h-full flex-col rounded-[1.5rem] bg-white p-7 shadow-card">
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
              </Reveal>
            ))}
          </div>

          <div className="mt-8 flex justify-center gap-3">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Depoimento anterior"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-sage/30 text-ink transition-colors duration-300 hover:border-clay hover:text-clay"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Próximo depoimento"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-sage/30 text-ink transition-colors duration-300 hover:border-clay hover:text-clay"
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
