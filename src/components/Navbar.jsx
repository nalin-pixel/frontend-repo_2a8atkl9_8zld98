import { Menu, Phone } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-blue-600 text-white grid place-items-center font-bold">TP</div>
          <span className="text-xl font-semibold tracking-tight text-gray-900">TaxPro</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
          <a href="#process" className="hover:text-blue-600 transition-colors">Process</a>
          <a href="#testimonials" className="hover:text-blue-600 transition-colors">Testimonials</a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700 transition-colors">
            <Phone size={16} /> Book a call
          </a>
        </div>
        <button className="md:hidden p-2 rounded-lg hover:bg-gray-100" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
          <Menu />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="max-w-6xl mx-auto px-4 py-3 grid gap-3 text-sm">
            <a href="#services" className="py-2" onClick={() => setOpen(false)}>Services</a>
            <a href="#process" className="py-2" onClick={() => setOpen(false)}>Process</a>
            <a href="#testimonials" className="py-2" onClick={() => setOpen(false)}>Testimonials</a>
            <a href="#contact" className="py-2" onClick={() => setOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}
