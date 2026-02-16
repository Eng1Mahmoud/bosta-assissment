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
    <Card className="border-border shadow-2xl rounded-[2.5rem] overflow-hidden bg-card transition-all hover:shadow-2xl backdrop-blur-xl">
      <CardHeader className="bg-card/80 border-b border-border p-8 text-center backdrop-blur-md">
        <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 border border-primary/20 shadow-inner">
          <UserPlus className="h-8 w-8 text-primary" />
        </div>
        <CardTitle className="text-2xl font-black text-foreground tracking-tight">Create Account</CardTitle>
        <CardDescription className="text-muted-foreground font-medium">Join our platform and start shopping today</CardDescription>
      </CardHeader>
      <CardContent className="p-8 bg-card/40 backdrop-blur-sm">
        <Suspense fallback={<div className="flex justify-center py-8"><Loader2 className="animate-spin text-primary" /></div>}>
          <SignupForm />
        </Suspense>
      </CardContent>
    </Card>
  );
}
