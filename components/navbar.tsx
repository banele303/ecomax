"use client";

import { Building2, Menu } from "lucide-react";
import Link from "next/link";
import { Fragment, useState } from "react";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Sustainability", href: "#sustainability" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-60 h-[7rem]">
            <Image
              src="/ecomax-logo.png"
              alt="Ramadi Empire Logo"
              fill
              className="object-contain h-full"
            />
          </div>
         
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:gap-6">
          {navItems.map((item, index) => (
            <Fragment key={item.name}>
              <Link
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
              {index === 1 && (
                <div className="relative group">
                  <button className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary focus:outline-none">
                    Services
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="absolute left-0 z-10 mt-2 w-40 rounded border bg-white shadow-lg opacity-0 transition-opacity group-hover:opacity-100">
                    <Link href="/services/waterproofing" className="block px-4 py-2 text-sm hover:bg-gray-100">
                      Waterproofing
                    </Link>
                    <Link href="/services/flooring" className="block px-4 py-2 text-sm hover:bg-gray-100">
                      Flooring
                    </Link>
                  </div>
                </div>
              )}
            </Fragment>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button className="hidden md:inline-flex">Get a Quote</Button>

          {/* Mobile Navigation */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 pt-6">
                {navItems.map((item, index) => (
                  <Fragment key={item.name}>
                    <Link
                      href={item.href}
                      className="text-lg font-medium transition-colors hover:text-primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {index === 1 && (
                      <div className="flex flex-col gap-2">
                        <span className="text-lg font-medium">Services</span>
                        <Link
                          href="/services/waterproofing"
                          className="pl-4 text-base hover:text-primary"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Waterproofing
                        </Link>
                        <Link
                          href="/services/flooring"
                          className="pl-4 text-base hover:text-primary"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Flooring
                        </Link>
                      </div>
                    )}
                  </Fragment>
                ))}
                <Button className="mt-4">Get a Quote</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
