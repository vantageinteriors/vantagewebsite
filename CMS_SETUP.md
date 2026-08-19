# Vantage Interiors Gallery CMS setup

The website includes a GitHub-backed Decap CMS at `/admin`. Gallery items are
stored as JSON in `content/gallery`, and uploaded images are committed to
`public/uploads`. Publishing an entry creates a GitHub commit and triggers the
existing Vercel deployment.

## One-time GitHub setup

1. Sign in to the GitHub account that will manage the gallery. It must have
   write access to `vantageinteriors/vantagewebsite`.
2. Open **GitHub → Settings → Developer settings → OAuth Apps → New OAuth App**.
3. Set **Homepage URL** to:
   `https://vantageinteriorsandconstruction.com`
4. Set **Authorization callback URL** to:
   `https://vantageinteriorsandconstruction.com/api/auth/callback`
5. Create the app and generate a client secret.

## One-time Vercel setup

In **Vercel → Project → Settings → Environment Variables**, add these to the
Production environment:

- `GITHUB_OAUTH_CLIENT_ID`: the OAuth App client ID
- `GITHUB_OAUTH_CLIENT_SECRET`: the OAuth App client secret (mark sensitive)

Redeploy after saving them. The owner can then visit
`https://vantageinteriorsandconstruction.com/admin`, sign in with
GitHub, and create, edit, reorder, or delete gallery items.

Never commit the client secret or paste it into website source files.
