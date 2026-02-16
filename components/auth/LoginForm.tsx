"use client";

import { useActionState, useEffect } from "react";
import { loginAction } from "@/actions/authActions";
import { useAuthStore } from "@/stores/useAuthStore";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useRouter, useSearchParams } from "next/navigation";
import { Lock, User } from "lucide-react";
import Link from "next/link";
import { SubmitButton } from "@/components/SubmitButton";
import { FieldError } from "@/components/FieldError";

export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callback = searchParams.get("callback") || "/products";

  const login = useAuthStore((state) => state.login);
  const [state, formAction, isPending] = useActionState(loginAction, {});

  useEffect(() => {
    if (state?.success && state.data) {
      login(state.data.token, state.data.username, state.data.displayName);
      toast.success("Welcome back!", {
        description: `Logged in as ${state.data.username}.`,
      });
      router.push(callback);
    } else if (state?.error) {
      toast.error("Login Failed", {
        description: state.error,
      });
    }
  }, [state, router, login, callback]);

  return (
    <form action={formAction} className="space-y-6">
      <div className="space-y-2">
        <label className="text-sm font-bold text-foreground ml-1 transition-colors">Username</label>
        <div className="relative group">
          <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <Input
            name="username"
            placeholder="johnd"
            className="h-14 bg-muted/50 border-border focus:border-primary focus:ring-primary/20 rounded-xl pl-12 transition-all shadow-sm"
            defaultValue="mor_2314"
          />
        </div>
        <FieldError errors={state?.fieldErrors?.username} />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold text-foreground ml-1 transition-colors">Password</label>
        <div className="relative group">
          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <Input
            name="password"
            type="password"
            placeholder="••••••••"
            className="h-14 bg-muted/50 border-border focus:border-primary focus:ring-primary/20 rounded-xl pl-12 transition-all shadow-sm"
            defaultValue="83r5^_"
          />
        </div>
        <FieldError errors={state?.fieldErrors?.password} />
      </div>

      <SubmitButton isPending={isPending} label="Login" pendingLabel="Authenticating..." className="mt-4" />

      <p className="text-center text-sm text-muted-foreground mt-6">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="text-primary font-bold hover:underline transition-colors">
          Sign up
        </Link>
      </p>
    </form>
  );
}
