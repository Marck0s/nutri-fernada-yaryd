import Image from "next/image";
import {
  WhatsAppIcon,
  InstagramIcon,
  MailIcon,
} from "./icons";

const CONTACTS = [
  {
    icon: InstagramIcon,
    href: "https://instagram.com/nutrifeyaryd",
    label: "@nutrifeyaryd",
  },
  {
    icon: WhatsAppIcon,
    href: "https://wa.me/5511974848888",
    label: "(11) 97484-8888",
  },
  {
    icon: MailIcon,
    href: "mailto:nutri.fernandayaryd@gmail.com",
    label: "nutri.fernandayaryd@gmail.com",
  }
];

const ADDRESS = "Av. Cassandoca, 125 - Lj 1 - Mooca, São Paulo - SP, 03169-010";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream-soft">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr_1.1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="Logotipo Nutri Fernanda Yaryd"
                width={100}
                height={100}
                className="h-12 w-auto rounded-sm"
              />
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream-soft/70">
              Nutrição personalizada e atendimento humanizado para emagrecimento
              saudável, saúde da mulher, climatério e menopausa.
            </p>
          </div>

          <div>
            <h3 className="font-display text-base text-white">Contato</h3>
            <ul className="mt-5 space-y-4">
              {CONTACTS.map(({ icon: Icon, href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-3 text-sm text-cream-soft/75 transition-colors hover:text-clay-light"
                  >
                    <Icon className="h-5 w-5" />
                    <span>{label}</span>
                  </a>
                </li>
              ))}
              <li className="flex items-start gap-3 pt-1 text-sm text-cream-soft/60">
                <span>{ADDRESS}</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display text-base text-white">Localização</h3>
            <div className="mt-5 overflow-hidden rounded-2xl border border-white/10">
              <iframe
                title="Mapa - Nutri Fernanda Yaryd"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(
                  ADDRESS
                )}&z=15&output=embed`}
                width="100%"
                height="220"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-cream-soft/50 sm:flex-row">
          <p>&copy; 2026 Nutricionista Fernanda Yaryd. Todos os direitos reservados.</p>
          <p>Desenvolvido com ❤️ por</p>
        </div>
      </div>
    </footer>
  )
}
