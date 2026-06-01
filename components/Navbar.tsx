"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Sewa Motor", href: "/sewa-motor" },
    { name: "Sewa Mobil", href: "/sewa-mobil" },
    { name: "Cara Sewa", href: "/cara-sewa" },
    { name: "Wisata Dieng", href: "/wisata-dieng" },
    { name: "Blog", href: "/blog" },
    { name: "Kontak", href: "/kontak" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-bg-light backdrop-blur-md shadow-sm border-divider py-3"
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-navy-border bg-white">
              <Image src="/logo.png" alt="Giovanni Rent Logo" fill className="object-cover" />
            </div>
            <span className="font-heading text-xl md:text-2xl font-bold text-text-primary">Giovanni Rent</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-text-primary hover:text-burnt-orange font-medium transition-colors text-sm xl:text-base"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://wa.me/6281291321554?text=Halo%20Giovanni%20Rent,%20saya%20ingin%20menyewa%20kendaraan..."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-burnt-orange text-white px-5 py-2 rounded-full font-medium hover:bg-deep-rust transition-colors shadow-md"
            >
              Pesan via WA
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-text-primary p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-bg-light border-t border-divider shadow-lg py-4 px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-text-primary hover:text-burnt-orange font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://wa.me/6281291321554?text=Halo%20Giovanni%20Rent,%20saya%20ingin%20menyewa%20kendaraan..."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-burnt-orange text-white px-5 py-3 rounded-full font-medium text-center shadow-md w-full"
            onClick={() => setIsMenuOpen(false)}
          >
            Pesan via WA
          </a>
        </div>
      )}
    </nav>
  );
}
