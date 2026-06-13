import { clearAuthCookies, createServerClient } from "@insforge/sdk/ssr";
import { NextResponse } from "next/server";

export async function POST() {
  const client = createServerClient();
  await client.auth.signOut();

  const response = NextResponse.json({ ok: true });
  clearAuthCookies(response.cookies);

  return response;
}