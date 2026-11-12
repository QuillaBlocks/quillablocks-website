import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { FaCheck, FaXmark } from "react-icons/fa6";
import { CopyButton, Swatch } from "./CopyButton";
import { LogoTabs } from "./LogoTabs";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kit de marca — QuillaBlocks",
  description:
    "Logos, colores y textos de QuillaBlocks para prensa, aliados y la comunidad.",
  alternates: { canonical: "/brand" },
  openGraph: {
    title: "Kit de marca — QuillaBlocks",
    description: "Logos, colores y textos de QuillaBlocks.",
    url: "https://quillablocks.org/brand",
  },
};

const SECTIONS = [
  { id: "logo", label: "Logo" },
  { id: "espacio", label: "Espacio y tamaño" },
  { id: "color", label: "Color" },
  { id: "descripcion", label: "Cómo describirnos" },
  { id: "usos", label: "Usos incorrectos" },
  { id: "reglas", label: "Reglas de uso" },
];

const COLORS = [
  { name: "Amarillo", hex: "#fed400", rgb: "254 212 0", cmyk: "1 15 93 0", ink: "#121329", role: "Acento. El tono más luminoso: títulos y detalles sobre azul oscuro." },
  { name: "Naranja", hex: "#ff8608", rgb: "255 134 8", cmyk: "0 57 94 0", ink: "#121329", role: "Acento. Bloques, fondos de piezas y llamados a la acción." },
  { name: "Rojo", hex: "#ed202a", rgb: "237 32 42", cmyk: "0 94 82 0", ink: "#ffffff", role: "Acento. Inicio del degradado; úsalo en superficies, no en texto pequeño." },
  { name: "Turquesa", hex: "#00a08d", rgb: "0 160 141", cmyk: "79 11 53 0", ink: "#ffffff", role: "Acento. Cierre del degradado; botones y elementos de apoyo." },
  { name: "Azul marino", hex: "#182946", rgb: "24 41 70", cmyk: "100 83 42 46", ink: "#ffffff", role: "El nombre del logo sobre fondos claros y el texto oscuro." },
  { name: "Azul oscuro", hex: "#121329", rgb: "18 19 41", cmyk: "100 93 48 70", ink: "#ffffff", role: "El fondo oscuro de la marca. Úsalo en lugar del negro puro." },
];

const GRADIENT = "linear-gradient(135deg, #ed202a 0%, #ff8608 35%, #fed400 65%, #00a08d 100%)";

const PAIRS = [
  { fg: "#ffffff", bg: "#121329", label: "Blanco sobre azul oscuro", ratio: "18,3:1" },
  { fg: "#fed400", bg: "#121329", label: "Amarillo sobre azul oscuro", ratio: "12,7:1" },
  { fg: "#182946", bg: "#ffffff", label: "Azul marino sobre blanco", ratio: "14,5:1" },
  { fg: "#121329", bg: "#fed400", label: "Azul oscuro sobre amarillo", ratio: "12,7:1" },
  { fg: "#ff8608", bg: "#121329", label: "Naranja sobre azul oscuro", ratio: "7,5:1" },
  { fg: "#fed400", bg: "#ffffff", label: "Amarillo sobre blanco", ratio: "1,4:1", fail: true },
];

const COPY = [
  { name: "Una línea", lang: "ES", text: "QuillaBlocks es la comunidad Web3 de Barranquilla, Colombia." },
  { name: "One line", lang: "EN", text: "QuillaBlocks is the Web3 community of Barranquilla, Colombia." },
  {
    name: "Descripción",
    lang: "ES",
    text: "QuillaBlocks es una comunidad tecnológica de Barranquilla, Colombia, que conecta al talento emergente de la región (estudiantes, jóvenes profesionales, desarrolladores, creativos y emprendedores) con el ecosistema global de blockchain y Web3 a través de educación, eventos y alianzas. Más en quillablocks.org.",
  },
  {
    name: "Description",
    lang: "EN",
    text: "QuillaBlocks is a tech community in Barranquilla, Colombia, that connects the region's emerging talent (students, young professionals, developers, creatives and entrepreneurs) with the global blockchain and Web3 ecosystem through education, events and partnerships. Learn more at quillablocks.org.",
  },
];

const MISUSE: { label: string; style?: React.CSSProperties; stage?: string; extra?: "crowd" }[] = [
  { label: "Deformarlo o estirarlo", style: { transform: "scaleX(1.45) scaleY(0.8)" } },
  { label: "Rotarlo", style: { transform: "rotate(-14deg)" } },
  { label: "Cambiar sus colores", style: { filter: "hue-rotate(150deg) saturate(1.4)" } },
  { label: "Agregarle sombras o brillos", style: { filter: "drop-shadow(0 0 14px #ff8608) drop-shadow(6px 8px 4px rgba(0,0,0,0.8))" } },
  { label: "Ponerlo sobre un color parecido", stage: "#ff8608" },
  { label: "Invadir su zona de protección", extra: "crowd" },
];

const ALLOWED = [
  "Usar el logo para hablar de QuillaBlocks en artículos, eventos y material de aliados.",
  "Escalarlo, siempre manteniendo su proporción.",
  "Elegir la versión que mejor contraste con el fondo.",
];

const FORBIDDEN = [
  "Usarlo como logo, avatar o nombre de otro proyecto.",
  "Dar a entender una alianza o patrocinio que no existe.",
  "Usarlo en productos para la venta sin permiso.",
];

const num = (id: string) => String(SECTIONS.findIndex((s) => s.id === id) + 1).padStart(2, "0");

function Heading({ id, title, children }: { id: string; title: string; children?: React.ReactNode }) {
  return (
    <header className="mb-8 max-w-2xl">
      <p className="mb-3 flex items-center gap-3 text-sm font-semibold text-[var(--qb-muted)]">
        <span className="font-mono text-brand-yellow">{num(id)}</span>
        {SECTIONS.find((s) => s.id === id)?.label}
      </p>
      <h2 className="font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{title}</h2>
      {children && <div className="mt-4 text-base leading-relaxed">{children}</div>}
    </header>
  );
}

const card = "overflow-hidden rounded-[20px] rounded-bl-none bg-white/[0.04] ring-1 ring-white/[0.07]";
const caption = "mt-5 max-w-2xl text-[15px] leading-relaxed text-[var(--qb-muted)]";

// Display height of the trimmed horizontal PNG. The art fills 234 of its 288px,
// the symbol's cut-out square is 0.363 of the art height, and the file already
// carries a 4% margin, so the box padding is x minus that margin.
const CS_H = 88;
const CS_ART = (CS_H * 234) / 288;
const CS_X = Math.round(CS_ART * 0.363);
const CS_PAD = CS_X - Math.round((CS_H * 29) / 288);

export default function BrandPage() {
  return (
    <div className={`${poppins.variable} font-body min-h-screen`}>
      <header className="mx-auto max-w-6xl px-6 pt-8">
        <Link href="/" aria-label="QuillaBlocks, inicio" className="inline-block">
          <Image src="/quillablocks-logo.png" alt="" width={44} height={44} priority />
        </Link>
      </header>

      <section className="mx-auto max-w-6xl px-6 pb-16 pt-14 sm:pt-20">
        <p className="animate-in delay-1 mb-4 text-sm font-semibold text-brand-yellow">Prensa, aliados y comunidad</p>
        <h1 className="animate-in delay-2 font-heading mb-5 max-w-3xl text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl">
          Kit de marca
        </h1>
        <p className="animate-in delay-3 max-w-2xl text-lg leading-relaxed">
          Logos, colores y textos de QuillaBlocks. Úsalos libremente para hablar de
          nosotros; las reglas están al final de la página.
        </p>
        <div aria-hidden className="animate-in delay-5 mt-14 h-2 max-w-md rounded-full rounded-bl-none" style={{ background: GRADIENT }} />
        <nav aria-label="Secciones" className="animate-in delay-6 mt-10">
          <ol className="grid grid-cols-2 gap-x-6 sm:grid-cols-3 lg:grid-cols-5">
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="flex items-baseline gap-3 border-t border-[var(--qb-border)] py-3 text-[15px] font-medium transition-colors hover:text-white"
                >
                  <span className="font-mono text-xs text-brand-yellow">{num(s.id)}</span>
                  {s.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </section>

      <main className="mx-auto max-w-6xl px-6 [&>section]:scroll-mt-6 [&>section]:border-t [&>section]:border-[var(--qb-border)] [&>section]:py-20">
        <section id="logo">
          <Heading id="logo" title="Un símbolo y un nombre">
            <p>
              El logo es una Q construida con un bloque: Quilla por Barranquilla, el bloque por blockchain y la
              ventana cuadrada como nuestra ventana al mundo. El símbolo y el nombre se pueden usar juntos o el
              símbolo solo.
            </p>
          </Heading>
          <LogoTabs />
          <p className={caption}>
            Usa la versión horizontal por defecto y la vertical en espacios cuadrados. Para piezas a una sola tinta,
            descarga el SVG en blanco, negro o gris. Las versiones a color solo existen en PNG.
          </p>
        </section>

        <section id="espacio">
          <Heading id="espacio" title="Dale aire">
            <p>
              Alrededor del logo deja libre un espacio igual a la altura del cuadrado interior del símbolo. Nada
              entra en ese margen: ni textos, ni otros logos, ni el borde de la pieza.
            </p>
          </Heading>
          <div className="grid gap-4 lg:grid-cols-[3fr_2fr]">
            <div className={`${card} flex items-center justify-center bg-brand-midnight px-6 py-14`}>
              <div className="relative border border-dashed border-white/40" style={{ padding: CS_PAD }}>
                {(["left-0 top-0", "right-0 top-0", "left-0 bottom-0", "right-0 bottom-0"] as const).map((pos) => (
                  <span
                    key={pos}
                    aria-hidden
                    className={`absolute ${pos} flex items-center justify-center bg-brand-teal/25 font-mono text-[11px] text-white/80`}
                    style={{ width: CS_X, height: CS_X }}
                  >
                    x
                  </span>
                ))}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/brand/logo/quillablocks-horizontal-color-on-dark.png"
                  alt="Logo QuillaBlocks con su zona de protección"
                  style={{ height: CS_H }}
                  className="relative max-w-full"
                />
              </div>
            </div>
            <div className={`${card} p-6`}>
              <p className="mb-5 text-base font-bold text-white">Tamaño mínimo</p>
              <dl className="space-y-4 text-[15px]">
                {[
                  ["Horizontal, impreso", "2 a 2,5 cm de ancho"],
                  ["Vertical, impreso", "1 a 1,5 cm de ancho"],
                  ["En pantalla", "Que el nombre se lea con claridad. Si no cabe, usa el símbolo solo."],
                  ["Símbolo", "Funciona hasta tamaño favicon"],
                ].map(([k, v]) => (
                  <div key={k} className="border-t border-[var(--qb-border)] pt-3">
                    <dt className="text-[var(--qb-muted)]">{k}</dt>
                    <dd className="text-white">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section id="color">
          <Heading id="color" title="Paleta de colores">
            <p>
              Cuatro colores vivos, inspirados en el Caribe, sobre un fondo azul oscuro que mantiene la marca seria y
              tecnológica. El azul oscuro domina; los otros cuatro se usan para destacar. Haz clic en un
              color para copiar su HEX.
            </p>
          </Heading>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {COLORS.map((c) => (
              <Swatch key={c.hex} {...c} />
            ))}
          </div>

          <div className={`${card} mt-4`}>
            <div className="h-28" style={{ background: GRADIENT }} />
            <div className="flex flex-wrap items-center justify-between gap-3 p-4">
              <span>
                <span className="block text-base font-bold text-white">Degradado de marca</span>
                <span className="block text-sm text-[var(--qb-muted)]">
                  Rojo, naranja, amarillo y turquesa. Es parte de la identidad y se puede usar en elementos de apoyo.
                </span>
              </span>
              <CopyButton text={`background: ${GRADIENT};`} label="Copiar CSS" />
            </div>
          </div>

          <h3 className="font-heading mb-4 mt-14 text-2xl font-bold text-white">Combinaciones con buen contraste</h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {PAIRS.map((p) => (
              <div
                key={p.label}
                className="relative flex aspect-square flex-col justify-between rounded-[20px] rounded-bl-none p-4 ring-1 ring-white/[0.07]"
                style={{ background: p.bg, color: p.fg }}
              >
                <span className="font-heading text-4xl font-extrabold">Aa</span>
                <span>
                  <span className="flex items-center gap-1.5 font-mono text-xs font-semibold">
                    {p.fail ? <FaXmark aria-hidden /> : <FaCheck aria-hidden />}
                    {p.ratio}
                  </span>
                  <span className="mt-1 block text-xs leading-snug">{p.label}</span>
                </span>
                {p.fail && (
                  <span className="absolute right-3 top-3 rounded-full bg-brand-red px-2 py-0.5 text-[11px] font-semibold text-white">
                    Evitar
                  </span>
                )}
              </div>
            ))}
          </div>
          <p className={caption}>
            Para texto normal se pide al menos 4,5:1. El rojo y el turquesa sobre azul oscuro funcionan en títulos
            grandes, no en texto pequeño. Los tokens están en{" "}
            <a href="/brand/tokens/colors.css" download className="text-white underline underline-offset-3">
              colors.css
            </a>{" "}
            y{" "}
            <a href="/brand/tokens/colors.json" download className="text-white underline underline-offset-3">
              colors.json
            </a>
            .
          </p>
        </section>

        <section id="descripcion">
          <Heading id="descripcion" title="Cómo hablar de nosotros">
            <p>
              Se escribe <strong className="font-semibold text-white">QuillaBlocks</strong>, en una sola palabra y
              con la Q y la B en mayúscula.
            </p>
          </Heading>
          <div className="grid gap-4 lg:grid-cols-2">
            {COPY.map((c) => (
              <blockquote key={c.name} className={`${card} p-6`}>
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="flex items-center gap-2 text-sm font-semibold text-white">
                    <span className="rounded-full bg-white/[0.07] px-2 py-0.5 font-mono text-[11px]">{c.lang}</span>
                    {c.name}
                  </span>
                  <CopyButton text={c.text} />
                </div>
                <p className="text-base leading-relaxed text-white/90">{c.text}</p>
              </blockquote>
            ))}
          </div>
        </section>

        <section id="usos">
          <Heading id="usos" title="Lo que no se hace">
            <p>El logo se usa siempre tal como viene en los archivos.</p>
          </Heading>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
            {MISUSE.map((m) => (
              <figure key={m.label} className={card}>
                <div
                  className="relative flex h-36 items-center justify-center overflow-hidden px-4 sm:h-44"
                  style={{ background: m.stage ?? "#121329" }}
                >
                  {m.extra === "crowd" ? (
                    <span className="flex items-center gap-1">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/brand/logo/quillablocks-horizontal-color-on-dark.png" alt="" className="h-10 sm:h-12" />
                      <span className="font-heading -ml-2 text-xs font-bold leading-tight text-white sm:text-sm">
                        ¡Gran
                        <br />
                        meetup!
                      </span>
                    </span>
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src="/brand/logo/quillablocks-horizontal-color-on-dark.png"
                      alt=""
                      className="h-10 sm:h-12"
                      style={m.style}
                    />
                  )}
                  <span className="absolute left-3 top-3 flex h-6 w-6 items-center justify-center rounded-full bg-brand-red text-white">
                    <FaXmark size={12} aria-hidden />
                  </span>
                </div>
                <figcaption className="p-4 text-[15px] font-semibold text-white">{m.label}</figcaption>
              </figure>
            ))}
          </div>
          <p className={caption}>
            Tampoco cambies el orden del símbolo y el nombre, ni la proporción entre ellos. Si el fondo se parece a
            los colores del logo, usa la versión blanca, la negra o la que ya trae fondo azul oscuro.
          </p>
        </section>

        <section id="reglas">
          <Heading id="reglas" title="Qué puedes hacer con esto" />
          <div className="grid gap-4 md:grid-cols-2">
            <div className={`${card} p-6`}>
              <p className="mb-4 text-base font-bold text-white">Sí</p>
              <ul className="space-y-3">
                {ALLOWED.map((r) => (
                  <li key={r} className="flex gap-3 text-[15px] leading-snug">
                    <FaCheck className="mt-1 shrink-0 text-brand-teal" aria-hidden />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
            <div className={`${card} p-6`}>
              <p className="mb-4 text-base font-bold text-white">No</p>
              <ul className="space-y-3">
                {FORBIDDEN.map((r) => (
                  <li key={r} className="flex gap-3 text-[15px] leading-snug">
                    <FaXmark className="mt-1 shrink-0 text-brand-red" aria-hidden />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className={caption}>
            ¿Necesitas algo que no está aquí o tienes una duda? Escríbenos por{" "}
            <a href="https://instagram.com/quillablocks" target="_blank" rel="noopener noreferrer" className="text-white underline underline-offset-3">
              Instagram
            </a>{" "}
            o{" "}
            <a href="https://x.com/QuillaBlocks" target="_blank" rel="noopener noreferrer" className="text-white underline underline-offset-3">
              X
            </a>
            .
          </p>
        </section>
      </main>

      <footer className="mx-auto max-w-6xl px-6">
        <div
          className="flex items-center justify-between py-8 text-sm"
          style={{ color: "var(--qb-muted)", borderTop: "1px solid var(--qb-border)" }}
        >
          <p>© {new Date().toLocaleDateString("es-CO", { timeZone: "America/Bogota", year: "numeric" })} QuillaBlocks</p>
          <p>Barranquilla, Colombia</p>
        </div>
      </footer>
    </div>
  );
}
