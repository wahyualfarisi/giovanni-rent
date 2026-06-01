import { Star, Quote, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  name: string;
  city: string;
  content: string;
  rating?: number;
  initials: string;
  avatarColor: string;
  className?: string;
}

export default function TestimonialCard({
  name,
  city,
  content,
  rating = 5,
  initials,
  avatarColor,
  className,
}: TestimonialCardProps) {
  return (
    <div className={cn("bg-bg-card p-6 md:p-8 rounded-2xl relative shadow-sm border border-divider flex flex-col", className)}>
      <Quote className="absolute top-6 right-6 w-10 h-10 text-divider" />
      
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={cn("w-5 h-5", i < rating ? "text-yellow-500 fill-yellow-500" : "text-text-muted")}
          />
        ))}
      </div>
      
      <p className="text-text-muted italic mb-6 relative z-10 leading-relaxed flex-1">
        &ldquo;{content}&rdquo;
      </p>
      
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
          style={{ backgroundColor: avatarColor }}
        >
          {initials}
        </div>
        <div>
          <h4 className="font-bold text-text-primary leading-tight">{name}</h4>
          <p className="text-xs text-text-muted flex items-center gap-1">
            <ExternalLink className="w-3 h-3" />
            {city} · via Google Maps
          </p>
        </div>
      </div>
    </div>
  );
}
