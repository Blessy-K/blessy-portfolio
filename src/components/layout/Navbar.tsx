import { Menu } from "lucide-react";
import { portfolio } from "../../data/portfolio";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#0A0A0A]/70 border-b border-white/5">
      <div className="max-w-7xl mx-auto h-20 px-8 flex items-center justify-between">

        <div>
          <h1 className="text-xl font-bold tracking-tight">
            {portfolio.name}
          </h1>

          <p className="text-xs text-zinc-500">
            Software Engineer
          </p>
        </div>

        <nav className="hidden md:flex items-center gap-10 text-sm">

          <a href="#projects" className="hover:text-blue-400 transition">
            Projects
          </a>

          <a href="#tech" className="hover:text-blue-400 transition">
            Tech Stack
          </a>

          <a href="#experience" className="hover:text-blue-400 transition">
            Journey
          </a>

          <a href="#certificates" className="hover:text-blue-400 transition">
            Certificates
          </a>

          <a href="#contact" className="hover:text-blue-400 transition">
            Contact
          </a>

        </nav>

        <button className="md:hidden">
          <Menu size={22}/>
        </button>

      </div>
    </header>
  );
}

export default Navbar;