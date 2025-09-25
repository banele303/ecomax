import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Faq() {
  const faqs = [
    {
      question: "What makes Ecomax building materials different from competitors?",
      answer:
        "Ecomax stands out through our commitment to sustainability, rigorous quality control, and innovative manufacturing processes. Our materials undergo extensive testing to ensure they exceed industry standards for durability, strength, and environmental performance. Additionally, we source materials locally when possible to reduce our carbon footprint and support local economies.",
    },
    {
      question: "Do you offer custom solutions for specific project requirements?",
      answer:
        "Yes, we specialize in creating custom building material solutions tailored to your project's unique specifications. Our team of engineers and material scientists can work with you to develop custom concrete mixes, specialized brick formulations, or steel components that meet your exact requirements for performance, aesthetics, and sustainability.",
    },
    {
      question: "What sustainability certifications do your products have?",
      answer:
        "Our products are certified by leading sustainability organizations including LEED, GreenGuard, and Cradle to Cradle. We regularly undergo third-party verification to ensure our manufacturing processes and materials meet the highest standards for environmental responsibility, resource efficiency, and indoor air quality.",
    },
    {
      question: "Can you handle large-scale commercial projects?",
      answer:
        "Absolutely. We have extensive experience supplying materials for large commercial developments, infrastructure projects, and multi-unit residential complexes. Our production capacity, logistics network, and project management expertise allow us to reliably fulfill large orders with consistent quality and on-time delivery.",
    },
    {
      question: "What is your delivery timeframe for standard orders?",
      answer:
        "Standard delivery timeframes vary by product and quantity, but typically range from 3-10 business days. For custom orders, lead times are determined during the consultation process. We pride ourselves on reliable logistics and can provide expedited shipping options when needed for time-sensitive projects.",
    },
    {
      question: "Do you provide technical support for your products?",
      answer:
        "Yes, our team of technical experts is available to provide comprehensive support throughout your project. From material selection and specification assistance to installation guidance and troubleshooting, we ensure you have the knowledge and resources needed to use our products effectively and achieve optimal results.",
    },
  ]

  return (
    <section id="faq" className="py-20 bg-muted/50">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Frequently Asked Questions</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Find answers to common questions about our products, services, and processes. If you don't see your question
            here, please contact our support team.
          </p>
        </div>
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

