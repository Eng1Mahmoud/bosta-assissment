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
        <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300 ml-1 transition-colors">Username</label>
        <div className="relative group">
          <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400 dark:text-zinc-500 group-focus-within:text-[#e41e26] transition-colors" />
          <Input
            name="username"
            placeholder="johnd"
            className="h-14 bg-zinc-50/50 border-zinc-200 focus:border-[#e41e26] focus:ring-[#e41e26] rounded-xl pl-12 dark:bg-zinc-950/50 dark:border-zinc-800 dark:text-zinc-100 dark:placeholder:text-zinc-600 dark:focus:ring-red-500/20 dark:focus:border-red-500/50 transition-all shadow-sm"
            defaultValue="mor_2314"
          />
        </div>
        {state?.fieldErrors?.username && (
          <p className="text-xs text-red-500 mt-1 ml-1 dark:text-red-400 animate-in slide-in-from-left-1">{state.fieldErrors.username[0]}</p>
        )}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300 ml-1 transition-colors">Password</label>
        <div className="relative group">
          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400 dark:text-zinc-500 group-focus-within:text-[#e41e26] transition-colors" />
          <Input
            name="password"
            type="password"
            placeholder="••••••••"
            className="h-14 bg-zinc-50/50 border-zinc-200 focus:border-[#e41e26] focus:ring-[#e41e26] rounded-xl pl-12 dark:bg-zinc-950/50 dark:border-zinc-800 dark:text-zinc-100 dark:placeholder:text-zinc-600 dark:focus:ring-red-500/20 dark:focus:border-red-500/50 transition-all shadow-sm"
            defaultValue="83r5^_"
          />
        </div>
        {state?.fieldErrors?.password && (
          <p className="text-xs text-red-500 mt-1 ml-1 dark:text-red-400 animate-in slide-in-from-left-1">{state.fieldErrors.password[0]}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isPending}
        className="w-full h-16 bg-gradient-to-r from-[#e41e26] to-[#c31a21] hover:from-[#c31a21] hover:to-[#a9161c] text-white text-lg font-bold rounded-2xl shadow-xl shadow-red-500/20 active:scale-[0.98] transition-all mt-4 dark:shadow-red-900/30 dark:from-red-600 dark:to-red-700 dark:hover:from-red-700 dark:hover:to-red-800"
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

      <p className="text-center text-sm text-zinc-500 mt-6 dark:text-zinc-400">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="text-[#e41e26] font-bold hover:underline dark:text-red-400 dark:hover:text-red-300 transition-colors">
          Sign up
        </Link>
      </p>
    </form>
  );
}
