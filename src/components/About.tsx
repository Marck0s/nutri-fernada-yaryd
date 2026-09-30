import Image from "next/image";
import Reveal from "./Reveal";
import SplitHeading from "./SplitHeading";

const paragraphs = [
  "Sou nutricionista, engenheira de alimentos, com especialização em Nutrição Funcional na Saúde da Mulher, Fitoterapia e Gastronomia Funcional.",
  "Minha trajetória me trouxe um olhar que vai além do alimento isolado. Busco compreender a mulher de forma integral — sua rotina, sintomas, fase hormonal, relação com a alimentação e tudo aquilo que pode estar impactando sua saúde e qualidade de vida. ",
  "A Fitoterapia complementa esse cuidado, permitindo, quando indicada, integrar recursos de origem vegetal à estratégia nutricional de forma individualizada e responsável. ",
  "Acredito que saúde não é apenas ausência de doença. É ter disposição, autonomia, equilíbrio e sentir que o seu corpo funciona a seu favor. ",
];

export default function About() {
  return (
    <section id="sobre" className="relative bg-cream-soft py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-10">
        <Reveal direction="left" className="relative">
          <div className="relative mx-auto max-w-sm lg:max-w-none">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.75rem] shadow-float">
              <Image
                src="/images/fernanda-portrait-close.jpg"
                alt="Fernanda Yaryd, nutricionista especialista em saúde da mulher"
                fill
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-8 hidden w-44 overflow-hidden rounded-[1.25rem] border-4 border-cream-soft shadow-float sm:block">
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
