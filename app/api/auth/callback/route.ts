import { NextRequest, NextResponse } from "next/server";

function callbackPage(message: string) {
  const safeMessage = JSON.stringify(message).replace(/</g, "\\u003c");
  return `<!doctype html><html><head><meta charset="utf-8"><title>Vantage CMS Login</title></head><body style="background:#21110c;color:#eee4d2;font-family:system-ui;display:grid;place-items:center;min-height:100vh;margin:0"><p>Completing secure sign-in…</p><script>(function(){var message=${safeMessage};function send(){if(!window.opener){document.body.innerHTML='<p>Return to the Gallery Admin window and try again.</p>';return;}window.opener.postMessage('authorizing:github','*');setTimeout(function(){window.opener.postMessage(message,'*');window.close();},300);}send();})();</script></body></html>`;
}

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");
  const state = request.nextUrl.searchParams.get("state");
  const expectedState = request.cookies.get("vantage_cms_oauth_state")?.value;
  const clientId = process.env.GITHUB_OAUTH_CLIENT_ID;
  const clientSecret = process.env.GITHUB_OAUTH_CLIENT_SECRET;

  if (!code || !state || !expectedState || state !== expectedState || !clientId || !clientSecret) {
    return new NextResponse(callbackPage("authorization:github:error:Invalid or expired authentication request"), { status: 400, headers: { "Content-Type": "text/html; charset=utf-8" } });
  }

  const tokenResponse = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code, redirect_uri: `${request.nextUrl.origin}/api/auth/callback` }),
    cache: "no-store",
  });
  const payload = await tokenResponse.json() as { access_token?: string; error_description?: string };
  const message = payload.access_token
    ? `authorization:github:success:${JSON.stringify({ token: payload.access_token, provider: "github" })}`
    : `authorization:github:error:${payload.error_description ?? "GitHub authentication failed"}`;

  const response = new NextResponse(callbackPage(message), { headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" } });
  response.cookies.delete("vantage_cms_oauth_state");
  return response;
}
