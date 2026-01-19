export default function CTA() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-muted/50 border border-border rounded-lg p-12 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Ready to transform your business?</h2>
          <p className="text-foreground/60 text-lg mb-12 max-w-2xl mx-auto">
            Let's discuss how data-driven insights can unlock new opportunities and drive measurable growth.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            <div className="flex flex-col items-center">
              <p className="text-sm text-foreground/50 mb-2">Email</p>
              <a
                href="mailto:pureframelabs@gmail.com"
                className="text-md font-semibold text-foreground hover:text-foreground/80 transition-colors"
              >
                pureframelabs@gmail.com
              </a>
            </div>

            <div className="hidden md:block w-px h-12 bg-border"></div>

            <div className="flex flex-col items-center">
              <p className="text-sm text-foreground/50 mb-2">Phone</p>
              <a
                href="tel:+91 9529988048 "
                className="text-md font-semibold text-foreground hover:text-foreground/80 transition-colors"
              >
                +91 9529988048 
              </a>
            </div>

            <div className="hidden md:block w-px h-12 bg-border"></div>

            <div className="flex flex-col items-center">
              <p className="text-sm text-foreground/50 mb-2">Address</p>
              <p className="text-md font-semibold text-foreground">
                Talao Road, Shriram Nagar, Khamgaon<br></br>PinCode-444203, Maharashtra
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
