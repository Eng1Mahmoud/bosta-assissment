import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SubmitButtonProps {
  isPending: boolean;
  label: string;
  pendingLabel: string;
  className?: string;
}

export function SubmitButton({
  isPending,
  label,
  pendingLabel,
  className = "",
}: SubmitButtonProps) {
  return (
    <Button
      type="submit"
      disabled={isPending}
      className={`w-full h-14 sm:h-16 bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-bold rounded-2xl shadow-xl shadow-primary/20 active:scale-[0.98] transition-all ${className}`}
    >
      {isPending ? (
        <>
          <Loader2 className="mr-2 h-6 w-6 animate-spin" />
          {pendingLabel}
        </>
      ) : (
        label
      )}
    </Button>
  );
}
