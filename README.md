# Trip Ledger

Track who gave how much and when, where the money was spent, and what everyone gets back at the end of the trip.

## Keeping your Firebase key out of GitHub
The key never goes in the repo. GitHub builds `config.js` from Secrets when it deploys.

1. GitHub repo → Settings → Secrets and variables → Actions → New repository secret. Add:
   `FIREBASE_API_KEY`, `FIREBASE_AUTH_DOMAIN`, `FIREBASE_PROJECT_ID`, `FIREBASE_STORAGE_BUCKET`,
   `FIREBASE_MESSAGING_SENDER_ID`, `FIREBASE_APP_ID`, and `ADMIN_EMAILS` (comma separated, for example `a@x.com,b@y.com`).
2. Settings → Pages → Build and deployment → Source: **GitHub Actions**.
3. Push to `main`. The Actions tab shows the deploy. Your site opens at `https://YOUR-NAME.github.io/REPO/`.

A browser app must be able to read its own config, so the key is still visible to someone who opens DevTools on the live site.
Firebase web keys identify the project and are not passwords. Protect the project with these two steps:

**Restrict the key (2 minutes):** Google Cloud Console → APIs and Services → Credentials → your browser key →
Application restrictions: HTTP referrers → add `https://YOUR-NAME.github.io/*` and `http://localhost:*` → Save.

**App Check (optional, stronger):** create a reCAPTCHA v3 key at google.com/recaptcha/admin, register it in Firebase → App Check,
add the site key as the secret `APPCHECK_SITE_KEY`, then enforce App Check for Firestore after you see normal traffic.

## Firestore rules
Firebase Console → Firestore Database → Rules → paste your `firestore.rules` → Publish.
`firestore.rules` is git-ignored because it holds your admin emails. `firestore.rules.example` is the shareable copy.

## Admin accounts
Firebase → Authentication → Users → Add user, using the same emails you put in `ADMIN_EMAILS` and in the rules.

## Local testing
Copy `config.example.js` to `config.js`, fill it in, and open `index.html` through a local server.
With no `config.js`, the app runs in demo mode (data stays in your browser).
