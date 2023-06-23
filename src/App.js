import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Social from "./components/Social";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="bg-gradient-to-r from-orange-600 to-yellow-400 top-0 left-0">
      <Navbar />
      <Home />
      <Social />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
