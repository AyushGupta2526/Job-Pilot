import { LoginCard } from "./LoginCard";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(235,216,255,0.88)_0,rgba(235,216,255,0)_25%),radial-gradient(circle_at_80%_20%,rgba(180,214,252,0.78)_0,rgba(180,214,252,0)_28%),linear-gradient(180deg,#f7f8fc_0%,#ffffff_100%)]" />
      <LoginCard />
    </main>
  );
}