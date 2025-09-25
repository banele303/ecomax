import Image from "next/image";
import { ArrowLeft, Check, Droplets, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Footer from "@/components/footer";

export default function WaterproofingPage() {
  const benefits = [
    "Prevents water damage and structural issues",
    "Protects against mold and mildew growth",
    "Increases property value and longevity",
    "Reduces maintenance costs over time",
    "Creates healthier living and working environments"
  ];

  const applications = [
    {
      title: "Residential Waterproofing",
      description: "Complete waterproofing solutions for homes, including basements, bathrooms, roofs, and foundations.",
      image: "/waterproof5.jpeg"
    },
    {
      title: "Commercial Waterproofing",
      description: "Large-scale waterproofing for office buildings, retail spaces, and industrial facilities.",
      image: "/waterproof6.jpeg"
    },
    {
      title: "Roof Waterproofing",
      description: "Specialized solutions to prevent leaks and water damage on all types of roofing systems.",
      image: "/waterproof7.jpeg"
    },
    {
      title: "Foundation Waterproofing",
      description: "Protection against groundwater and moisture for building foundations and basements.",
      image: "/waterproof8.jpeg"
    }
  ];

  const galleryImages = [
    { src: "/waterproof1.jpeg", alt: "Waterproofing Project 1" },
    { src: "/waterproof2.jpeg", alt: "Waterproofing Project 2" },
    { src: "/waterproof3.jpeg", alt: "Waterproofing Project 3" },
    { src: "/waterproof4.jpeg", alt: "Waterproofing Project 4" },
    { src: "/waterproof5.jpeg", alt: "Waterproofing Project 5" },
    { src: "/waterproof6.jpeg", alt: "Waterproofing Project 6" },
    { src: "/waterproof7.jpeg", alt: "Waterproofing Project 7" },
    { src: "/waterproof8.jpeg", alt: "Waterproofing Project 8" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container">
          <div className="mb-8">
            <Button variant="ghost" asChild className="mb-4">
              <Link href="/services" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Services
              </Link>
            </Button>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Professional Service</Badge>
              <h1 className="mb-6 text-4xl font-bold md:text-6xl">
                Waterproofing Solutions
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                At Ecomax Waterproofing, we understand the importance of effective waterproofing solutions. 
                Our expertise ensures that your home, building, or structure remains safe, dry and protected 
                from water-related problems.
              </p>
              <div className="flex gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Get a Quote
                  </Link>
                </Button>
                <Button variant="outline" asChild size="lg" className="gap-2">
                  <Link href="tel:+27123456789">
                    <Phone className="h-4 w-4" />
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/waterproof9.jpeg" 
                alt="Waterproofing Services" 
                fill 
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Why Choose Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits of Our Waterproofing Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our professional waterproofing solutions provide long-lasting protection and peace of mind.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-card/50 border border-primary/10">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-full bg-primary/10 mt-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-lg">{benefit}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-primary/5">
        <div className="container">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Applications</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Waterproofing Applications</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We provide comprehensive waterproofing solutions for various applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {applications.map((app, index) => (
              <div key={index} className="bg-card rounded-lg overflow-hidden shadow-md">
                <div className="relative h-64">
                  <Image 
                    src={app.image} 
                    alt={app.title} 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{app.title}</h3>
                  <p className="text-muted-foreground">{app.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Work</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Waterproofing Project Gallery</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Browse through our recent waterproofing projects to see the quality of our work.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative aspect-square overflow-hidden rounded-lg group">
                <Image 
                  src={image.src} 
                  alt={image.alt} 
                  fill 
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white font-medium text-center px-4">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="bg-primary/10 rounded-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Ready to waterproof your property?</h2>
                <p className="text-muted-foreground mb-6">
                  Contact us today for a free consultation and quote. Our team of experts is ready to provide
                  the perfect waterproofing solution for your needs.
                </p>
                <Button size="lg" asChild>
                  <Link href="/contact">Get a Free Quote</Link>
                </Button>
              </div>
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image 
                  src="/waterproof10.jpeg" 
                  alt="Contact Ecomax" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}