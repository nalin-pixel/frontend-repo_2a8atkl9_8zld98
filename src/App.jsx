import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Process from "./components/Process";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Contact />
      </main>
      <footer className="border-t border-gray-200 py-10 text-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row gap-3 items-center justify-between">
          <p className="text-gray-600">© {new Date().getFullYear()} TaxPro. All rights reserved.</p>
          <div className="flex items-center gap-4 text-gray-600">
            <a href="#services" className="hover:text-blue-600">Services</a>
            <a href="#process" className="hover:text-blue-600">Process</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
