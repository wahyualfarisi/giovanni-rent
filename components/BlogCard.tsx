import Image from "next/image";
import Link from "next/link";
import { Calendar, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  title: string;
  slug: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  category: string;
  className?: string;
}

export default function BlogCard({
  title,
  slug,
  excerpt,
  imageUrl,
  date,
  category,
  className,
}: BlogCardProps) {
  return (
    <article className={cn("bg-white rounded-2xl overflow-hidden shadow-sm border border-divider group hover:shadow-md transition-all duration-300 flex flex-col h-full", className)}>
      <Link href={`/blog/${slug}`} className="relative h-56 w-full overflow-hidden bg-bg-light block">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-4 left-4 bg-burnt-orange text-white text-xs font-bold px-3 py-1 rounded-full">
          {category}
        </div>
      </Link>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center text-xs text-text-muted mb-3">
          <Calendar className="w-3.5 h-3.5 mr-1.5" />
          <span>{date}</span>
        </div>
        
        <Link href={`/blog/${slug}`} className="block mb-3">
          <h3 className="font-heading text-xl font-bold text-text-primary group-hover:text-burnt-orange transition-colors line-clamp-2">
            {title}
          </h3>
        </Link>
        
        <p className="text-text-muted text-sm mb-6 line-clamp-3 flex-grow">
          {excerpt}
        </p>
        
        <Link 
          href={`/blog/${slug}`}
          className="inline-flex items-center text-sm font-bold text-burnt-orange hover:text-text-primary transition-colors mt-auto"
        >
          Baca Selengkapnya
          <ChevronRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </article>
  );
}
