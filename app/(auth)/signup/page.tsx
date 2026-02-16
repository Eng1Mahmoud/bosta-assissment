import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SignupForm } from "@/components/auth/SignupForm";
import { Loader2, UserPlus } from "lucide-react";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Create a new account and start shopping today.",
};

export default function SignupPage() {
  return (
    <Card className="border-zinc-200 shadow-2xl rounded-[2.5rem] overflow-hidden dark:bg-zinc-900/40 dark:border-zinc-800 transition-all hover:shadow-2xl dark:hover:shadow-zinc-900/50 dark:hover:border-zinc-700 backdrop-blur-xl">
      <CardHeader className="bg-white/80 border-b border-zinc-100 p-8 text-center dark:bg-zinc-950/50 dark:border-zinc-800/50 backdrop-blur-md">
        <div className="mx-auto w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mb-4 dark:bg-red-950/20 border border-red-100 dark:border-red-900/30 shadow-inner">
          <UserPlus className="h-8 w-8 text-[#e41e26] dark:text-red-500" />
        </div>
        <CardTitle className="text-2xl font-black text-zinc-900 dark:text-zinc-50 tracking-tight">Create Account</CardTitle>
        <CardDescription className="text-zinc-600 dark:text-zinc-400 font-medium">Join our platform and start shopping today</CardDescription>
      </CardHeader>
      <CardContent className="p-8 bg-white/40 dark:bg-zinc-900/20 backdrop-blur-sm">
        <Suspense fallback={<div className="flex justify-center py-8"><Loader2 className="animate-spin text-[#e41e26] dark:text-red-500" /></div>}>
          <SignupForm />
        </Suspense>
      </CardContent>
    </Card>
  );
}
