export default function Loading() {
  return (
    <main className="min-h-screen bg-transparent flex items-center justify-center px-4">
      <div role="status" className="text-center text-slate-300">
        <div aria-hidden="true" className="mx-auto mb-6 h-12 w-12 animate-spin rounded-full border-4 border-slate-800 border-t-teal-400" />
        <p>Loading portfolio...</p>
      </div>
    </main>
  );
}
