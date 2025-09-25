import Image from "next/image";
import { ArrowLeft, Users, Target, Award, Calendar, MapPin, Phone, Mail, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Footer from "@/components/footer";

export default function AboutPage() {
  const milestones = [
    {
      year: "2010",
      title: "Company Founded",
      description: "Started as a small family business with a vision to provide quality construction materials."
    },
    {
      year: "2015",
      title: "First Manufacturing Plant",
      description: "Opened our first state-of-the-art brick manufacturing facility."
    },
    {
      year: "2018",
      title: "Expanded Product Line",
      description: "Added galvanised fencing solutions to our product portfolio."
    },
    {
      year: "2020",
      title: "Regional Expansion",
      description: "Extended our reach across multiple provinces with new distribution centers."
    },
    {
      year: "2023",
      title: "Sustainability Initiative",
      description: "Launched our eco-friendly production processes and carbon-neutral goals."
    },
    {
      year: "2024",
      title: "Innovation Hub",
      description: "Established R&D center for next-generation construction materials."
    }
  ];

  const values = [
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We maintain the highest standards in every product we manufacture, ensuring consistent quality and reliability."
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Our customers are at the heart of everything we do. We build lasting relationships through exceptional service."
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Continuously improving our processes and developing new solutions to meet evolving construction needs."
    },
    {
      icon: Building2,
      title: "Sustainability",
      description: "Committed to environmentally responsible manufacturing and contributing to sustainable construction practices."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container">
          <div className="mb-8">
            <Button variant="ghost" asChild className="mb-4">
              <Link href="/" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="mb-6 text-4xl font-bold md:text-6xl">
                About Ecomax
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                For over a decade, Ecomax has been at the forefront of construction materials 
                manufacturing, providing high-quality bricks and fencing solutions that build 
                the foundation of communities across South Africa.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">10+</div>
                  <div className="text-sm text-muted-foreground">Years of Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50M+</div>
                  <div className="text-sm text-muted-foreground">Bricks Produced</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Happy Customers</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src="/construction3.webp"
                  alt="Ecomax facility"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Story</h2>
              <p className="text-lg text-muted-foreground">
                From humble beginnings to industry leadership
              </p>
            </div>

            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">The Beginning</h3>
                  <p className="text-muted-foreground mb-4">
                    Founded in 2010 by Michael Ramadi, Ecomax started with a simple mission: 
                    to provide high-quality construction materials that builders could trust. 
                    What began as a small operation has grown into one of the region's most 
                    respected manufacturers.
                  </p>
                  <p className="text-muted-foreground">
                    Our commitment to quality, innovation, and customer service has been the 
                    driving force behind our growth and success in the competitive construction 
                    materials market.
                  </p>
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/mechanical1.jpg"
                    alt="Ecomax early days"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <Separator />

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1 relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/bb.jpg"
                    alt="Manufacturing process"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="text-2xl font-bold mb-4">Innovation & Growth</h3>
                  <p className="text-muted-foreground mb-4">
                    As we expanded, we invested heavily in modern manufacturing technology 
                    and sustainable production methods. Our state-of-the-art facilities now 
                    produce millions of bricks annually while maintaining strict quality 
                    control standards.
                  </p>
                  <p className="text-muted-foreground">
                    In 2018, we diversified our product line to include galvanised clearview 
                    fencing, responding to market demand for comprehensive construction solutions 
                    from a single trusted supplier.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Journey</h2>
            <p className="text-lg text-muted-foreground">
              Key milestones in our company's growth and evolution
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-px h-16 bg-border mt-4"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant="secondary">{milestone.year}</Badge>
                      <h3 className="text-xl font-semibold">{milestone.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Values</h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Get In Touch</h2>
              <p className="text-lg text-muted-foreground">
                Ready to start your next project? We're here to help.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <MapPin className="h-5 w-5 text-primary" />
                    Visit Our Facility
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-1">Manufacturing Plant</h4>
                    <p className="text-muted-foreground text-sm">
                      123 Manufacturing Way<br />
                      Industrial District, City<br />
                      South Africa
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Business Hours</h4>
                    <p className="text-muted-foreground text-sm">
                      Monday - Friday: 7:00 AM - 5:00 PM<br />
                      Saturday: 8:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Phone className="h-5 w-5 text-primary" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-1">Main Office</h4>
                    <p className="text-muted-foreground text-sm">
                      Phone: +27 634 5828 860<br />
                      Email: info@ecomax-manufacturing.com
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Business Hours</h4>
                    <p className="text-muted-foreground text-sm">
                      Monday - Friday: 7:00 AM - 5:00 PM<br />
                      Saturday: 8:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                  <div className="pt-4">
                    <Button className="w-full">
                      <Mail className="h-4 w-4 mr-2" />
                      Send us a Message
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
