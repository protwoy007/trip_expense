// Runs in GitHub Actions. Builds _site/config.js from repository secrets.
const fs = require('fs');
const e = process.env;
const need = ['FIREBASE_API_KEY', 'FIREBASE_AUTH_DOMAIN', 'FIREBASE_PROJECT_ID', 'FIREBASE_APP_ID'];
const missing = need.filter(k => !e[k]);
if (missing.length) console.warn('Missing Firebase secrets, using local backend: ' + missing.join(', '));
const cfg = missing.length ? null : {
  apiKey: e.FIREBASE_API_KEY, authDomain: e.FIREBASE_AUTH_DOMAIN, projectId: e.FIREBASE_PROJECT_ID,
  storageBucket: e.FIREBASE_STORAGE_BUCKET || '', messagingSenderId: e.FIREBASE_MESSAGING_SENDER_ID || '', appId: e.FIREBASE_APP_ID
};
const admins = (e.ADMIN_EMAILS || '').split(',').map(s => s.trim().toLowerCase()).filter(Boolean);
fs.mkdirSync('_site', {recursive: true});
fs.writeFileSync('_site/config.js',
  'window.FIREBASE_CONFIG=' + JSON.stringify(cfg) + ';\nwindow.ADMIN_EMAILS=' + JSON.stringify(admins) + ';\nwindow.APPCHECK_SITE_KEY=' + JSON.stringify(e.APPCHECK_SITE_KEY || '') + ';\n');
console.log('config.js created');
