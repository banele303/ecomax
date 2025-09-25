import Hero from "@/components/hero"
import Sustainability from "@/components/sustainability"
import CustomerSatisfaction from "@/components/customer-satisfaction"
import Testimonials from "@/components/testimonials"
import Projects from "@/components/projects"
import Faq from "@/components/faq"

import CTA from "@/components/cta"
import Footer from "@/components/footer"
import Link from "next/link";
import ContactButtons from "@/components/contact-buttons"
export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ContactButtons/>
      <Sustainability />
      <Projects />
      <CustomerSatisfaction />
      <Testimonials />
      <Faq />
      {/* <BlogPreview /> */}
      <CTA />
   

      <Footer />
    </main>
  )
}

