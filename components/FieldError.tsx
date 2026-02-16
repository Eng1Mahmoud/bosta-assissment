interface FieldErrorProps {
  errors?: string[];
}

export function FieldError({ errors }: FieldErrorProps) {
  if (!errors || errors.length === 0) return null;
  return (
    <p className="text-xs text-destructive font-medium ml-1 animate-in slide-in-from-left-1">
      {errors[0]}
    </p>
  );
}
