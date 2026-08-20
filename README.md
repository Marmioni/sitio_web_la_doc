# AUTHOR NAME Website

Astro 5 + TypeScript author website with a modern editorial magazine / literary fanzine identity.

## Run the site

Install dependencies:

```bash
npm install
```

Start the local website:

```bash
npm run dev
```

Build the production version:

```bash
npm run build
```

## Where to update common content

Most non-technical edits are simple text replacements.

### Author name

Search for `AUTHOR NAME` across the project and replace it with the real author name.

Important files:

- `src/components/Navigation.astro`
- `src/components/Footer.astro`
- `src/pages/index.astro`
- `src/layouts/BaseLayout.astro`
- `public/og-placeholder.svg`

### Author photo

The homepage currently shows a clear portrait placeholder.

To use a real photo:

1. Create a folder named `public/images`.
2. Add the author photo there, for example `public/images/author-photo.jpg`.
3. Open `src/pages/index.astro`.
4. Replace the `PlaceholderBox` inside `<div class="hero-art">` with:

```astro
<img class="author-photo" src="/images/author-photo.jpg" alt="Portrait of AUTHOR NAME" />
```

Then add styling for `.author-photo` in `src/styles/global.css` if needed.

### Adding or replacing any `.author-photo` image (author photo, book cover, podcast cover)

Every image using the `.author-photo` class (`src/styles/global.css`) is forced into a
**4:5 (width:height) box** with `object-fit: cover`. `cover` fills the box by cropping
whatever doesn't fit — it does not letterbox or resize the design.

This means: if the image you upload is **not already 4:5**, part of it will be
invisibly cropped on the live site, even though it looks fine in a normal image viewer.

**What happened with `portada_libro.jpg` (2026-08):** the real book cover for *La Corte
de las Diablas* is a standard 2:3 portrait (1024x1536, ratio 0.667), narrower/taller than
the site's 4:5 box (ratio 0.8). The browser cropped the top and bottom margins to fill
the box, cutting into the black background around the title and author name and making
the cover feel zoomed-in compared to the original file.

**Fix used:** since the cover's background is solid black, we padded the image with
black bars on the left/right (pillarboxing) until it matched 4:5 exactly, instead of
cropping or changing the CSS. This shows the full artwork with no visible seam, because
the padding color matches the image's own background.

**Checklist for the next image you add here:**

1. Check the image's ratio: `width / height`. Target is `4 / 5 = 0.8`.
2. If it's already close to `0.8`, you can use it as-is.
3. If it's narrower/taller than `0.8` (e.g. a typical book cover) and has a solid-color
   background, pad it left/right with that same solid color until `width / height = 0.8`.
   If it's wider/shorter than `0.8`, pad it top/bottom instead.
4. If the background is **not** a solid color (e.g. a busy photo), padding will leave a
   visible bar — in that case crop it to 4:5 around the important subject instead, or ask
   for the CSS `aspect-ratio` to be changed if the crop can't avoid losing key content.
5. Keep the same filename when swapping an existing image, so no other file needs to
   change.

### Social links

Homepage social links are in `src/pages/index.astro`:

```ts
const socialLinks = ["Instagram", "TikTok", "YouTube", "Substack", "Amazon Author Page"];
```

Footer social links are in `src/components/Footer.astro`.

Replace each `href="#"` with the real profile URL.

### Books and short stories

Books and short stories are stored as content files in:

```text
src/content/books/
```

To add a new book, copy one JSON file and edit:

```json
{
  "title": "Book Title",
  "kind": "Book",
  "year": "2030",
  "description": "Short description."
}
```

For short stories, use:

```json
{
  "title": "Story Title",
  "kind": "Short Story",
  "year": "2030",
  "description": "Short description."
}
```

### Featured book

The featured book section is on the homepage:

```text
src/pages/index.astro
```

Search for `NEW BOOK`, `Buy on Amazon`, and `Read Sample`.

Replace the placeholder title, description, and links.

### Podcast

The podcast section is on the homepage:

```text
src/pages/index.astro
```

Search for `PODCAST`, `Listen`, and `Episodes`.

Replace the placeholder text and button links.

### Interviews and media

Interview cards are stored in:

```text
src/content/media/
```

Each JSON file controls one media card:

```json
{
  "title": "Interview Title",
  "outlet": "Magazine or Podcast Name",
  "url": "https://example.com"
}
```

### Bibliography page

The bibliography page is:

```text
src/pages/bibliografia.astro
```

It currently uses a polished placeholder component. Replace `PlaceholderPage` with real sections when ready.

## Site configuration (domain, language)

Two values that were left at their template defaults and never customized (fixed 2026-08-20):

- **`astro.config.mjs` → `site`**: was `https://example.com`. Astro uses this value to build the
  `canonical` link and `og:url`/`twitter` meta tags on every page (`src/layouts/BaseLayout.astro`).
  With the wrong domain, every page's canonical URL and social-share link pointed at
  `example.com` instead of `marmioni.com` — search engines and link previews (Twitter/Facebook/etc.)
  would have picked up the wrong URL. Now set to `https://marmioni.com`.
- **`src/layouts/BaseLayout.astro` → `<html lang="...">`**: was `"en"`, but all site content is in
  Spanish. This tells browsers, screen readers, and search engines the wrong language for the page
  (wrong pronunciation in screen readers, wrong language targeting in search results). Now `"es"`.

Neither of these caused a build failure — they were syntactically valid values, just factually
wrong ones, so `astro build` succeeded with them and shipped incorrect metadata silently. If a
similar template default needs customizing later, check `BaseLayout.astro` for hardcoded English
placeholder text (e.g. the fallback `description` prop) the same way.

## Design notes

- No horror imagery is used.
- The palette is `#F5F1EA`, `#111111`, `#FF3B30`, `#00D1B2`, and `#FFCC00`.
- Typography is set up for modern sans-serif fonts using system fallbacks.
- The site is mobile-first, responsive, and intentionally fast because there are no heavy image or animation dependencies yet.
# sitio_web_la_doc
