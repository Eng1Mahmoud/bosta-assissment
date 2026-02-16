import { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AuthLayout({ children }: { children: ReactNode }) {
	return (
		<div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex flex-col relative overflow-hidden">
			{/* Background patterns */}
			<div className="absolute inset-0 z-0 pointer-events-none">
				<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-red-500/5 rounded-full blur-3xl dark:bg-red-500/10" />
				<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-zinc-200/20 rounded-full blur-3xl dark:bg-zinc-800/20" />
			</div>

			<header className="p-4 sm:p-8 relative z-10 flex justify-start">
				<Link href="/">
					<Button variant="ghost" className="gap-2 text-zinc-500 hover:bg-[#e41e26] hover:text-white transition-colors rounded-xl dark:text-white dark:hover:bg-red-600">
						<ArrowLeft className="h-4 w-4" />
						Back to Home
					</Button>
				</Link>
			</header>

			<main className="flex-1 flex items-center justify-center p-4 relative z-10">
				<div className="w-full max-w-md">{children}</div>
			</main>

			<footer className="p-8 text-center text-sm text-zinc-500 relative z-10">
				© BostaShop. All rights reserved.
			</footer>
		</div>
	);
}
