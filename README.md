# Boutique Fashion Template

A premium, reusable website template for fashion boutiques / designers,
built with React + TypeScript + Tailwind CSS. This copy is configured as a
demo for **Shri Maayaas Fashion Designers** (Madurai, Tamil Nadu), but no
component contains business-specific logic — everything business-specific
lives in `src/config/`.

The site is a single-page showcase whose one conversion path is:
**Visitor → sees designs → likes a design → WhatsApp enquiry / call → visits the store.**
There is no cart, login, payment, or backend — by design.

## Stack

React 19 · TypeScript · Tailwind CSS v4 · Framer Motion (scroll reveals) · Vite

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Where everything lives

```
src/
  config/
    siteConfig.ts    <- business name, contact info, colors, SEO, copy
    images.ts         <- every image URL on the site, in one place
    collections.ts     <- the 6 "Explore Our Collections" cards
    products.ts        <- the 8 "Featured Designs"
    gallery.ts          <- masonry gallery images (pulls from images.ts)
    testimonials.ts     <- testimonial placeholders
  lib/
    whatsapp.ts       <- createWhatsAppLink() + message templates
    theme.ts           <- applies siteConfig.colors as CSS variables
    seo.ts              <- document title + LocalBusiness structured data
  components/
    ui/               <- Button, SectionHeading, Container (generic)
    layout/            <- Navbar, Footer, WhatsAppFloatButton
    sections/           <- one file per homepage section (Hero, Gallery, ...)
  App.tsx             <- assembles all sections in order
```

No component ever hard-codes a business name, phone number, image URL, or
color — they all read from `src/config/`.

## Reusing this template for a different boutique

1. **Business info, contact, copy** — edit `src/config/siteConfig.ts`.
   Every placeholder is written as `[ADD VERIFIED ...]`; replace all of them
   before publishing. Also update the `<title>`/meta tags in `index.html`
   to match (see the comment block at the top of that file).
2. **Colors** — edit `businessConfig.colors` in `siteConfig.ts`. These are
   applied at runtime as CSS custom properties (`src/lib/theme.ts`), so the
   whole site re-skins from one object — no CSS or Tailwind config edits
   needed.
3. **Logo** — `businessConfig.logoText` is currently a text wordmark (no
   image logo was available for this business). To use an image logo,
   replace the `<span>` in `src/components/layout/Navbar.tsx` and
   `Footer.tsx` with an `<img>` sourced from `src/config/images.ts`.
4. **Images** — replace URLs in `src/config/images.ts`. For a real launch,
   drop photography into `public/images/<category>/...` and point the
   `src` fields at those local paths instead of remote URLs.
5. **Collections / Featured Designs / Gallery / Testimonials** — edit the
   corresponding file in `src/config/`. Arrays can be any length; the
   editorial mosaic layouts (`CollectionShowcase`, `CraftSection`) apply a
   layout pattern by position, so they stay balanced regardless of count.
6. **Navigation links** — `NAV_ITEMS` at the top of `Navbar.tsx` (a
   business without bridal wear, for example, would remove that item).
7. **WhatsApp / phone** — `businessConfig.whatsapp` and `.phone` in
   `siteConfig.ts`. All WhatsApp CTAs across the site route through
   `src/lib/whatsapp.ts` (`createWhatsAppLink`, `whatsappMessages`), so
   changing the number in one place updates every button.

## Content policy baked into this template

Per the brief, this demo intentionally does **not** invent:
years of experience, awards, certifications, customer counts, prices, or
testimonials. Anywhere real information wasn't publicly verifiable, the
config uses an explicit `[ADD VERIFIED ...]` placeholder rather than a
guess — grep the codebase for `ADD VERIFIED` to find every field that
still needs real business info before this goes live.

`businessConfig.address` was populated from a public Justdial listing for
Shri Maayaas Fashion Designers (Branch in Vasantha Nagar, Madurai) — verify
it with the owner. Phone, WhatsApp, Instagram, Facebook, Google Maps link
and opening hours could not be publicly verified and are placeholders.

## Images currently in the demo

`src/config/images.ts` currently points at Unsplash stock photography
(free to use, verified to resolve) chosen to look like premium Indian
bridal/fashion editorial photography, purely so the demo looks complete.
**Replace every image with real photography of the boutique before
sharing this beyond an internal demo** — the comment block at the top of
`images.ts` explains how.

## Deploying

This is a static Vite build — `npm run build` produces `dist/`, which can
be deployed to any static host:

- **Vercel / Netlify**: connect the repo, build command `npm run build`,
  output directory `dist`.
- **Any static host** (S3+CloudFront, GitHub Pages, etc.): upload the
  contents of `dist/` after running the build.

No environment variables or backend services are required.
