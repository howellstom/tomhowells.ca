# Tom Howells Family Law – website

A simple static site (no build step) for GitHub Pages.

## Files
- `index.html`, `about.html`, `services.html`, `contact.html` – the four pages
- `styles.css` – all styling (colours and fonts are variables at the top)
- `favicon.ico` – tab icon (keep in the root folder, next to `index.html`)
- `assets/` – logo, headshot and favicon/touch icons used by the pages

## Publish on GitHub Pages
1. Create a new repository on GitHub and upload everything in this folder, keeping the `assets/` folder.
2. In the repository go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then **Save**.
4. After a minute or two the site will be live at `https://<username>.github.io/<repo>/`.

To use a custom domain (for example tomhowells.ca), add it under **Settings → Pages → Custom domain** and set the DNS records GitHub lists.

## Editing
- The header and footer are repeated in each HTML file, so update all four if you change them.
- To swap the headshot, replace `assets/headshot.jpg` (3:4 portrait works best, around 900×1200).
