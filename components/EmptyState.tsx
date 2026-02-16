import { type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface EmptyStateProps {
  icon?: LucideIcon;
  title: string;
  description?: string;
  actionLabel?: string;
  actionHref?: string;
}

export function EmptyState({
  icon: Icon,
  title,
  description,
  actionLabel,
  actionHref,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 sm:py-20 bg-card rounded-2xl sm:rounded-3xl border border-dashed border-border px-4 sm:px-6">
      {Icon && (
        <div className="bg-muted p-4 sm:p-6 rounded-full mb-4 sm:mb-6">
          <Icon className="h-8 sm:h-12 w-8 sm:w-12 text-muted-foreground" />
        </div>
      )}
      <h2 className="text-lg sm:text-xl font-bold text-foreground mb-2 text-center">
        {title}
      </h2>
      {description && (
        <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 text-center">
          {description}
        </p>
      )}
      {actionLabel && actionHref && (
        <Button
          asChild
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-xl px-6 sm:px-8 text-sm sm:text-base"
        >
          <Link href={actionHref}>{actionLabel}</Link>
        </Button>
      )}
    </div>
  );
}
