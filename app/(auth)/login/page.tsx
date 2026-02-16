import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LoginForm } from "@/components/auth/LoginForm";
import { Loader2, Lock } from "lucide-react";
import { Suspense } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account to manage your products and cart.",
};

export default function LoginPage() {
  return (
    <>
      <Card className="border-zinc-200 shadow-2xl rounded-[2.5rem] overflow-hidden dark:bg-zinc-900/40 dark:border-zinc-800 transition-all hover:shadow-2xl dark:hover:shadow-zinc-900/50 dark:hover:border-zinc-700 backdrop-blur-xl">
        <CardHeader className="bg-white/80 border-b border-zinc-100 p-8 text-center dark:bg-zinc-950/50 dark:border-zinc-800/50 backdrop-blur-md">
          <div className="mx-auto w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mb-4 dark:bg-red-950/20 border border-red-100 dark:border-red-900/30 shadow-inner">
            <Lock className="h-8 w-8 text-[#e41e26] dark:text-red-500" />
          </div>
          <CardTitle className="text-2xl font-black text-zinc-900 dark:text-zinc-50 tracking-tight">Welcome Back</CardTitle>
          <CardDescription className="text-zinc-600 dark:text-zinc-400 font-medium">Login to manage your products and cart</CardDescription>
        </CardHeader>
        <CardContent className="p-8 bg-white/40 dark:bg-zinc-900/20 backdrop-blur-sm">
          <Suspense fallback={<div className="flex justify-center py-8"><Loader2 className="animate-spin text-[#e41e26] dark:text-red-500" /></div>}>
            <LoginForm />
          </Suspense>
        </CardContent>
      </Card>
      
      <div className="mt-8 p-4 bg-zinc-100/50 rounded-2xl border border-zinc-200 dark:bg-zinc-900/50 dark:border-zinc-800/50 backdrop-blur-sm text-center">
        <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
          Test Account: <span className="text-zinc-900 dark:text-zinc-200 font-bold">mor_2314</span> / <span className="text-zinc-900 dark:text-zinc-200 font-bold">83r5^_</span>
        </p>
      </div>
    </>
  );
}
