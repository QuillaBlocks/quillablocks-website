import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaTelegram, FaArrowRight } from "react-icons/fa6";
import { FaClipboardList } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Tu primer paso en blockchain — QuillaBlocks × Stellar",
  description:
    "Únete a QuillaBlocks y al Programa de Embajadores de Stellar LATAM en tres pasos: comunidad en WhatsApp, formulario de inscripción y canal de embajadores en Telegram.",
  alternates: { canonical: "/stellar" },
  openGraph: {
    title: "Tu primer paso en blockchain — QuillaBlocks × Stellar",
    description:
      "Tres pasos para entrar a la comunidad Web3 de Barranquilla y al Programa de Embajadores de Stellar LATAM.",
    url: "https://quillablocks.org/stellar",
  },
};

const steps = [
  {
    number: 1,
    title: "Únete a QuillaBlocks en WhatsApp",
    detail: "Eventos, talleres y oportunidades en Barranquilla.",
    action: "Entrar al grupo",
    href: "https://chat.whatsapp.com/EzY1yMk8SoS3qgRSKDuPON",
    icon: FaWhatsapp,
    color: "#00a08d",
  },
  {
    number: 2,
    title: "Aplica al Programa de Embajadores de Stellar",
    detail: "Un formulario corto y quedas inscrito oficialmente.",
    action: "Llenar el formulario",
    href: "https://forms.clickup.com/90131604307/f/2ky468uk-22693/GDSBIVKQ86I7ERFBNT",
    icon: FaClipboardList,
    color: "#fed400",
  },
  {
    number: 3,
    title: "Súmate al canal de embajadores de Stellar en Telegram",
    detail: "La comunidad de embajadores de Stellar de toda Latinoamérica.",
    action: "Abrir el canal",
    href: "https://t.me/StarMakerAmbassadorsss",
    icon: FaTelegram,
    color: "#ff8608",
  },
];

const benefits = [
  "Viajes a los eventos más importantes del ecosistema",
  "Becas para formarte en blockchain y Web3",
  "Hackathones para construir tu primer proyecto",
  "Grants para financiar tu startup",
  "Mentoría para pasar de cero a founder",
  "Llamadas semanales y una comunidad activa",
];

export default function StellarPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="px-6 pt-8 max-w-xl w-full mx-auto">
        <Link href="/" aria-label="QuillaBlocks, inicio" className="inline-block">
          <Image src="/quillablocks-logo.png" alt="" width={48} height={48} priority />
        </Link>
      </header>

      <main className="flex-1 px-6 py-10 max-w-xl w-full mx-auto">
        <h1
          className="animate-in delay-1 text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.05] mb-4"
          style={{ color: "var(--qb-white)" }}
        >
          Tu primer paso en blockchain
        </h1>
        <p className="animate-in delay-2 text-lg leading-relaxed mb-8">
          Tres pasos, dos minutos, y quedas dentro de la comunidad Web3 de
          Barranquilla y del Programa de Embajadores de Stellar LATAM. Es
          gratis.
        </p>

        <ol id="pasos" className="animate-in delay-3 space-y-3 mb-16 scroll-mt-6">
          {steps.map(({ number, title, detail, action, href, icon: Icon, color }) => (
            <li key={number}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="step-block group flex items-center gap-4 rounded-[24px] rounded-bl-none p-5"
                style={{ background: color, color: "var(--qb-navy)" }}
              >
                <span className="text-4xl font-extrabold leading-none tabular-nums w-8 shrink-0">
                  {number}
                </span>
                <span className="flex-1 min-w-0">
                  <span className="block text-lg font-bold leading-tight">{title}</span>
                  <span className="block text-sm leading-snug opacity-80 mt-1">{detail}</span>
                  <span className="inline-flex items-center gap-2 text-sm font-bold mt-3">
                    {action}
                    <FaArrowRight
                      size={12}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </span>
                </span>
                <Icon size={28} aria-hidden className="shrink-0" />
              </a>
            </li>
          ))}
        </ol>

        <section className="animate-in delay-4 mb-12">
          <h2 className="text-2xl font-bold mb-3" style={{ color: "var(--qb-white)" }}>
            Qué ganas
          </h2>
          <ul className="space-y-2.5 text-base leading-snug">
            {benefits.map((b) => (
              <li key={b} className="flex gap-3">
                <span
                  aria-hidden
                  className="mt-[0.5em] h-2.5 w-2.5 shrink-0 rounded-[3px] rounded-bl-none"
                  style={{ background: "var(--qb-teal)" }}
                />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="animate-in delay-5 mb-12">
          <h2 className="text-2xl font-bold mb-3" style={{ color: "var(--qb-white)" }}>
            Quiénes somos
          </h2>
          <p className="text-base leading-relaxed">
            QuillaBlocks es la comunidad Web3 de Barranquilla. Conectamos a
            estudiantes, desarrolladores y emprendedores con el ecosistema real:
            los proyectos, las personas y las oportunidades que no vas a
            encontrar en ningún otro lugar de la región.
          </p>
        </section>

        <section className="animate-in delay-5 mb-14">
          <h2 className="text-2xl font-bold mb-3" style={{ color: "var(--qb-white)" }}>
            Qué es Stellar
          </h2>
          <p className="text-base leading-relaxed">
            Una red blockchain abierta, rápida y de muy bajo costo, diseñada
            para mover dinero y activos del mundo real: pagos, remesas,
            stablecoins y contratos inteligentes. Su programa de embajadores
            forma y financia a quienes quieren construir desde Latinoamérica.
          </p>
        </section>

        <p
          className="animate-in delay-6 text-xl font-bold leading-snug mb-6"
          style={{ color: "var(--qb-white)" }}
        >
          Es tu momento de ser parte y construir el futuro.
        </p>
        <a
          href="#pasos"
          className="animate-in delay-6 inline-flex items-center gap-2 text-base font-semibold"
          style={{ color: "var(--qb-teal)" }}
        >
          Unirme ahora
          <FaArrowRight size={13} className="-rotate-90" />
        </a>
      </main>

      <footer
        className="px-6 py-8 text-sm flex items-center justify-between max-w-xl w-full mx-auto"
        style={{ color: "var(--qb-muted)", borderTop: "1px solid var(--qb-border)" }}
      >
        <p>© {new Date().toLocaleDateString("es-CO", { timeZone: "America/Bogota", year: "numeric" })} QuillaBlocks</p>
        <p>Barranquilla, Colombia</p>
      </footer>
    </div>
  );
}
