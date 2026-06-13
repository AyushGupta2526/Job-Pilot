### Landing Page

File: app/page.tsx
Last updated: 2026-06-10

| Property         | Class           |
| ---------------- | --------------- |
| Background       | `bg-surface`, `bg-surface-tertiary`, `bg-surface-muted`, pastel radial gradient bands |
| Border           | `border-border`, `border-x`, `border-b`, `border-t`, `border-r` |
| Border radius    | `rounded-sm` for buttons/avatar, `rounded-md` for embedded product images |
| Text - primary   | `text-text-primary`, `text-text-slate`, hero `text-[#241b35]` |
| Text - secondary | `text-text-secondary` |
| Spacing          | `px-10`, `px-12`, `px-16`, `py-12`, `py-16`, `py-18`, `py-24`, `py-28`, `gap-4`, `gap-10`, `gap-12` |
| Hover state      | `hover:bg-text-darkest`, `hover:bg-surface-secondary`, `hover:text-text-primary` |
| Shadow           | `shadow-sm` on buttons; product shadows are embedded in PNG assets |
| Accent usage     | `text-accent`, `border-l-accent`, `border-l-success`, dark CTA `bg-text-slate` |

**Pattern notes:**
The homepage uses a restrained SaaS layout: thin borders, squared 4px controls, large heavy headings, muted body copy, and full-width section bands rather than nested cards. Keep future landing sections on the same centered `max-w-[1280px]` canvas with `border-border` dividers, pale neutral surfaces, and accent color only for labels or slim left markers.

### Auth Shell

Files: app/login/page.tsx, app/login/LoginCard.tsx, app/dashboard/page.tsx, app/profile/page.tsx, app/find-jobs/page.tsx
Last updated: 2026-06-13

| Property         | Class |
| ---------------- | ----- |
| Canvas           | `min-h-screen`, `max-w-[1280px]`, `border-x`, `bg-surface` |
| Login backdrop   | layered radial gradients with soft blue and lavender glow |
| Card styling     | `rounded-xl`, `border-border`, `shadow-[0_24px_80px_rgba(16,24,40,0.12)]` |
| Button styling   | full-width 44px controls, Google light variant, GitHub dark variant |
| Placeholder copy | large `text-4xl` headings with concise status paragraphs |

**Pattern notes:**
Auth screens stay visually aligned with the landing page but are simpler and denser. Keep the login card centered with a gradient wash, and keep protected placeholders intentionally minimal so the auth boundary is obvious.
