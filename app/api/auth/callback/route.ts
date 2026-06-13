import { createServerClient, setAuthCookies } from "@insforge/sdk/ssr";
import { cookies } from "next/headers";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("insforge_code");

  if (!code) {
    return NextResponse.redirect(new URL("/login?error=missing_code", request.url));
  }

  const cookieStore = await cookies();
  const codeVerifier = cookieStore.get("insforge_code_verifier")?.value;

  if (!codeVerifier) {
    return NextResponse.redirect(new URL("/login?error=missing_verifier", request.url));
  }

  const client = createServerClient();
  const { data, error } = await client.auth.exchangeOAuthCode(code, codeVerifier);

  if (error || !data?.accessToken || !data?.refreshToken) {
    return NextResponse.redirect(new URL("/login?error=exchange_failed", request.url));
  }

  const response = NextResponse.redirect(new URL("/dashboard", request.url));
  setAuthCookies(response.cookies, {
    accessToken: data.accessToken,
    refreshToken: data.refreshToken,
  });
  response.cookies.delete("insforge_code_verifier");

  return response;
}