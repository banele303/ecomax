import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function CTA() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Start Your Next Project?</h2>
          <p className="mb-8 text-primary-foreground/90">
            Partner with Ecomax Manufacturing for high-quality building materials that deliver exceptional performance,
            sustainability, and value. Contact us today to discuss your project requirements or subscribe to our
            newsletter for industry updates.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" variant="secondary">
              Request a Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
            >
              Schedule Consultation
            </Button>
          </div>
          <div className="mt-10">
            <h3 className="mb-4 text-xl font-semibold">Subscribe to Our Newsletter</h3>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button variant="secondary">Subscribe</Button>
            </div>
            <p className="mt-2 text-xs text-primary-foreground/70">
              By subscribing, you agree to receive marketing communications from Ecomax. You can unsubscribe at any
              time.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

