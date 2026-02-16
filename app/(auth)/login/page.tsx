import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LoginForm } from "@/components/auth/LoginForm";
import { Loader2, Lock } from "lucide-react";
import { Suspense } from "react";

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
