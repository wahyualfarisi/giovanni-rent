import Image from "next/image";
import { Users, Settings, Fuel, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface VehicleCardProps {
  id: string;
  name: string;
  type: string; // 'Motor' or 'Mobil'
  imageUrl: string;
  price: number;
  features: {
    transmission?: string;
    capacity?: number;
    engine?: string;
    year?: string;
  };
  className?: string;
}

export default function VehicleCard({
  name,
  type,
  imageUrl,
  price,
  features,
  className,
}: VehicleCardProps) {
  const formattedPrice = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(price);

  return (
    <div className={cn("bg-white rounded-2xl overflow-hidden shadow-sm border border-divider group hover:shadow-md transition-all duration-300", className)}>
      <div className="relative h-48 w-full overflow-hidden bg-bg-light">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-text-primary">
          {type}
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="font-heading text-xl font-bold text-text-primary mb-2">{name}</h3>
        
        <div className="grid grid-cols-2 gap-3 mb-4 text-sm text-text-muted">
          {features.transmission && (
            <div className="flex items-center">
              <Settings className="w-4 h-4 mr-2 text-text-muted" />
              <span>{features.transmission}</span>
            </div>
          )}
          {features.capacity && (
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2 text-text-muted" />
              <span>{features.capacity} Kursi</span>
            </div>
          )}
          {features.engine && (
            <div className="flex items-center">
              <Fuel className="w-4 h-4 mr-2 text-text-muted" />
              <span>{features.engine}</span>
            </div>
          )}
          {features.year && (
            <div className="flex items-center">
              <span className="w-4 h-4 mr-2 text-text-muted font-bold text-center leading-4">Y</span>
              <span>{features.year}</span>
            </div>
          )}
        </div>

        <div className="mt-6 pt-4 border-t border-divider">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-xs text-text-muted mb-1">Mulai dari</p>
              <p className="font-bold text-xl text-burnt-orange">{formattedPrice}<span className="text-sm font-normal text-text-muted">/hari</span></p>
            </div>
          </div>
          <a
            href={`https://wa.me/6281291321554?text=Halo%20Giovanni%20Rent,%20saya%20ingin%20menyewa%20${encodeURIComponent(name)}...`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full bg-burnt-orange text-white py-2.5 rounded-xl font-bold hover:bg-deep-rust transition-colors gap-2 shadow-sm hover:shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
            Pesan via WA
          </a>
        </div>
      </div>
    </div>
  );
}
