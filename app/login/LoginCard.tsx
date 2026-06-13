"use client";

import { useTransition } from "react";

type Provider = "google" | "github";

export function LoginCard() {
  const [pending, startTransition] = useTransition();

  function startOAuth(provider: Provider) {
    startTransition(() => {
      window.location.href = `/api/auth/start/${provider}`;
    });
  }

  return (
    <section className="w-full max-w-[460px] rounded-xl border border-border bg-surface p-8 shadow-[0_24px_80px_rgba(16,24,40,0.12)]">
      <div className="space-y-3 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          JobPilot Auth
        </p>
        <h1 className="text-3xl font-extrabold tracking-tight text-text-slate">
          Sign in to continue
        </h1>
        <p className="text-sm leading-6 text-text-secondary">
          Use Google or GitHub to get into your dashboard, profile, and job
          search flow.
        </p>
      </div>

      <div className="mt-8 space-y-3">
        <button
          type="button"
          onClick={() => startOAuth("google")}
          disabled={pending}
          className="flex h-11 w-full items-center justify-center rounded-sm border border-border bg-surface-secondary text-sm font-semibold text-text-slate transition-colors hover:bg-surface-muted disabled:cursor-not-allowed disabled:opacity-70"
        >
          Continue with Google
        </button>
        <button
          type="button"
          onClick={() => startOAuth("github")}
          disabled={pending}
          className="flex h-11 w-full items-center justify-center rounded-sm border border-border bg-text-slate text-sm font-semibold text-white transition-colors hover:bg-text-darkest disabled:cursor-not-allowed disabled:opacity-70"
        >
          Continue with GitHub
        </button>
      </div>

      <p className="mt-6 text-center text-xs leading-5 text-text-muted">
        By continuing, you agree to use JobPilot with your authenticated
        account session.
      </p>
    </section>
  );
}