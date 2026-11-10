// Copy this file to config.js for local testing. config.js is ignored by git.
// On GitHub, the deploy workflow creates config.js from your repository Secrets.
window.FIREBASE_CONFIG = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.firebasestorage.app",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
window.ADMIN_EMAILS = ["admin1@example.com", "admin2@example.com"];
window.APPCHECK_SITE_KEY = ""; // optional reCAPTCHA v3 site key
