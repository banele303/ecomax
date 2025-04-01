import Image from "next/image"
import { Leaf, Lightbulb, Recycle, Award, Factory } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export default function Sustainability() {
  const features = [
    {
      icon: <Leaf className="h-10 w-10 text-green-500" />,
      title: "Eco-Friendly Materials",
      description: "We use environmentally friendly materials to minimize our ecological footprint.",
    },
    {
      icon: <Recycle className="h-10 w-10 text-green-500" />,
      title: "Sustainable Practices",
      description: "Our manufacturing processes are designed to reduce waste and conserve resources.",
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-green-500" />,
      title: "Innovative Solutions",
      description: "We continuously research and develop new ways to improve our products and processes.",
    },
  ]

  const sustainabilityMetrics = [
    { label: "Recycled Content in Products", value: 35, target: "40% by 2025" },
    { label: "Reduction in Carbon Emissions", value: 28, target: "50% by 2030" },
    { label: "Water Conservation", value: 45, target: "60% by 2025" },
    { label: "Waste Reduction", value: 52, target: "75% by 2030" },
  ]

  const certifications = [
    { name: "LEED Certified", icon: <Award className="h-6 w-6" /> },
    { name: "ISO 14001", icon: <Factory className="h-6 w-6" /> },
    { name: "Cradle to Cradle", icon: <Recycle className="h-6 w-6" /> },
    { name: "Energy Star Partner", icon: <Lightbulb className="h-6 w-6" /> },
  ]

  return (
    <section id="sustainability" className="py-20">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            {/* <h2 className="mb-4 text-3xl font-bold md:text-4xl">Sustainability and Innovation</h2>
            <p className="mb-8 text-muted-foreground">
              We prioritize sustainability, using environmentally friendly practices and locally sourced materials to
              minimize our ecological footprint. Our focus on innovation ensures that our products and services stay
              ahead of the curve.
            </p> */}
            <div className="grid gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="mt-1 shrink-0">{feature.icon}</div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/mechanical1.jpg"
              alt="Sustainable manufacturing"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-16">
          {/* <h3 className="text-2xl font-bold mb-6 text-center">Our Sustainability Commitment</h3> */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* <div>
              <h4 className="text-xl font-semibold mb-4">Environmental Impact Reduction</h4>
              <p className="text-muted-foreground mb-6">
                We're committed to reducing our environmental impact across all operations. Our comprehensive
                sustainability program includes targets for reducing carbon emissions, water usage, and waste generation
                while increasing recycled content in our products.
              </p>

              <div className="space-y-6">
                {sustainabilityMetrics.map((metric, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{metric.label}</span>
                      <span className="text-sm text-muted-foreground">Target: {metric.target}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Progress value={metric.value} className="h-2" />
                      <span className="text-sm font-medium">{metric.value}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div> */}

            <div>
              <h4 className="text-xl font-semibold mb-4">Sustainable Innovation</h4>
              <p className="text-muted-foreground mb-6">
                Our research and development team is dedicated to creating innovative building materials that reduce
                environmental impact without compromising on quality or performance. Recent innovations include:
              </p>

              <ul className="space-y-3 list-disc pl-5 mb-8">
                <li>Low-carbon concrete formulations that reduce CO2 emissions by up to 30%</li>
                <li>Bricks manufactured with up to 40% recycled material content</li>
                <li>Energy-efficient manufacturing processes that reduce power consumption by 25%</li>
                <li>Water recycling systems that reuse up to 80% of process water</li>
                <li>Biodegradable packaging solutions for shipping and storage</li>
              </ul>

              <h4 className="text-xl font-semibold mb-4">Certifications</h4>
              <div className="grid grid-cols-2 gap-4">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-3 border rounded-md">
                    <div className="text-primary">{cert.icon}</div>
                    <span className="font-medium">{cert.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

