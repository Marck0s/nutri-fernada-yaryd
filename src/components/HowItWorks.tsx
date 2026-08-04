import Image from "next/image";
import Reveal from "./Reveal";
import SplitHeading from "./SplitHeading";

const STEPS = [
  {
    number: "01",
    title: (
      <>
        <span className="text-[#AD7C6B]">
          Avaliação completa para cada fase da sua vida
        </span>
      </>
    ),
    text: "Conheço sua rotina, histórico de saúde, exames, hábitos e objetivos.",
  },
  {
    number: "02",
    title: (
      <>
        <span className="text-[#AD7C6B]">
          Plano alimentar personalizado
        </span>
      </>
    ),
    text: "Nada de dietas prontas. Seu plano será desenvolvido exclusivamente para você.",
  },
  {
    number: "03",
    title: (
      <>
        <span className="text-[#AD7C6B]">
          Acompanhamento contínuo
        </span>
      </>
    ),
    text: "Suporte durante toda sua jornada para resultados duradouros.",
  },
];

export default function HowItWorks() {
  return (
    <section id="consulta" className="bg-cream-soft py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20 lg:px-10">
        <Reveal direction="left" className="relative order-2 lg:order-1">
          <div className="relative mx-auto grid max-w-md grid-cols-2 gap-4 lg:max-w-none">
            <div className="relative aspect-[3/4] translate-y-8 overflow-hidden rounded-[1.5rem] shadow-card">
              <Image
                src="/images/fernanda-book-fome.jpg"
                alt="Fernanda Yaryd lendo sobre reeducação alimentar"
                fill
                sizes="(max-width: 1024px) 45vw, 24vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-[1.5rem] shadow-card">
              <Image
                src="/images/fernanda-book-menopausa.jpg"
                alt="Fernanda Yaryd com material de estudo sobre menopausa"
                fill
                sizes="(max-width: 1024px) 45vw, 24vw"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal direction="up">
            <p className="mb-4 flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-sage">
              <span className="h-px w-8 bg-clay" />
              Como funciona a consulta
            </p>
          </Reveal>
          <SplitHeading className="font-display text-3xl leading-tight text-ink sm:text-4xl">
            <span className="text-[#808077]">
              Uma jornada, três etapas, um único foco: {" "}
              <span className="text-[#AD7C6B]">
                você
              </span>
            </span>
          </SplitHeading>

          <ol className="mt-12 space-y-10">
            {STEPS.map((step, index) => (
              <Reveal key={step.number} direction="up" delay={index * 120} as="li">
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <span className="font-display text-2xl italic text-clay">{step.number}</span>
                    {index < STEPS.length - 1 && (
                      <span className="mt-2 h-full w-px flex-1 bg-line" aria-hidden="true" />
                    )}
                  </div>
                  <div className="pb-2">
                    <h3 className="font-display text-xl text-ink">{step.title}</h3>
                    <p className="mt-2 max-w-md leading-relaxed text-ink-soft">{step.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
