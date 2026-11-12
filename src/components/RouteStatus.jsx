import Link from 'next/link';

export default function RouteStatus({ title, children, action }) {
  return (
    <main className="min-h-screen bg-transparent flex items-center justify-center px-4 py-20 text-center">
      <div className="max-w-lg rounded-2xl border border-teal-500/30 bg-slate-900/50 p-8 sm:p-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gradient mb-4">{title}</h1>
        <div className="text-slate-300 leading-relaxed">{children}</div>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {action}
          <Link href="/" className="inline-flex px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-fuchsia-500 text-white font-semibold">Back to portfolio</Link>
        </div>
      </div>
    </main>
  );
}
