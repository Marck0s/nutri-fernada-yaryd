import Image from "next/image";
import Reveal from "./Reveal";
import LetterReveal from "./LetterReveal";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-cream pt-32 pb-20 lg:pt-40 lg:pb-0 lg:min-h-screen lg:flex lg:items-center"
    >
      {/* ambient organic backdrop */}
      <svg
        className="pointer-events-none absolute -left-24 -top-24 h-[420px] w-[420px] opacity-[0.35] lg:opacity-[0.5]"
        viewBox="0 0 400 400"
        aria-hidden="true"
      >
        <path
          d="M200 40 C 300 40, 360 120, 360 200 C 360 300, 280 360, 200 360 C 120 360, 40 300, 40 200 C 40 100, 100 40, 200 40 Z"
          fill="none"
          stroke="var(--color-clay)"
          strokeWidth="0.75"
        />
      </svg>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-10">
        <div>
          <Reveal direction="up">
            <p className="mb-5 flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-sage">
              <span className="h-px w-8 bg-clay" />
              Nutrição para a mulher 
            </p>
          </Reveal>

          <h1 className="font-display text-[2.5rem] leading-[1.12] text-ink sm:text-5xl lg:text-[3.4rem] lg:leading-[1.1]">
            <span className="text-[#808077]">
              <LetterReveal text="Nutrição personalizada para transformar sua saúde," />{" "}
            </span>
            <span className="italic text-clay">
              <LetterReveal text="autoestima e qualidade de vida." startDelay={900} />
            </span>
          </h1>

          <Reveal direction="up" delay={200}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft">
              Um acompanhamento individualizado que integra alimentação, saúde metabólica, fase hormonal, estilo de vida e, quando indicada, Fitoterapia.
            </p>
          </Reveal>

          <Reveal direction="up" delay={350}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#agendar"
                className="inline-flex items-center justify-center rounded-full bg-clay px-8 py-4 text-[0.95rem] font-medium text-white transition-all duration-300 hover:bg-clay-dark hover:-translate-y-0.5 hover:shadow-lg"
              >
                Agendar consulta
              </a>
              <a
                href="#sobre"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-sage/40 px-8 py-4 text-[0.95rem] font-medium text-ink transition-all duration-300 hover:border-clay hover:text-clay"
              >
                Conheça meu trabalho
              </a>
            </div>
          </Reveal>

          <Reveal direction="up" delay={500}>
            <div className="mt-12 flex flex-wrap items-center gap-2 sm:gap-6 text-sm text-ink-soft/80">
              <span>Nutricionista &amp; Engenheira de Alimentos</span>
              <span className="h-1 w-1 rounded-full bg-sage/60" />
              <span>Saúde da Mulher</span>
              <span className="h-1 w-1 rounded-full bg-sage/60" />
              <span>Fitoretapia</span>
            </div>
          </Reveal>
        </div>

        <Reveal direction="right" delay={250} className="relative">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] shadow-[0_30px_70px_-30px_rgba(58,53,47,0.35)] lg:max-w-none">
            <video
              className="hidden h-full w-full object-cover lg:block"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/images/fernanda-portrait-arch.jpg"
              aria-label="Vídeo institucional de Fernanda Yaryd"
            >
              <source src="/video/hero.mp4" type="video/mp4" />
            </video>
            <Image
              src="/images/fernanda-portrait-arch.jpg"
              alt="Fernanda Yaryd, nutricionista, sorrindo em ambiente clean e acolhedor"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover lg:hidden"
            />
          </div>
          <div
            className="absolute -bottom-6 -left-6 hidden h-28 w-28 rounded-full bg-white shadow-float sm:flex flex-col items-center justify-center text-center lg:flex"
            aria-hidden="true"
          >
            <span className="font-display text-xl italic text-clay">5.0</span>
            <span className="text-[0.65rem] uppercase tracking-widest text-sage">em avaliações</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
