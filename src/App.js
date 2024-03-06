import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import PackageSessions from "./components/PackageSessions";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Services />
      <PackageSessions />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
