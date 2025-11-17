import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState(null);

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("Sending...");

    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000";
      const res = await fetch(`${baseUrl}/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || "Submission failed");
      setStatus("Thanks! We’ll be in touch within 24 hours.");
      e.currentTarget.reset();
    } catch (err) {
      setStatus(err.message || "Something went wrong.");
    }
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Get a consultation</h2>
          <p className="mt-3 text-gray-600">Tell us about your needs and we’ll reach out quickly.</p>
        </div>
        <form onSubmit={onSubmit} className="mt-10 grid gap-4 max-w-2xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="name" required placeholder="Full name" className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input name="email" required type="email" placeholder="Email" className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="company" placeholder="Company" className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input name="phone" placeholder="Phone" className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <select name="service" className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="" disabled selected>Service of interest</option>
            <option>Tax Preparation</option>
            <option>Business Tax</option>
            <option>Tax Planning</option>
            <option>Bookkeeping</option>
            <option>Payroll & Sales Tax</option>
            <option>Advisory</option>
          </select>
          <textarea name="message" rows="4" placeholder="Tell us about your needs" className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <button type="submit" className="rounded-lg bg-blue-600 px-5 py-3 text-white font-semibold hover:bg-blue-700 transition-colors">Send message</button>
          {status && <p className="text-sm text-gray-700">{status}</p>}
        </form>
      </div>
    </section>
  );
}
