export default function RootLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center space-y-6">
        <div className="w-12 h-12 border-4 border-border border-t-primary rounded-full animate-spin mx-auto" />
        <h2 className="text-2xl font-bold text-foreground">
          Loading...
        </h2>
      </div>
    </div>
  );
}
