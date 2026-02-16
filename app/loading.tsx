export default function RootLoading() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex items-center justify-center p-4">
      <div className="text-center space-y-6">
        <div className="w-12 h-12 border-4 border-zinc-300 border-t-[#e41e26] rounded-full animate-spin mx-auto" />
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
          Loading...
        </h2>
      </div>
    </div>
  );
}
