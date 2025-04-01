import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "Greenview Residential Towers",
      description:
        "A sustainable residential complex featuring our eco-friendly bricks and energy-efficient design.",
      image: "/bb.jpg",
      location: "San Francisco, CA",
      year: "2023",
    },
    // },
    // {
    //   title: "Central Business District Office Complex",
    //   description:
    //     "A modern office complex utilizing our high-strength steel and custom concrete solutions.",
    //   image: "/bb3.jpg",
    //   location: "Chicago, IL",
    //   year: "2022",
    // },
    // {
    //   title: "Riverside Bridge Reconstruction",
    //   description:
    //     "A critical infrastructure project showcasing our durable concrete and weather-resistant materials.",
    //   image: "/bb1.jpg",
    //   location: "Portland, OR",
    //   year: "2024",
    // },
  ];

  return (
    <section className="py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Featured Projects
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Our materials have been used in some of the most innovative and
            sustainable construction projects across the country. Here are some
            highlights from our portfolio.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>
                  {project.location} | {project.year}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="p-0 hover:bg-transparent">
                  View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button size="lg">
            <Link href="tel:+27 76 223 2914">Call Now</Link>
            Call Us Now
          </Button>
        </div>
      </div>
    </section>
  );
}
