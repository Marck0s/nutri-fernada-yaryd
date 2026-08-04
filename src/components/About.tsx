import Image from "next/image";
import Reveal from "./Reveal";
import SplitHeading from "./SplitHeading";

const paragraphs = [
  "Como nutricionista e engenheira de alimentos, com especialização em Saúde da Mulher e Gastronomia Funcional, encontrei na nutrição um propósito que vai muito além da alimentação: ajudar mulheres a recuperarem sua saúde, confiança e qualidade de vida.",
  "Acredito que saúde não é apenas a ausência de doença. É sentir disposição ao acordar, viver com autonomia, ter equilíbrio e fazer escolhas conscientes que respeitem sua rotina e seu corpo.",
  "Por isso, cada consulta é única. Meu trabalho é compreender sua história, seus desafios e seus objetivos para construir um plano alimentar personalizado, baseado em evidências científicas e pensado para a sua realidade.",
  "Seja para emagrecer de forma saudável, atravessar o climatério e a menopausa com mais leveza, reduzir inflamações ou simplesmente desenvolver uma relação mais tranquila com a alimentação, estarei ao seu lado em cada etapa dessa jornada.",
  "Meu compromisso é oferecer um acompanhamento acolhedor, individualizado e humano, para que você conquiste resultados duradouros e uma vida mais saudável, leve e funcional.",
];

export default function About() {
  return (
    <section id="sobre" className="relative bg-cream-soft py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-10">
        <Reveal direction="left" className="relative">
          <div className="relative mx-auto max-w-sm lg:max-w-none">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.75rem] shadow-soft">
              <Image
                src="/images/fernanda-portrait-close.jpg"
                alt="Fernanda Yaryd, nutricionista especialista em saúde da mulher"
                fill
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-8 hidden w-44 overflow-hidden rounded-[1.25rem] border-4 border-cream-soft shadow-card sm:block">
              <Image
                src="/images/fernanda-desk.jpg"
                alt="Fernanda Yaryd em atendimento, planejando consultas nutricionais"
                width={320}
                height={400}
                className="h-56 w-full object-cover"
              />
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col justify-center">
          <Reveal direction="up">
            <p className="mb-4 flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-sage">
              <span className="h-px w-8 bg-clay" />
              Sobre mim
            </p>
          </Reveal>
          <SplitHeading className="font-display text-3xl leading-tight text-ink sm:text-4xl">
            <span className="text-[#808077]">
              Nutrição com propósito, ciência e escuta
            </span>
          </SplitHeading>

          <div className="mt-8 space-y-5">
            {paragraphs.map((paragraph, index) => (
              <Reveal key={index} direction="up" delay={index * 90}>
                <p
                  className={`leading-relaxed text-ink-soft ${
                    index === 0 ? "text-lg" : "text-base"
                  }`}
                >
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal direction="up" delay={480}>
            <a
              href="#agendar"
              className="mt-10 inline-flex w-fit items-center gap-2 border-b border-clay pb-1 text-[0.95rem] font-medium text-clay transition-all duration-300 hover:gap-3.5"
            >
              Vamos começar sua jornada
              <span aria-hidden="true">&rarr;</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
