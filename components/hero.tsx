import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 h-[60vh]">
      {/* <div className="absolute inset-0 z-0">
        <Image
          src="/construction3.webp"
          alt="Construction site"
          fill
          className="object-cover opacity-20 dark:opacity-10"
          priority
        />
      </div> */}
      <div className="container mt-[-2rem] relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Welcome to Ecomax Manufacturing
          </h1>
          <p className="mb-10 text-lg text-muted-foreground md:text-xl">
            As a leading manufacturer and supplier of building materials, we&apos;re committed to delivering exceptional
            products and services that meet the needs of architects, builders and homeowners.
          </p>
        </div>
      </div>
    </section>
  )
}

