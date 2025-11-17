export default function Process() {
  const steps = [
    { title: "Discovery", desc: "We understand your goals, deadlines, and tech stack." },
    { title: "Onboarding", desc: "Secure document intake and entity review." },
    { title: "Execution", desc: "Hands-on prep, planning, and compliance." },
    { title: "Review", desc: "Senior review, sign-off, and delivery." },
  ];

  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">How we work</h2>
          <p className="mt-3 text-gray-600">Simple, transparent, and efficient—built for busy professionals.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="relative rounded-xl border border-gray-200 bg-white p-6">
              <div className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-blue-600 text-white grid place-items-center text-sm font-bold">{i + 1}</div>
              <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
