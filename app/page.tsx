import Image from "next/image";

const featureRows = [
  {
    title: "Find jobs that actually fit",
    copy: "Search by title and location or paste a job link. Get matched roles you can quickly scan.",
  },
  {
    title: "Know the Company Before You Apply",
    copy: "Stop guessing what a company is about. JobPilot browses their site and gives you everything you need to apply with confidence.",
  },
  {
    title: "Keep track of every application",
    copy: "Keep a clear view of every job you've found, tailored. Your activity and progress all stay in one simple place.",
  },
];

const confidenceRows = [
  {
    title: "Understand your match score",
    copy: "See how your profile lines up with each role before you apply. Get a clear breakdown of what fits and what's missing.",
  },
  {
    title: "AI-Powered Job Matching",
    copy: "Stop guessing which jobs are worth applying to. JobPilot scores every role against your actual skills so you focus on the ones that matter.",
  },
  {
    title: "Focus on the right roles",
    copy: "Filter out low fit jobs and stay on the ones that actually matter. Spend less time sorting and more time applying.",
  },
];

function Button({
  children,
  variant = "primary",
}: Readonly<{
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}>) {
  return (
    <button
      className={
        variant === "primary"
          ? "inline-flex h-10 items-center justify-center rounded-sm bg-text-slate px-6 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-text-darkest"
          : "inline-flex h-10 items-center justify-center rounded-sm border border-border bg-surface px-6 text-sm font-semibold text-text-slate shadow-sm transition-colors hover:bg-surface-secondary"
      }
    >
      {children}
    </button>
  );
}

function GradientBand({
  children,
  compact = false,
}: Readonly<{
  children: React.ReactNode;
  compact?: boolean;
}>) {
  return (
    <section
      className={`border-b border-border bg-[radial-gradient(circle_at_26%_12%,rgba(235,216,255,0.92)_0,rgba(235,216,255,0)_24%),radial-gradient(circle_at_79%_18%,rgba(180,214,252,0.96)_0,rgba(180,214,252,0)_29%),radial-gradient(circle_at_48%_97%,rgba(255,226,244,0.86)_0,rgba(255,226,244,0)_28%),linear-gradient(180deg,#ffffff_0%,#fbf9ff_100%)] ${compact ? "px-6 py-24" : "px-6 py-18 sm:py-20"}`}
    >
      {children}
    </section>
  );
}

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl overflow-hidden border-x border-border bg-surface text-text-primary">
      <header className="flex h-18 items-center justify-between border-b border-border px-10">
        <Image
          src="/logo.png"
          alt="JobPilot"
          width={118}
          height={40}
          className="h-8 w-auto"
          priority
        />
        <nav className="hidden items-center gap-12 text-sm font-medium text-text-secondary md:flex">
          <a href="#" className="hover:text-text-primary">
            Dashboard
          </a>
          <a href="#" className="hover:text-text-primary">
            Find Jobs
          </a>
          <a href="#" className="hover:text-text-primary">
            Profile
          </a>
        </nav>
        <Button>Start for free</Button>
      </header>

      <GradientBand>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-[44px] font-extrabold leading-[0.98] text-[#241b35] sm:text-[58px]">
            Job hunting is hard.
            <br />
            Your tools shouldn&rsquo;t be.
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-text-secondary">
            Stop applying blind. JobPilot finds the jobs, researches the
            companies, and gives you everything you need to stand out.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button>Get Started &#9656;</Button>
            <Button variant="secondary">Find Your First Match</Button>
          </div>
        </div>
      </GradientBand>

      <section className="border-b border-border bg-surface-tertiary px-12 py-12">
        <div className="mx-auto max-w-260">
          <Image
            src="/images/dashboard-demo.png"
            alt="JobPilot dashboard showing job metrics and company research activity"
            width={2394}
            height={1208}
            className="w-full"
            priority
          />
        </div>
      </section>

      <section className="grid border-b border-border md:grid-cols-2">
        <div className="border-r border-border bg-[linear-gradient(90deg,rgba(231,234,243,0.82)_1px,transparent_1px),linear-gradient(180deg,rgba(231,234,243,0.82)_1px,transparent_1px)] bg-size-[112px_112px]">
          <div className="px-16 py-16">
            <h2 className="max-w-md text-[38px] font-extrabold leading-[1.03] text-text-slate">
              Manage Your Job
              <br />
              Search With Ease
            </h2>
          </div>
          <div>
            {featureRows.map((row, index) => (
              <article
                key={row.title}
                className={`border-t border-border px-16 py-8 ${index === 0 ? "border-l-[3px] border-l-accent" : ""}`}
              >
                <h3 className="text-lg font-extrabold text-text-slate">
                  {row.title}
                </h3>
                <p className="mt-3 max-w-md text-base leading-7 text-text-secondary">
                  {row.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
        <div className="flex items-center bg-surface-muted px-12 py-28">
          <Image
            src="/images/jobs-lists.png"
            alt="JobPilot matched jobs table"
            width={1182}
            height={889}
            className="w-full rounded-md"
          />
        </div>
      </section>

      <div className="h-18 border-b border-border bg-[repeating-linear-gradient(135deg,#ffffff_0,#ffffff_6px,#fafbfc_6px,#fafbfc_8px)]" />

      <section className="grid border-b border-border md:grid-cols-2">
        <div className="flex items-center justify-center bg-surface-muted px-12 py-28">
          <Image
            src="/images/agnet-log.png"
            alt="Agent log showing JobPilot automation steps"
            width={1072}
            height={828}
            className="w-full max-w-120 rounded-md"
          />
        </div>
        <div className="bg-[linear-gradient(90deg,rgba(231,234,243,0.72)_1px,transparent_1px),linear-gradient(180deg,rgba(231,234,243,0.72)_1px,transparent_1px)] bg-size-[112px_112px]">
          <div className="px-16 py-16">
            <h2 className="max-w-md text-[38px] font-extrabold leading-[1.03] text-text-slate">
              Apply With More
              <br />
              Confidence, Every Time
            </h2>
          </div>
          <div>
            {confidenceRows.map((row, index) => (
              <article
                key={row.title}
                className={`border-t border-border px-16 py-8 ${index === 1 ? "border-l-[3px] border-l-success" : ""}`}
              >
                <h3 className="text-lg font-extrabold text-text-slate">
                  {row.title}
                </h3>
                <p className="mt-3 max-w-md text-base leading-7 text-text-secondary">
                  {row.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="h-18 border-b border-border bg-[repeating-linear-gradient(135deg,#ffffff_0,#ffffff_6px,#fafbfc_6px,#fafbfc_8px)]" />

      <section className="border-b border-border px-6 py-28 text-center">
        <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-accent">
          Success Stories
        </p>
        <blockquote className="mx-auto mt-8 max-w-3xl text-[28px] font-semibold leading-[1.28] text-text-slate">
          &ldquo;I used to spend my evenings copy-pasting resumes. Now I open my
          dashboard to see interviews waiting. It feels like cheating. Had 3
          offers on the table simultaneously.&rdquo;
        </blockquote>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Image
            src="/images/user-icon.png"
            alt="Tom Wilson"
            width={48}
            height={48}
            className="rounded-sm"
          />
          <div className="text-left">
            <p className="text-sm font-extrabold text-text-slate">Tom Wilson</p>
            <p className="mt-1 text-sm text-text-secondary">Junior Developer</p>
          </div>
        </div>
      </section>

      <GradientBand compact>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-[42px] font-extrabold leading-[1.02] text-[#241b35] sm:text-[52px]">
            Your next job search can feel a
            <br />
            lot less overwhelming
          </h2>
          <p className="mt-8 text-base leading-7 text-text-secondary">
            Set up your profile, upload your resume, and start finding matches
            in minutes.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button>Get Started &#9656;</Button>
            <Button variant="secondary">Find Your First Match</Button>
          </div>
        </div>
      </GradientBand>

      <div className="h-18 border-b border-border bg-[repeating-linear-gradient(135deg,#ffffff_0,#ffffff_6px,#fafbfc_6px,#fafbfc_8px)]" />

      <footer className="flex flex-col gap-8 px-10 py-12 sm:flex-row sm:items-center sm:justify-between">
        <Image
          src="/logo.png"
          alt="JobPilot"
          width={118}
          height={40}
          className="h-8 w-auto"
        />
        <nav className="flex flex-wrap gap-10 text-sm font-medium text-text-secondary">
          <a href="#" className="hover:text-text-primary">
            Dashboard
          </a>
          <a href="#" className="hover:text-text-primary">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-text-primary">
            Terms & Condition
          </a>
        </nav>
      </footer>
    </main>
  );
}
