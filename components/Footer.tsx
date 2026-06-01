import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone } from "lucide-react";
import InstagramIcon from "./InstagramIcon";

export default function Footer() {
  return (
    <footer className="bg-navy-border text-bg-light py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/20 bg-white">
                <Image src="/logo.png" alt="Giovanni Rent Logo" fill className="object-cover" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-white mb-0">Giovanni Rent</h3>
            </div>
            <p className="text-bg-light text-sm mb-6 leading-relaxed">
              Pilihan terpercaya untuk sewa motor dan mobil di Wonosobo dan Dieng. 
              Armada prima, layanan 24 jam, dan harga terjangkau.
            </p>
          </div>
          
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-white">Layanan</h4>
            <ul className="space-y-3 text-sm text-bg-light">
              <li><Link href="/sewa-motor" className="hover:text-burnt-orange transition-colors">Sewa Motor</Link></li>
              <li><Link href="/sewa-mobil" className="hover:text-burnt-orange transition-colors">Sewa Mobil</Link></li>
              <li><Link href="/cara-sewa" className="hover:text-burnt-orange transition-colors">Cara Sewa</Link></li>
              <li><Link href="/wisata-dieng" className="hover:text-burnt-orange transition-colors">Panduan Wisata Dieng</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-white">Informasi</h4>
            <ul className="space-y-3 text-sm text-bg-light">
              <li><Link href="/tentang-kami" className="hover:text-burnt-orange transition-colors">Tentang Kami</Link></li>
              <li><Link href="/blog" className="hover:text-burnt-orange transition-colors">Blog & Artikel</Link></li>
              <li><Link href="/kontak" className="hover:text-burnt-orange transition-colors">Hubungi Kami</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-white">Kontak</h4>
            <ul className="space-y-4 text-sm text-bg-light">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-burnt-orange shrink-0" />
                <span>Jl. Mayjen Bambang Sugeng No. KM.03, Bumireso, Wonosobo (±30m dari Terminal Mendolo)</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-burnt-orange shrink-0" />
                <span>0812-9132-1554</span>
              </li>
              <li className="flex items-center">
                <InstagramIcon className="w-5 h-5 mr-3 text-burnt-orange shrink-0" />
                <a href="https://www.instagram.com/sewamotorwonosobo_giovanni" target="_blank" rel="noopener noreferrer" className="hover:text-burnt-orange transition-colors">
                  @sewamotorwonosobo_giovanni
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-bg-light mt-12 pt-8 text-center text-xs text-bg-light">
          <p>&copy; {new Date().getFullYear()} Giovanni Rent. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
