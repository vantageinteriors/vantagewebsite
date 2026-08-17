import { randomBytes } from "node:crypto";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const clientId = process.env.GITHUB_OAUTH_CLIENT_ID;
  if (!clientId) return new NextResponse("GitHub CMS authentication is not configured.", { status: 503 });

  const state = randomBytes(24).toString("hex");
  const origin = new URL(request.url).origin;
  const callback = `${origin}/api/auth/callback`;
  const authorize = new URL("https://github.com/login/oauth/authorize");
  authorize.searchParams.set("client_id", clientId);
  authorize.searchParams.set("redirect_uri", callback);
  authorize.searchParams.set("scope", "repo,user:email");
  authorize.searchParams.set("state", state);

  const response = NextResponse.redirect(authorize);
  response.cookies.set("vantage_cms_oauth_state", state, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 600,
    path: "/",
  });
  return response;
}
