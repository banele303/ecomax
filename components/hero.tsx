import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, CheckCircle, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-12 md:py-20 lg:py-24 min-h-[90vh] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/construction3.webp"
          alt="Construction site"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-[1]">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30 hover:bg-primary/30">
              🏆 Leading Construction Materials Supplier
            </Badge>
            
            <h1 className="mb-6 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white">
              Building Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                Dreams Today
              </span>
            </h1>
            
            <p className="mb-8 text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Premium quality bricks, innovative fencing solutions, and exceptional service. 
              Transform your construction projects with our state-of-the-art materials.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white">10+</div>
                <div className="text-sm text-gray-300">Years Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white">50M+</div>
                <div className="text-sm text-gray-300">Bricks Produced</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white">1000+</div>
                <div className="text-sm text-gray-300">Happy Clients</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 group" asChild>
                <Link href="/products">
                  Explore Products
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm group" asChild>
                <Link href="/about">
                  <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  Learn More
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Features */}
          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 lg:p-8 border border-white/20 shadow-2xl">
              <h3 className="text-xl font-semibold text-white mb-6">Why Choose Ecomax?</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-200">Premium Quality Materials</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-200">Fast & Reliable Delivery</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-200">Expert Technical Support</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-200">Competitive Pricing</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-200">Sustainable Manufacturing</span>
                </div>
              </div>
              
              {/* Rating */}
              <div className="mt-6 pt-6 border-t border-white/20">
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-white font-medium">4.9/5</span>
                </div>
                <p className="text-sm text-gray-300">Rated by 500+ satisfied customers</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Features Card */}
        <div className="lg:hidden mt-12">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-2xl">
            <h3 className="text-lg font-semibold text-white mb-4 text-center">Why Choose Ecomax?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                <span className="text-gray-200 text-sm">Premium Quality</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                <span className="text-gray-200 text-sm">Fast Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                <span className="text-gray-200 text-sm">Expert Support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                <span className="text-gray-200 text-sm">Best Pricing</span>
              </div>
            </div>
            
            {/* Mobile Rating */}
            <div className="mt-4 pt-4 border-t border-white/20 text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-white font-medium">4.9/5</span>
              </div>
              <p className="text-xs text-gray-300">Rated by 500+ customers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

