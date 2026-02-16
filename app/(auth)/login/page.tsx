"use client";

import { useActionState, useEffect } from "react";
import { loginAction } from "@/actions/authActions";
import { useAuthStore } from "@/stores/useAuthStore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { useRouter, useSearchParams } from "next/navigation";
import { Loader2, Lock, User } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

function LoginForm() {
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

export default function LoginPage() {
  return (
    <>
      <Card className="border-zinc-200 shadow-2xl rounded-[2.5rem] overflow-hidden dark:border-zinc-800">
        <CardHeader className="bg-white border-b border-zinc-100 p-8 text-center dark:bg-zinc-900 dark:border-zinc-800">
          <div className="mx-auto w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mb-4 dark:bg-red-950/30">
            <Lock className="h-8 w-8 text-[#e41e26]" />
          </div>
          <CardTitle className="text-2xl font-black text-zinc-900">Welcome Back</CardTitle>
          <CardDescription>Login to manage your products and cart</CardDescription>
        </CardHeader>
        <CardContent className="p-8">
          <Suspense fallback={<div className="flex justify-center py-8"><Loader2 className="animate-spin text-[#e41e26]" /></div>}>
            <LoginForm />
          </Suspense>
        </CardContent>
      </Card>
      
      <div className="mt-8 p-4 bg-zinc-100 rounded-2xl border border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800">
        <p className="text-xs text-zinc-500 text-center font-medium">
          Test Account: <span className="text-zinc-900 font-bold">mor_2314</span> / <span className="text-zinc-900 font-bold">83r5^_</span>
        </p>
      </div>
    </>
  );
}
