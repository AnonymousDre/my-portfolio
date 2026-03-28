import Sidebar from "./Sidebar";
import Landing from "./Landing";
import About from "./About";
import Services from "./Services";
import Projects from "./Projects";
import Awards from "./Awards";
import FAQs from "./FAQs";

export default function Portfolio() {
  return (
    <div className="app-layout">
      <Sidebar />
      <main className="app-content">
        <div className="landing">
          <Landing />
          <About />
          {/* <Services /> */}
          <Projects />
          <Awards />
          <FAQs />
        </div>
      </main>
    </div>
  );
}
