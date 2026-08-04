import Reveal from "./Reveal";
import SplitHeading from "./SplitHeading";
import SignatureDivider from "./SignatureDivider";
import {
  LeafIcon,
  BlossomIcon,
  HeartPulseIcon,
  FlameIcon,
  PlateIcon,
  FoodCompositionIcon,
} from "./icons";

const SERVICES = [
  {
    icon: LeafIcon,
    title: "Emagrecimento saudável",
    text: "Aprenda a emagrecer sem dietas radicais, desenvolvendo hábitos que podem ser mantidos ao longo da vida.",
  },
  {
    icon: BlossomIcon,
    title: "Climatério e menopausa",
    text: "Estratégias nutricionais para aliviar sintomas, preservar massa muscular, controlar peso e melhorar qualidade de vida.",
  },
  {
    icon: HeartPulseIcon,
    title: "Saúde hormonal",
    text: "A alimentação pode contribuir para equilíbrio hormonal, disposição, libido e bem-estar.",
  },
  {
    icon: FlameIcon,
    title: "Inflamação e resistência à insulina",
    text: "Planos personalizados para reduzir inflamações e melhorar a saúde metabólica.",
  },
  {
    icon: PlateIcon,
    title: "Reeducação alimentar",
    text: "Construa uma relação saudável com a alimentação, sem culpa e sem restrições desnecessárias.",
  },
  {
    icon: FoodCompositionIcon,
    title: "Compulsão alimentar",
    text: "Desenvolva estratégias para controlar episódios de compulsão e construir uma relação saudável com a alimentação.",
  },
];

export default function Services() {
  return (
    <section id="como-ajudo" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal direction="up">
            <p className="mb-4 flex items-center justify-center gap-3 text-sm uppercase tracking-[0.25em] text-sage">
              <span className="h-px w-8 bg-clay" />
              Como posso ajudar
              <span className="h-px w-8 bg-clay" />
            </p>
          </Reveal>
          <SplitHeading className="font-display text-3xl leading-tight text-ink sm:text-4xl">
            <span className="text-[#808077]">
              Cuidado nutricional para {" "}
            </span>
            <span className="text-[#AD7C6B]">
              cada fase da sua vida
            </span>
          </SplitHeading>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal
                key={service.title}
                direction="up"
                delay={index * 90}
                className={index === 4 ? "sm:col-span-2 lg:col-span-1" : ""}
              >
                <div className="group h-full rounded-[1.5rem] bg-white p-8 shadow-card transition-all duration-400 hover:-translate-y-1.5 hover:shadow-soft">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cream text-clay transition-colors duration-400 group-hover:bg-clay group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 font-display text-xl text-ink">{service.title}</h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">
                    {service.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
      <SignatureDivider className="mt-20" />
    </section>
  );
}
