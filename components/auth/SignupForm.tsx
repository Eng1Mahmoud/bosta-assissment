"use client";

import { useActionState, useEffect } from "react";
import { signupAction } from "@/actions/authActions";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { User, Lock, Mail, UserCircle } from "lucide-react";
import Link from "next/link";
import { SubmitButton } from "@/components/SubmitButton";
import { FieldError } from "@/components/FieldError";

export function SignupForm() {
  const router = useRouter();
  const [state, formAction, isPending] = useActionState(signupAction, {});

  useEffect(() => {
    if (state?.success) {
      toast.success("Account Created", {
        description: state.data?.message || "Your account has been successfully created. You can now login.",
      });
      router.push("/login");
    } else if (state?.error) {
      toast.error("Signup Failed", {
        description: state.error,
      });
    }
  }, [state, router]);

  return (
    <form action={formAction} className="space-y-4">
      <div className="space-y-1">
        <label className="text-sm font-bold text-foreground ml-1 transition-colors">Full Name</label>
        <div className="relative group">
          <UserCircle className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <Input
            name="fullName"
            placeholder="John Doe"
            className="h-14 bg-muted/50 border-border focus:border-primary focus:ring-primary/20 rounded-xl pl-12 transition-all shadow-sm"
          />
        </div>
        <FieldError errors={state?.fieldErrors?.fullName} />
      </div>

      <div className="space-y-1">
        <label className="text-sm font-bold text-foreground ml-1 transition-colors">Username</label>
        <div className="relative group">
          <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <Input
            name="username"
            placeholder="johndoe123"
            className="h-14 bg-muted/50 border-border focus:border-primary focus:ring-primary/20 rounded-xl pl-12 transition-all shadow-sm"
          />
        </div>
        <FieldError errors={state?.fieldErrors?.username} />
      </div>

      <div className="space-y-1">
        <label className="text-sm font-bold text-foreground ml-1 transition-colors">Email</label>
        <div className="relative group">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <Input
            name="email"
            type="email"
            placeholder="john@example.com"
            className="h-14 bg-muted/50 border-border focus:border-primary focus:ring-primary/20 rounded-xl pl-12 transition-all shadow-sm"
          />
        </div>
        <FieldError errors={state?.fieldErrors?.email} />
      </div>

      <div className="space-y-1">
        <label className="text-sm font-bold text-foreground ml-1 transition-colors">Password</label>
        <div className="relative group">
          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <Input
            name="password"
            type="password"
            placeholder="••••••••"
            className="h-14 bg-muted/50 border-border focus:border-primary focus:ring-primary/20 rounded-xl pl-12 transition-all shadow-sm"
          />
        </div>
        <FieldError errors={state?.fieldErrors?.password} />
      </div>

      <SubmitButton isPending={isPending} label="Sign Up" pendingLabel="Registering..." className="mt-6" />

      <p className="text-center text-sm text-muted-foreground mt-6">
        Already have an account?{" "}
        <Link href="/login" className="text-primary font-bold hover:underline transition-colors">
          Login instead
        </Link>
      </p>
    </form>
  );
}
