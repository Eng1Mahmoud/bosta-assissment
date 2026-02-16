"use client";

import { useActionState, useEffect } from "react";
import { loginAction } from "@/actions/authActions";
import { useAuthStore } from "@/stores/useAuthStore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useRouter, useSearchParams } from "next/navigation";
import { Loader2, Lock, User } from "lucide-react";
import Link from "next/link";

export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callback = searchParams.get("callback") || "/products";
  
  const login = useAuthStore((state) => state.login);
  const [state, formAction, isPending] = useActionState(loginAction, {});

  useEffect(() => {
    if (state?.success && state.data) {
      login(state.data.token, state.data.username, state.data.displayName);
      toast.success("Welcome back!");
      router.push(callback);
    } else if (state?.error) {
      toast.error(state.error);
    }
  }, [state, router, login, callback]);

  return (
    <form action={formAction} className="space-y-6">
      <div className="space-y-2">
        <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300 ml-1">Username</label>
        <div className="relative">
          <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
          <Input
            name="username"
            placeholder="johnd"
            className="h-14 bg-zinc-50/50 border-zinc-200 focus:border-[#e41e26] focus:ring-[#e41e26] rounded-xl pl-12"
            defaultValue="mor_2314"
          />
        </div>
        {state?.fieldErrors?.username && (
          <p className="text-xs text-red-500 mt-1 ml-1">{state.fieldErrors.username[0]}</p>
        )}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300 ml-1">Password</label>
        <div className="relative">
          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
          <Input
            name="password"
            type="password"
            placeholder="••••••••"
            className="h-14 bg-zinc-50/50 border-zinc-200 focus:border-[#e41e26] focus:ring-[#e41e26] rounded-xl pl-12"
            defaultValue="83r5^_"
          />
        </div>
        {state?.fieldErrors?.password && (
          <p className="text-xs text-red-500 mt-1 ml-1">{state.fieldErrors.password[0]}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isPending}
        className="w-full h-16 bg-[#e41e26] hover:bg-[#c31a21] text-white text-lg font-bold rounded-2xl shadow-xl shadow-red-500/20 active:scale-[0.98] transition-all mt-4"
      >
        {isPending ? (
          <>
            <Loader2 className="mr-2 h-6 w-6 animate-spin" />
            Authenticating...
          </>
        ) : (
          "Login"
        )}
      </Button>

      <p className="text-center text-sm text-zinc-500 mt-6">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="text-[#e41e26] font-bold hover:underline">
          Sign up
        </Link>
      </p>
    </form>
  );
}
