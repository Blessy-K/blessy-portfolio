import Navbar from "../components/layout/Navbar";
import About from "../components/sections/About";
import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";
import Contact from "../components/sections/Contact";
function Home() {
  return (
    <>
      <Navbar />
<Hero />
<About />
<Skills />
<Projects />
<Contact />
    </>
  );
}

export default Home;