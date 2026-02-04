
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Skills />
      <Projects />
     
<footer className="contact">
  <h2>Contact</h2>

  <div className="social-icons">
    <a
      href="mailto:Layal.Albahsani@outlook.com"
      target="_blank"
      rel="noopener noreferrer"
      className="social-icon"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
        alt="Email"
      />
    </a>
  </div>
</footer>

    </>
  );
}

export default App;
