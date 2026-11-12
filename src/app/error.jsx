'use client';

import RouteStatus from '../components/RouteStatus';

export default function ErrorPage({ retry }) {
  return (
    <RouteStatus title="Something went wrong" action={
      <button onClick={() => retry()} className="px-6 py-3 rounded-lg border border-teal-500/50 text-teal-300 hover:bg-teal-500/10 transition-colors">Try again</button>
    }>
      <p>The portfolio could not be loaded. Please try again.</p>
    </RouteStatus>
  );
}
