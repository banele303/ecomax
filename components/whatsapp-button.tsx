"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

const WhatsAppIcon = ({ className = "h-7 w-7" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    role="img"
    aria-hidden="true"
    focusable="false"
    className={className}
  >
    <path
      fill="currentColor"
      d="M20.52 3.15A11.747 11.747 0 0 0 10.76.017C5.1.017.5 4.682.5 10.401c0 1.833.487 3.632 1.412 5.216L.5 22.5l7.064-1.981a11.91 11.91 0 0 0 5.184 1.206h.004c5.66 0 10.264-4.665 10.264-10.384.001-2.773-1.073-5.384-3.005-7.191ZM12.75 20.21h-.003a9.91 9.91 0 0 1-5.032-1.378l-.361-.214-4.19 1.176 1.119-4.356-.235-.35a9.42 9.42 0 0 1-1.46-5.064c0-5.192 4.21-9.415 9.388-9.415a9.28 9.28 0 0 1 6.623 2.715 9.297 9.297 0 0 1 2.742 6.643c-.001 5.192-4.212 9.414-9.391 9.414Zm5.367-7.071c-.293-.149-1.758-.867-2.03-.967-.273-.098-.471-.148-.67.149-.197.297-.768.968-.94 1.167-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.297.298-.495.098-.198.05-.371-.025-.52-.075-.148-.671-1.611-.919-2.207-.242-.579-.487-.501-.671-.511l-.571-.01c-.198 0-.52.074-.792.371s-1.04 1.016-1.04 2.479 1.066 2.876 1.213 3.074c.149.198 2.104 3.213 5.106 4.499.714.308 1.27.493 1.703.63.716.228 1.37.196 1.885.119.575-.086 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347Z"
    />
  </svg>
);

export default function WhatsAppButton({ 
  phoneNumber, 
  message = "Hello! I'm interested in your services." 
}: WhatsAppButtonProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle scroll behavior - hide when scrolling down, show when scrolling up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Format phone number (remove any non-digit characters)
  const formattedNumber = phoneNumber.replace(/\D/g, "");
  
  // Create WhatsApp URL
  const whatsappUrl = `https://wa.me/${formattedNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25d366]/40 transition-all duration-300 hover:bg-[#1ebe57] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#25D366] ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
      aria-label="Contact us on WhatsApp"
    >
      <span className="relative inline-flex items-center justify-center">
        <WhatsAppIcon className="h-7 w-7" />
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/70"></span>
          <span className="relative inline-flex h-3 w-3 rounded-full bg-white"></span>
        </span>
      </span>
    </Link>
  );
}