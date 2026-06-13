# Memory - JobPilot Feature 02 Auth

Last updated: 2026-06-13

## What was built

Implemented Feature 02 Auth from the build plan with an SSR-first InsForge OAuth flow.

Added auth client helpers in `lib/insforge-client.ts` and `lib/insforge-server.ts`.

Added OAuth routes:
- `app/api/auth/start/[provider]/route.ts` for Google/GitHub start
- `app/api/auth/callback/route.ts` for server-side code exchange and cookie set
- `app/api/auth/refresh/route.ts` for refresh handling
- `app/api/auth/logout/route.ts` for sign-out and cookie clear

Added route protection proxy in `proxy.ts` for `/dashboard`, `/profile`, and `/find-jobs`.

Added login UI and protected placeholders:
- `app/login/page.tsx`, `app/login/LoginCard.tsx`
- `app/dashboard/page.tsx`, `app/profile/page.tsx`, `app/find-jobs/page.tsx`

Updated tracking docs:
- `context/progress-tracker.md` marked Auth complete
- `ui-registry.md` added the Auth Shell entry

## Decisions made

Used server-side OAuth initiation and callback exchange to ensure refresh token cookies are set from server responses.

Standardized on `@insforge/sdk/ssr` helpers (`createServerClient`, `createRefreshAuthRouter`, `setAuthCookies`, `clearAuthCookies`, `updateSession`) instead of custom cookie logic.

Used Next 16 `proxy.ts` with `updateSession()` and token-cookie presence checks for protected route gating.

## Problems solved

Resolved Tailwind style warnings in the home page after auth-related edits.

Confirmed static workspace diagnostics were clean after implementation.

Diagnosed local dev startup confusion: a second `next dev` instance failed because another instance was already running on port 3000.

## Current state

Auth scaffolding is implemented and wired.

`/login` renders correctly on the running local app.

Environment values were reviewed, but auth runtime validity still depends on having correct non-secret/public InsForge env values in `.env.local` (especially the browser anon key value; keep secret values out of source control).

End-to-end provider callback flow (real Google/GitHub consent and return to `/dashboard`) still needs one final runtime pass.

## Next session starts with

Run the app, execute one full OAuth flow (Google or GitHub), and confirm callback exchange sets auth cookies and redirects to `/dashboard`.

Then verify protected-route behavior for `/dashboard`, `/profile`, and `/find-jobs` with and without auth cookies.

## Open questions

Is the current public anon key value in `.env.local` confirmed from the InsForge dashboard for this project?

Do both OAuth providers (Google and GitHub) already have redirect URLs configured for local development callback paths?
