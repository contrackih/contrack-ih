# Deploying to contrack.ng

contrack.ng is hosted on **cPanel (LiteSpeed)**, not Vercel. The site is static — build it, then upload the `dist/` folder contents to `public_html`.

## 1. Build

```bash
npm install
npm run build
```

This creates `dist/` containing `index.html`, `favicon.svg`, `assets/` and a hidden `.htaccess`.

## 2. Upload via cPanel

1. Log in at **https://contrack.ng:2083** → **File Manager** → `public_html`.
2. **Settings → Show Hidden Files** (so `.htaccess` is visible).
3. Rename the existing `index.html` to `index-old.html` (backup of the previous site).
4. Zip the **contents** of `dist/` (not the folder itself), upload the zip to `public_html`, then **Extract** it there and delete the zip.
   - Files must end up as `public_html/index.html`, `public_html/assets/...`, `public_html/.htaccess`.
5. Visit https://contrack.ng and hard-refresh (Cmd/Ctrl + Shift + R).

## 3. Check

- Homepage loads with the hero slider.
- https://contrack.ng/projects and https://contrack.ng/projects/zari load (not 404). If they 404, `.htaccess` is missing from `public_html`.
- Submit the contact form once — it posts to Formspree (`xgoqgqpo`) and should arrive at the Formspree account's email.

## Rolling back

Delete the new files and rename `index-old.html` back to `index.html`.
