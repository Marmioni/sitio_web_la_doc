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

## Design notes

- No horror imagery is used.
- The palette is `#F5F1EA`, `#111111`, `#FF3B30`, `#00D1B2`, and `#FFCC00`.
- Typography is set up for modern sans-serif fonts using system fallbacks.
- The site is mobile-first, responsive, and intentionally fast because there are no heavy image or animation dependencies yet.
# sitio_web_la_doc
