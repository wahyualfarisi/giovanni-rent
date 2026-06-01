import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  centered = false,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-12", centered && "text-center", className)}>
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4 relative inline-block">
        {title}
        <span className="absolute -bottom-2 left-0 w-12 h-1 bg-burnt-orange rounded-full"></span>
        {centered && <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-burnt-orange rounded-full"></span>}
      </h2>
      {subtitle && (
        <p className="text-text-muted mt-4 max-w-2xl text-lg mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
