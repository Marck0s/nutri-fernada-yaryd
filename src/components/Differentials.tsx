import Reveal from "./Reveal";
import SplitHeading from "./SplitHeading";

const DIFFERENTIALS = [
  "Planejamento nutricional sustentável",
  "Plano alimentar adaptado à sua rotina",
  "Estratégias baseadas em evidências científicas",
  "Acompanhamento individualizado",
  "Consultas presenciais e online",
  "Foco em saúde e performance",
];

export default function Differentials() {
  return (
    <section className="bg-clay py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="space-y-6">
            <Reveal direction="up">
              <p className="mb-4 flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-white/70">
                <span className="h-px w-8 bg-white/70" />
                Diferenciais
              </p>
            </Reveal>
            <SplitHeading className="font-display text-3xl leading-tight text-white sm:text-4xl">
              O que torna o acompanhamento único
            </SplitHeading>
          </div>

          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {DIFFERENTIALS.map((item, index) => (
              <Reveal key={item} direction="up" delay={index * 90} as="li">
                <div className="flex items-start gap-3 rounded-2xl bg-white/10 p-5 backdrop-blur-sm transition-colors duration-300 hover:bg-white/15">
                  <svg
                    className="mt-0.5 h-5 w-5 shrink-0 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 12.5l4.5 4.5L19 7"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-[0.95rem] leading-snug text-white">{item}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
