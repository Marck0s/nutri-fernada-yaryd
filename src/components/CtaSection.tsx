import Image from "next/image";
import Reveal from "./Reveal";
import SplitHeading from "./SplitHeading";

export default function CtaSection() {
  return (
    <section id="agendar" className="relative overflow-hidden bg-cream-soft py-24 lg:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1fr_0.7fr] lg:gap-16 lg:px-10">
        <div className="space-y-10">
          <Reveal direction="up">
            <p className="mb-4 flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-sage">
              <span className="h-px w-8 bg-clay" />
              Agende sua consulta
            </p>
          </Reveal>
          <SplitHeading className="font-display text-3xl leading-tight text-ink sm:text-4xl lg:text-[2.6rem]">
            <span className="text-[#808077]">
              Comece hoje sua {" "}
            </span>
            <span className="text-[#AD7C6B]">
              transformação.
            </span>
          </SplitHeading>
          <Reveal direction="up" delay={100}>
            <p className="max-w-lg text-lg leading-relaxed text-ink-soft">
              Dê o primeiro passo em direção a mais saúde, leveza e equilíbrio.
              Agende sua consulta e conte com um acompanhamento pensado especialmente
              para você.
            </p>
            <a
              href="https://wa.me/5511974848888?text=Olá, vim pelo site e gostaria de agendar uma consulta."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center justify-center rounded-full bg-clay px-10 py-4 text-base font-medium text-white transition-all duration-300 hover:bg-clay-dark hover:-translate-y-0.5 hover:shadow-lg"
            >
              Agendar Consulta
            </a>
          </Reveal>
        </div>

        <Reveal direction="scale" delay={150}>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-[1.75rem] shadow-soft">
            <Image
              src="/images/fernanda-kiwi.jpg"
              alt="Fernanda Yaryd sorrindo, celebrando alimentação com leveza e bom humor"
              fill
              sizes="(max-width: 1024px) 70vw, 24vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
