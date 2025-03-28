import Image from "next/image";
import { BrickWallIcon as Brick, ArrowRight, ShoppingCart } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function Products() {
  const bricks = [
    {
      name: "Clay Brick",
      price: "R2.30",
      image: "/clay-brick.jpeg",
      description:
        "Traditional clay brick with excellent thermal properties and classic appearance.",
      features: ["Durable", "Weather-resistant", "Classic appearance"],
      popular: false,
    },
    {
      name: "Stock Cement Brick",
      price: "R1.99",
      image: "/cement-brick.jpeg",
      description:
        "Economical cement brick suitable for a wide range of construction applications.",
      features: ["Cost-effective", "Consistent size", "Easy to work with"],
      popular: true,
    },
    {
      name: "Maxi Brick",
      price: "R3.95",
      image: "/cement-m-bricks.jpeg",
      description:
        "Larger format brick that speeds up construction and provides excellent structural integrity.",
      features: [
        "Faster wall construction",
        "Fewer mortar joints",
        "Strong and durable",
      ],
      popular: false,
    },
    {
      name: "M 135 Brick",
      price: "R8.50",
      image: "/140-Block.jpeg",
      description:
        "Premium quality brick with superior strength and finish for demanding applications.",
      features: [
        "High compressive strength",
        "Precise dimensions",
        "Premium finish",
      ],
      popular: false,
    },
    {
      name: "M 140 Brick",
      price: "R9.50",
      image: "/m190-Block.jpeg",
      description:
        "Our highest quality brick offering maximum strength and durability for critical structural elements.",
      features: [
        "Maximum strength",
        "Superior durability",
        "Excellent load-bearing capacity",
      ],
      popular: false,
    },
  ];

  return (
    <section id="products" className="py-20 bg-muted/50">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Our Brick Products
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            With our state-of-the-art production facility, we manufacture
            high-quality bricks for all your construction needs. From economical
            options to premium solutions, we have the perfect brick for your
            project.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {bricks.map((brick, index) => (
            <Card
              key={index}
              className="overflow-hidden flex flex-col h-full transition-all hover:shadow-lg"
            >
              <div className="relative pt-[75%] w-full">
                <Image
                  src={brick.image || "/placeholder.svg"}
                  alt={brick.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {brick.popular && (
                  <Badge className="absolute top-2 right-2 bg-primary">
                    Best Seller
                  </Badge>
                )}
              </div>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-xl">{brick.name}</CardTitle>
                  <span className="text-2xl font-bold text-primary">
                    {brick.price}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-4">
                  {brick.description}
                </p>
                <div>
                  <h4 className="font-medium mb-2">Features:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    {brick.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-background rounded-lg p-8 shadow-sm">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3">
              <Brick className="h-16 w-16 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-2">
                Bulk Orders & Special Pricing
              </h3>
              <p className="text-muted-foreground">
                Need a large quantity of bricks for your project? Contact us for
                special bulk pricing and delivery options.
              </p>
            </div>

            <div className="md:w-2/3 w-full">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Brick Type</th>
                      <th className="text-left py-3 px-4">Unit Price</th>
                      <th className="text-left py-3 px-4">
                        Bulk Price (1000+)
                      </th>
                      <th className="text-left py-3 px-4">
                        Bulk Price (5000+)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="py-3 px-4">Clay Brick</td>
                      <td className="py-3 px-4 font-medium">R2.30</td>
                      <td className="py-3 px-4">R2.15</td>
                      <td className="py-3 px-4">R1.99</td>
                    </tr>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="py-3 px-4">Stock Cement Brick</td>
                      <td className="py-3 px-4 font-medium">R1.99</td>
                      <td className="py-3 px-4">R1.85</td>
                      <td className="py-3 px-4">R1.70</td>
                    </tr>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="py-3 px-4">Maxi Brick</td>
                      <td className="py-3 px-4 font-medium">R3.95</td>
                      <td className="py-3 px-4">R3.75</td>
                      <td className="py-3 px-4">R3.50</td>
                    </tr>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="py-3 px-4">M 135 Brick</td>
                      <td className="py-3 px-4 font-medium">R8.50</td>
                      <td className="py-3 px-4">R8.20</td>
                      <td className="py-3 px-4">R7.95</td>
                    </tr>
                    <tr className="hover:bg-muted/50">
                      <td className="py-3 px-4">M 140 Brick</td>
                      <td className="py-3 px-4 font-medium">R9.50</td>
                      <td className="py-3 px-4">R9.15</td>
                      <td className="py-3 px-4">R8.85</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button size="lg">Request Bulk Quote</Button>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-4">
            Need Custom Brick Solutions?
          </h3>
          <p className="mx-auto max-w-2xl text-muted-foreground mb-6">
            Our engineering team can develop custom brick solutions tailored to
            your specific project requirements. From specialized finishes to
            custom dimensions, we have the expertise to meet your needs.
          </p>
          <Button size="lg">Contact Our Experts</Button>
        </div>
      </div>
    </section>
  );
}
