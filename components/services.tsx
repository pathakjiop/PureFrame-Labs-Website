export default function Services() {
  const services = [
    {
      number: "01",
      title: "Business Analytics",
      description:
        "Transform raw data into actionable insights that drive strategic decision-making and competitive advantage.",
    },
    {
      number: "02",
      title: "Process Optimization",
      description:
        "Streamline operations and maximize efficiency through systematic analysis and intelligent automation strategies.",
    },
    {
  number: "03",
  title: "Real Estate Intelligence",
  description:
    "Leverage property and market data to uncover trends, assess risks, and identify high-value opportunities.",
  },
    {
      number: "04",
      title: "Performance Analytics",
      description:
        "Monitor, measure, and optimize key performance indicators with real-time dashboards and predictive models.",
    },
  ]

  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Our Services</h2>
          <p className="text-foreground/60 text-lg max-w-2xl">
            Tailored consulting solutions that leverage data and insights to discover the best match for your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.number} className="group relative">
              <div className="absolute inset-0 bg-linear-to-br from-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
              <div className="relative p-8 border border-border rounded-lg hover:border-foreground/20 transition-colors">
                <div className="text-4xl font-bold text-foreground/10 mb-4">{service.number}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-foreground/60 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
