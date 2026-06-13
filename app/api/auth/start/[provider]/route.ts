import { createServerClient } from "@insforge/sdk/ssr";
import { NextResponse, type NextRequest } from "next/server";

const allowedProviders = new Set(["google", "github"]);

export async function GET(
  request: NextRequest,
  context: { params: { provider: string } },
) {
  const { provider } = context.params;

  if (!allowedProviders.has(provider)) {
    return NextResponse.json({ error: "unsupported_provider" }, { status: 400 });
  }

  const client = createServerClient();
  const redirectTo = new URL("/api/auth/callback", request.url).toString();
  const { data, error } = await client.auth.signInWithOAuth(provider, {
    redirectTo,
    skipBrowserRedirect: true,
  });

  if (error || !data?.url || !data?.codeVerifier) {
    return NextResponse.json(
      { error: error?.message ?? "oauth_start_failed" },
      { status: error?.statusCode ?? 400 },
    );
  }

  const response = NextResponse.redirect(data.url);
  response.cookies.set("insforge_code_verifier", data.codeVerifier, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 10 * 60,
  });

  return response;
}