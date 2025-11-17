import { FileText, Briefcase, ShieldCheck, PieChart, Building2, Users } from "lucide-react";

const services = [
  { icon: FileText, title: "Tax Preparation", desc: "Accurate, on-time federal and state filings for individuals and businesses." },
  { icon: Briefcase, title: "Business Tax", desc: "Entity selection, quarterly estimates, and compliance for S-corps, C-corps, and partnerships." },
  { icon: ShieldCheck, title: "Tax Planning", desc: "Proactive strategies to minimize liability and align with your goals." },
  { icon: PieChart, title: "Bookkeeping", desc: "Clean books and reconciliations to keep your financials audit-ready." },
  { icon: Building2, title: "Payroll & Sales Tax", desc: "Full-service payroll setup, filings, and sales tax compliance across states." },
  { icon: Users, title: "Advisory", desc: "On-demand CFO and advisory support tailored to your firm’s needs." },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Services</h2>
          <p className="mt-3 text-gray-600">Built for tax professionals who value speed, accuracy, and peace of mind.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-gray-200 p-6 hover:shadow-sm transition-shadow">
              <div className="h-10 w-10 grid place-items-center rounded-lg bg-blue-600 text-white mb-4">
                <Icon size={20} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
