import Image from "next/image";
import { ArrowLeft, Droplets, Grid3X3, ArrowRight, Shield, Clock, Award, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Footer from "@/components/footer";

export default function ServicesPage() {
  const services = [
    {
      icon: Droplets,
      title: "Waterproofing",
      description: "At Ecomax Waterproofing, we understand the importance of effective waterproofing solutions. Our expertise ensures that your home, building, or structure remains safe, dry and protected from water-related problems.",
      image: "/waterproof1.jpeg",
      link: "/services/waterproofing",
      features: ["Roof waterproofing", "Foundation sealing", "Basement waterproofing", "Bathroom & kitchen solutions"]
    },
    {
      icon: Grid3X3,
      title: "Flooring",
      description: "Our professional flooring services provide durable, beautiful, and long-lasting solutions for residential and commercial properties. We use high-quality materials and expert installation techniques.",
      image: "/floor1.jpeg",
      link: "/services/flooring",
      features: ["Laminate flooring", "Vinyl installation", "Tile flooring", "Engineered wood solutions"]
    }
  ];
  

  
  const benefits = [
    {
      icon: Shield,
      title: "Quality Guaranteed",
      description: "All our services come with a satisfaction guarantee and premium materials"
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "We respect your time and always complete projects within the agreed timeframe"
    },
    {
      icon: Award,
      title: "Expert Technicians",
      description: "Our team consists of certified professionals with years of experience"
    },
    {
      icon: CheckCircle,
      title: "Comprehensive Solutions",
      description: "From consultation to completion, we handle every aspect of your project"
    }
  ];
  
  const galleryImages = [
    { src: "/waterproof1.jpeg", alt: "Waterproofing Project" },
    { src: "/waterproof3.jpeg", alt: "Commercial Waterproofing" },
    { src: "/waterproof5.jpeg", alt: "Roof Waterproofing" },
    { src: "/waterproof7.jpeg", alt: "Foundation Waterproofing" },
    { src: "/floor1.jpeg", alt: "Laminate Flooring" },
    { src: "/floor3.jpeg", alt: "Tile Flooring" },
    { src: "/floor5.jpeg", alt: "Flooring Installation" },
    { src: "/floor7.jpeg", alt: "Custom Flooring" }
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
                Our Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Ecomax provides premium waterproofing and flooring solutions that protect your property
                and enhance its value. Our expert team delivers reliable, innovative, and sustainable services.
              </p>
              <div className="flex gap-4">
                <Button asChild size="lg">
                  <Link href="#services">
                    Explore Services
                  </Link>
                </Button>
                <Button variant="outline" asChild size="lg">
                  <Link href="/contact">
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/waterproof2.jpeg" 
                alt="Ecomax Services" 
                fill 
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Expertise</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Professional Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We deliver high-quality waterproofing and flooring solutions tailored to your specific needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden transition-all hover:shadow-lg">
                <div className="relative h-64">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill 
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-2 rounded-full bg-primary/10">
                      <service.icon className="h-5 w-5 text-primary" />
                    </div>
                    <Badge>{service.title}</Badge>
                  </div>
                  <CardTitle className="text-2xl">{service.title} Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={service.link} className="flex items-center justify-between">
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-20 bg-primary/5">
        <div className="container">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Why Choose Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Service Benefits</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Experience the Ecomax difference with our premium services and customer-focused approach.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-card border-none shadow-md hover:shadow-lg transition-all">
                <CardHeader className="text-center pb-2">
                  <div className="mx-auto bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-muted-foreground">
                  <p>{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Work</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Project Gallery</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Browse through our recent waterproofing and flooring projects to see the quality of our work.
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
                <h2 className="text-3xl font-bold mb-4">Ready to protect your property?</h2>
                <p className="text-muted-foreground mb-6">
                  Contact us today for a free consultation and quote. Our team of experts is ready to provide
                  the perfect waterproofing or flooring solution for your needs.
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