export default function DashboardPage() {
  return (
    <main className="mx-auto min-h-screen max-w-[1280px] border-x border-border bg-surface px-10 py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
        Dashboard
      </p>
      <h1 className="mt-4 text-4xl font-extrabold text-text-slate">
        Protected dashboard placeholder
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-7 text-text-secondary">
        Auth is wired. This page is now protected by the Next proxy and will be
        populated in the dashboard feature.
      </p>
    </main>
  );
}