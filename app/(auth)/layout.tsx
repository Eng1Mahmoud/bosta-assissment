import { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AuthLayout({ children }: { children: ReactNode }) {
	return (
		<div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex flex-col">
			<header className="p-4 sm:p-8">
				<Link href="/">
					<Button variant="ghost" className="gap-2 text-zinc-500 hover:bg-[#e41e26] hover:text-white transition-colors rounded-xl">
						<ArrowLeft className="h-4 w-4" />
						Back to Home
					</Button>
				</Link>
			</header>

			<main className="flex-1 flex items-center justify-center p-4">
				<div className="w-full max-w-md">{children}</div>
			</main>

			<footer className="p-8 text-center text-sm text-zinc-500">
				© BostaShop. All rights reserved.
			</footer>
		</div>
	);
}
