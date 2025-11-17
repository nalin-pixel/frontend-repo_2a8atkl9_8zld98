export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.08),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(15,23,42,0.05),transparent_50%)]" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-blue-50 text-blue-700 ring-1 ring-blue-100">Trusted by firms nationwide</span>
            <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Modern tax solutions for busy professionals
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              We help CPAs and tax firms streamline compliance, reduce risk, and deliver advisory services with confidence.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex justify-center items-center rounded-lg bg-blue-600 px-5 py-3 text-white font-semibold hover:bg-blue-700 transition-colors">Get a consultation</a>
              <a href="#services" className="inline-flex justify-center items-center rounded-lg border border-gray-300 px-5 py-3 text-gray-900 font-semibold hover:bg-gray-50 transition-colors">Explore services</a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-gray-600">
              <div>
                <div className="font-semibold text-gray-900">24h</div>
                <div>Response time</div>
              </div>
              <div>
                <div className="font-semibold text-gray-900">99.9%</div>
                <div>On-time filings</div>
              </div>
              <div>
                <div className="font-semibold text-gray-900">A+</div>
                <div>Client rating</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 p-2">
              <div className="w-full h-full rounded-xl bg-white p-6 grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-gray-50 border border-gray-200" />
                <div className="rounded-lg bg-gray-50 border border-gray-200" />
                <div className="rounded-lg bg-gray-50 border border-gray-200" />
                <div className="rounded-lg bg-gray-50 border border-gray-200" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
