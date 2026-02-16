import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SignupForm } from "@/components/auth/SignupForm";
import { UserPlus } from "lucide-react";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-950">
      <Card className="w-full max-w-md border-2 border-zinc-200 dark:border-zinc-800 shadow-2xl rounded-[2.5rem]">
        <CardHeader className="space-y-2 p-8 pb-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-linear-to-br from-[#e41e26] to-[#c31a21] rounded-2xl shadow-lg">
              <UserPlus className="h-6 w-6 text-white" />
            </div>
            <CardTitle className="text-3xl font-black text-zinc-900 dark:text-white">
              Create Account
            </CardTitle>
          </div>
          <CardDescription className="text-zinc-600 dark:text-zinc-400 text-sm">
            Join our platform and start shopping today
          </CardDescription>
        </CardHeader>
        <CardContent className="p-8 pt-4">
          <SignupForm />
        </CardContent>
      </Card>
    </div>
  );
}
