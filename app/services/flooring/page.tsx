import Image from "next/image";
import { ArrowLeft, Check, Grid, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Footer from "@/components/footer";

export default function FlooringPage() {
  const benefits = [
    "Durable and long-lasting flooring solutions",
    "Wide range of styles and materials to choose from",
    "Professional installation by experienced technicians",
    "Enhances property value and aesthetic appeal",
    "Easy maintenance and cleaning"
  ];

  const flooringTypes = [
    {
      title: "Laminate Flooring",
      description: "Affordable, durable, and available in various designs that mimic natural materials.",
      image: "/floor1.jpeg"
    },
    {
      title: "Vinyl Flooring",
      description: "Water-resistant, low maintenance, and comfortable underfoot with numerous style options.",
      image: "/floor2.jpeg"
    },
    {
      title: "Tile Flooring",
      description: "Extremely durable, water-resistant, and perfect for high-traffic areas and wet spaces.",
      image: "/floor3.jpeg"
    },
    {
      title: "Engineered Wood",
      description: "The beauty of hardwood with enhanced stability and moisture resistance.",
      image: "/floor4.jpeg"
    }
  ];

  const galleryImages = [
    { src: "/real-flooring.jpeg", alt: "Professional Flooring Installation" },
    { src: "/realflooring2.jpeg", alt: "Premium Flooring Solutions" },
    { src: "/realflooring3.jpeg", alt: "Custom Flooring Project" },
    { src: "/floor1.jpeg", alt: "Laminate Flooring Installation" },
    { src: "/floor2.jpeg", alt: "Vinyl Flooring Project" },
    { src: "/floor3.jpeg", alt: "Tile Flooring Installation" },
    { src: "/floor5.jpeg", alt: "Commercial Flooring Project" },
    { src: "/floor7.jpeg", alt: "Custom Flooring Design" }
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
                Flooring Solutions
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Transform your space with our stunning range of flooring options. Our collection offers something for every style and budget. Whether you're looking to enhance the beauty of your home or boost the functionality of your commercial space, our flooring solutions are designed to deliver exceptional quality and performance. Explore our range today and discover the perfect flooring to suit your needs.
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
                src="/floor5.jpeg" 
                alt="Flooring Services" 
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits of Our Flooring Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our professional flooring solutions provide beauty, durability, and value for your property.
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

      {/* Flooring Types Section */}
      <section className="py-20 bg-primary/5">
        <div className="container">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Options</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Flooring Types</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We offer a wide range of high-quality flooring options to suit your style and needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {flooringTypes.map((type, index) => (
              <div key={index} className="bg-card rounded-lg overflow-hidden shadow-md">
                <div className="relative h-64">
                  <Image 
                    src={type.image} 
                    alt={type.title} 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
                  <p className="text-muted-foreground">{type.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Process</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Work</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our streamlined process ensures a smooth and efficient flooring installation experience.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Consultation</h3>
              <p className="text-muted-foreground">We discuss your needs, preferences, and budget.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Measurement</h3>
              <p className="text-muted-foreground">We take precise measurements of your space.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Installation</h3>
              <p className="text-muted-foreground">Our experts install your new flooring with precision.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Final Inspection</h3>
              <p className="text-muted-foreground">We ensure everything meets our high standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Work</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Flooring Project Gallery</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Browse through our recent flooring projects to see the quality of our work.
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
      <section className="py-20 bg-primary/5">
        <div className="container">
          <div className="bg-card rounded-xl p-8 md:p-12 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Ready to transform your floors?</h2>
                <p className="text-muted-foreground mb-6">
                  Contact us today for a free consultation and quote. Our team of experts is ready to provide
                  the perfect flooring solution for your needs.
                </p>
                <Button size="lg" asChild>
                  <Link href="/contact">Get a Free Quote</Link>
                </Button>
              </div>
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image 
                  src="/waterproof4.jpeg" 
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