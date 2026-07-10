import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

import Container from "../ui/Container";

const links = [
  { label: "Work", to: "/#work" },
  { label: "About", to: "/#about" },
  { label: "Skills", to: "/#skills" },
  { label: "Certificates", to: "/certificates" },
  { label: "Contact", to: "/#contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-4 z-50">
      <Container>
        <div className="flex h-[72px] items-center justify-between rounded-2xl border border-zinc-200 bg-white/85 px-7 shadow-md backdrop-blur-2xl">

          {/* Logo */}
          <Link to="/" className="text-xl font-bold tracking-tight">
            <span className="text-[#0F172A]">Blessy</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.to}
                className="relative text-sm font-medium text-zinc-600 transition-all duration-300 hover:text-[#0F172A] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Resume Button */}
          <a
  href="/Resume/Blessy_Kondaboina_SoftwareEngineer.pdf"
  target="_blank"
  rel="noreferrer"
  className="hidden md:inline-flex rounded-2xl bg-[#0F172A] px-5 py-2.5 text-sm font-medium !text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1E293B]"
>
  Resume
</a>

          {/* Mobile Menu */}
          <button
            onClick={() => setOpen(!open)}
            className="rounded-2xl p-2 transition hover:bg-zinc-100 md:hidden"
            aria-label="Toggle navigation"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </Container>

      {/* Mobile Navigation */}
      {open && (
        <div className="mt-3 md:hidden">
          <Container>
            <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-lg">

              <nav className="flex flex-col gap-2">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.to}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl px-4 py-3 text-zinc-700 transition hover:bg-zinc-100 hover:text-[#0F172A]"
                  >
                    {link.label}
                  </a>
                ))}

                <a
                  href="/Resume/Blessy_Kondaboina_SoftwareEngineer.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 rounded-2xl bg-[#0F172A] px-4 py-3 text-center text-sm font-medium text-white transition hover:bg-[#1E293B]"
                >
                  Resume
                </a>
              </nav>

            </div>
          </Container>
        </div>
      )}
    </header>
  );
}

export default Navbar;