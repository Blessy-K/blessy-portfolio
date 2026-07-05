import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Certificates from "./components/sections/Certificates";
function App() {
  return (
    <main className="bg-[#09090B] text-white">
      <Navbar />

      <Hero />

<Projects />

<Skills />

<Certificates />

<About />
    </main>
  );
}

export default App;