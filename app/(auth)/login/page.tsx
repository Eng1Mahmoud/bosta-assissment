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
      <Card className="border-border shadow-2xl rounded-[2.5rem] overflow-hidden bg-card transition-all hover:shadow-2xl backdrop-blur-xl">
        <CardHeader className="bg-card/80 border-b border-border p-8 text-center backdrop-blur-md">
          <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 border border-primary/20 shadow-inner">
            <Lock className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="text-2xl font-black text-foreground tracking-tight">Welcome Back</CardTitle>
          <CardDescription className="text-muted-foreground font-medium">Login to manage your products and cart</CardDescription>
        </CardHeader>
        <CardContent className="p-8 bg-card/40 backdrop-blur-sm">
          <Suspense fallback={<div className="flex justify-center py-8"><Loader2 className="animate-spin text-primary" /></div>}>
            <LoginForm />
          </Suspense>
        </CardContent>
      </Card>

      <div className="mt-8 p-6 bg-card/50 rounded-[2rem] border border-border backdrop-blur-xl shadow-xl transition-all hover:scale-[1.01] duration-300">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 justify-center">
            <div className="p-2 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-100 dark:border-blue-900/30">
              <Lock className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            </div>
            <h4 className="text-sm font-bold text-foreground">Test Credentials</h4>
          </div>

          <div className="space-y-3">
            <div className="p-3 bg-muted/50 rounded-xl border border-border group transition-colors hover:border-primary/30">
              <p className="text-xs text-muted-foreground font-medium mb-1 uppercase tracking-wider">Demo User</p>
              <div className="flex items-center justify-center gap-2">
                <code className="text-sm font-black text-foreground bg-muted px-2 py-0.5 rounded">mor_2314</code>
                <span className="text-border">|</span>
                <code className="text-sm font-black text-foreground bg-muted px-2 py-0.5 rounded">83r5^_</code>
              </div>
            </div>

            <div className="relative pt-2">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-border opacity-50"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase tracking-tighter">
                <span className="bg-background px-3 text-muted-foreground font-medium">Alternative Options</span>
              </div>
            </div>

            <p className="text-xs text-muted-foreground font-medium px-4">
              Need more? Find other test accounts in the official
              <a
                href="https://fakestoreapi.com/users"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 ml-1 font-bold text-primary hover:underline decoration-2 underline-offset-4"
              >
                users list
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
