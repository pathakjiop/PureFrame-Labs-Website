export default function Approach() {
  const steps = [
  {
    step: "Understand",
    description: "We get to know your needs, preferences, and goals to create the right solution for you.",
  },
  {
    step: "Analyze",
    description: "We study relevant data and insights to identify patterns and opportunities that matter to you.",
  },
  {
    step: "Plan",
    description: "We design a clear, easy-to-follow plan tailored to deliver the best possible results.",
  },
  {
    step: "Deliver",
    description: "We bring the solution to life smoothly, keeping the experience simple and hassle-free.",
  },
]


  return (
    <section id="approach" className="py-24 md:py-32 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Our Approach</h2>
          <p className="text-foreground/60 text-lg max-w-2xl">
            A methodical framework that ensures alignment, clarity, and exceptional results at every stage.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((item, index) => (
            <div key={index} className="flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-foreground text-background rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                {/* {index < steps.length - 1 && (
                  <div className="hidden md:block absolute w-12 h-0.5 bg-border translate-x-10" />
                )} */}
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.step}</h3>
              <p className="text-foreground/60 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
