import { BadgeCheck, Clock, HeartHandshake, TruckIcon } from "lucide-react"

export default function CustomerSatisfaction() {
  const benefits = [
    {
      icon: <BadgeCheck className="h-10 w-10 text-primary" />,
      title: "Exceptional Quality",
      description: "Our products meet the highest industry standards for quality and performance.",
    },
    {
      icon: <TruckIcon className="h-10 w-10 text-primary" />,
      title: "Timely Deliveries",
      description: "We ensure your materials arrive on schedule to keep your projects on track.",
    },
    {
      icon: <HeartHandshake className="h-10 w-10 text-primary" />,
      title: "Unparalleled Support",
      description: "Our team of experts is always ready to provide guidance and assistance.",
    },
    // {
    //   icon: <Clock className="h-10 w-10 text-primary" />,
    //   title: "Reliable Service",
    //   description: "Count on us for consistent, dependable service for all your building material needs.",
    // },
  ]

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Customer Satisfaction</h2>
          {/* <p className="mx-auto max-w-2xl text-muted-foreground">
            With a strong focus on customer satisfaction, we strive to provide timely deliveries, exceptional quality
            and unparalleled support. Discover the Ecomax difference and experience the benefits of working with a
            leading partner in the building industry.
          </p> */}
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="rounded-lg bg-background p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="mb-2 text-xl font-semibold">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

