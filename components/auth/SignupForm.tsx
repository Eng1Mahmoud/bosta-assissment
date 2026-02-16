"use client";

import { useActionState, useEffect } from "react";
import { signupAction } from "@/actions/authActions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Loader2, User, Lock, Mail, UserCircle } from "lucide-react";
import Link from "next/link";

export function SignupForm() {
  const router = useRouter();
  const [state, formAction, isPending] = useActionState(signupAction, {});

  useEffect(() => {
    if (state?.success) {
      toast.success(state.data?.message || "Account created successfully!");
      router.push("/login");
    } else if (state?.error) {
      toast.error(state.error);
    }
  }, [state, router]);

  return (
    <form action={formAction} className="space-y-4">
      <div className="space-y-1">
        <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300 ml-1">Full Name</label>
        <div className="relative">
          <UserCircle className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
          <Input
            name="fullName"
            placeholder="John Doe"
            className="h-14 bg-zinc-50/50 border-zinc-200 focus:border-[#e41e26] focus:ring-[#e41e26] rounded-xl pl-12"
          />
        </div>
        {state?.fieldErrors?.fullName && (
          <p className="text-[10px] text-red-500 mt-1 ml-1">{state.fieldErrors.fullName[0]}</p>
        )}
      </div>

      <div className="space-y-1">
        <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300 ml-1">Username</label>
        <div className="relative">
          <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
          <Input
            name="username"
            placeholder="johndoe123"
            className="h-14 bg-zinc-50/50 border-zinc-200 focus:border-[#e41e26] focus:ring-[#e41e26] rounded-xl pl-12"
          />
        </div>
        {state?.fieldErrors?.username && (
          <p className="text-[10px] text-red-500 mt-1 ml-1">{state.fieldErrors.username[0]}</p>
        )}
      </div>

      <div className="space-y-1">
        <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300 ml-1">Email</label>
        <div className="relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
          <Input
            name="email"
            type="email"
            placeholder="john@example.com"
            className="h-14 bg-zinc-50/50 border-zinc-200 focus:border-[#e41e26] focus:ring-[#e41e26] rounded-xl pl-12"
          />
        </div>
        {state?.fieldErrors?.email && (
          <p className="text-[10px] text-red-500 mt-1 ml-1">{state.fieldErrors.email[0]}</p>
        )}
      </div>

      <div className="space-y-1">
        <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300 ml-1">Password</label>
        <div className="relative">
          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
          <Input
            name="password"
            type="password"
            placeholder="••••••••"
            className="h-14 bg-zinc-50/50 border-zinc-200 focus:border-[#e41e26] focus:ring-[#e41e26] rounded-xl pl-12"
          />
        </div>
        {state?.fieldErrors?.password && (
          <p className="text-[10px] text-red-500 mt-1 ml-1">{state.fieldErrors.password[0]}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isPending}
        className="w-full h-16 bg-[#e41e26] hover:bg-[#c31a21] text-white text-lg font-bold rounded-2xl shadow-xl shadow-red-500/20 active:scale-[0.98] transition-all mt-6"
      >
        {isPending ? (
          <>
            <Loader2 className="mr-2 h-6 w-6 animate-spin" />
            Registering...
          </>
        ) : (
          "Sign Up"
        )}
      </Button>

      <p className="text-center text-sm text-zinc-500 mt-6">
        Already have an account?{" "}
        <Link href="/login" className="text-[#e41e26] font-bold hover:underline">
          Login instead
        </Link>
      </p>
    </form>
  );
}
