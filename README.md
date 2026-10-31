# Trip Ledger setup

1. console.firebase.google.com → Add project → Build → Firestore Database → Create (production mode).
2. Firestore → Rules → paste `firestore.rules` → Publish.
3. Build → Authentication → Sign-in method → enable Email/Password → Users → Add user:
   - Email: `admin@trip.app`
   - Password: `admin123` (change it later in the app: Settings → Admin password)
4. Project settings → Your apps → Web (`</>`) → copy `firebaseConfig` → paste into `FIREBASE_CONFIG` at the top of `index.html`.
5. Authentication → Settings → Authorized domains → add `YOUR-USERNAME.github.io`.
6. Push these files to a GitHub repo → Settings → Pages → Deploy from branch → `main` / root.

Login: username `admin`, password `admin123`. Everyone else opens the link and views only.
Leave `FIREBASE_CONFIG = null` to try the app in demo mode (data stays in your browser only).
