import Image from "next/image";
import { FaGithub, FaInstagram, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

const socials = [
  { href: "https://github.com/QuillaBlocks", label: "GitHub", icon: FaGithub },
  { href: "https://instagram.com/quillablocks", label: "Instagram", icon: FaInstagram },
  { href: "https://x.com/QuillaBlocks", label: "X", icon: FaXTwitter },
  { href: "https://linkedin.com/company/quillablocks", label: "LinkedIn", icon: FaLinkedinIn },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main content */}
      <main className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="max-w-xl w-full">
          {/* Logo */}
          <div className="animate-in delay-1 mb-10">
            <Image
              src="/quillablocks-logo-cropped.png"
              alt="QuillaBlocks"
              width={80}
              height={80}
              priority
            />
          </div>

          {/* Name */}
          <h1
            className="animate-in delay-2 text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.1] mb-3"
            style={{ color: "var(--qb-white)" }}
          >
            QuillaBlocks
          </h1>

          {/* Tagline */}
          <p
            className="animate-in delay-2 text-lg font-medium mb-5"
            style={{ color: "var(--qb-muted)" }}
          >
            La comunidad Web3 de Barranquilla, Colombia
          </p>

          {/* Description */}
          <p className="animate-in delay-3 text-lg mb-10 max-w-md">
            Conectamos a entusiastas, desarrolladores y emprendedores para
            aprender, construir y crecer juntos en el ecosistema blockchain.
          </p>

          {/* CTA */}
          <div className="animate-in delay-4 mb-10">
            <a
              href="https://chat.whatsapp.com/EzY1yMk8SoS3qgRSKDuPON"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:brightness-110"
              style={{
                background: "var(--qb-teal)",
                color: "var(--qb-navy)",
              }}
            >
              Únete a la comunidad
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Socials */}
          <div className="animate-in delay-5 flex items-center gap-5">
            {socials.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="social-icon"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer
        className="animate-in delay-6 px-6 py-8 text-xs flex items-center justify-between"
        style={{ color: "var(--qb-muted)", borderTop: "1px solid var(--qb-border)" }}
      >
        <p>© {new Date().toLocaleDateString("es-CO", { timeZone: "America/Bogota", year: "numeric" })} QuillaBlocks</p>
        <p>Barranquilla, Colombia</p>
      </footer>
    </div>
  );
}
