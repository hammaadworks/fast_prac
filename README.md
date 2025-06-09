# Astro with Tailwind

```sh
npm create astro@latest -- --template with-tailwindcss
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/with-tailwindcss)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/with-tailwindcss)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/with-tailwindcss/devcontainer.json)

Astro comes with [Tailwind](https://tailwindcss.com) support out of the box. This example showcases how to style your Astro project with Tailwind.

For complete setup instructions, please see our [Tailwind Integration Guide](https://docs.astro.build/en/guides/integrations-guide/tailwind).

---

Prompt Memory:

```md
# Sister's Nikah Website – Astro.js Project Summary

## 🕌 Purpose
Build a sleek, modern, and spiritually uplifting wedding invitation website for your sister's Nikah, with features such as:
- Countdown timer to Nikah
- Particle effects and interactive cursor/hover highlights
- Dua Wall for guest blessings
- Donation link to a Muslim Orphanage
- Live YouTube stream embed
- Timeline of events (Nikah, Valima)
- Contact & RSVP section

---

## ✅ Progress Overview

### ✅ Tech Stack
- **Astro.js** (Static Site Generator)
- **React with shadcn/ui** (for interactive UI components)
- **TailwindCSS** (for styling)
- **Supabase** (for backend features like Dua Wall)
- **Deployment**: GitHub Pages

### ✅ Hero + Countdown
- Countdown timer implemented using a global `NIKAH_DATE_TIMESTAMP`.
- Conditional captions based on time difference from Nikah:
  - `-1hr`: Show "Come to the Masjid"
  - `0`: "Nikah has begun"
  - `+1.5hr`: "Valima has begun"
  - `+6hr`: "Alhamdulillah complete. May ALLAH SWT bless the couple. Aameen"

### ✅ Particle Effects
- Particle popper on every click requested (confetti).
- Attempted via custom canvas + mousePosition.
- Transition to **Magic UI** or **shadcn/ui** based effects being explored.

### ✅ Formatted Date in Hero
- Global constant `NIKAH_DATE_TIMESTAMP` used.
- Display format:
```

Friday, 14th June 2025
17 Dhul-Hijjah 1446 AH
After Maghrib Salah, In-sha-Allah

````
- Handled using `date-fns` `format()` and rendered via `<br />` instead of `\n`.

---

## 🧠 Lessons Learned / Fixes

### 🔧 Scoped Variables in Markdown frontmatter

* Issue: `const` used between `---` not in scope in `<script>` tag.
* Fix: Use `define:vars={{ target }}` when passing props into Markdown pages in Astro.

### ❌ `\n` does not render new lines in HTML

* Fix: Use `<br />` or wrap with `<div class="whitespace-pre-line">`.

### 🧩 Confetti Effects

* Not working as expected using previous implementation.
* Plan: Switch to Magic UI or lightweight React confetti libs if needed.

---

## 📌 Next Steps

### 🔄 1. Finalize Working Confetti Effect

* Ensure it pops on every click.
* Can be added inside `onClick` handler or `useEffect` for the countdown timer.

### 📦 2. Complete Supabase Integration

* For **Dua Wall** backend (submission and listing).
* Auth not needed; just an open form + read-only list.

### 🖼 3. Wedding Event Timeline

* Use shadcn `Card`, `Accordion`, or timeline-like vertical stepper.

### 🎥 4. Embed Live YouTube Stream

* Embed component to accept `videoId` and render `iframe`.

### 🧾 5. Add Donation Section

* Link to **Muslim Orphanage Trust**.
* Styled CTA button, possibly with Tailwind animation.

### 🧭 6. Contact / RSVP

* Include phone number or WhatsApp link.
* Optional: Google Form for RSVP.

---

## 📁 Directory Structure (suggested)

```
src/
  components/
    CountdownTimer.tsx
    ShadcnEffects.tsx
    NikahDate.ts
    YouTubeEmbed.tsx
    DuaWall.tsx
  pages/
    index.astro
  layouts/
    BaseLayout.astro
  styles/
    global.css
```

---

## 📅 Global Constants

```ts
// src/constants/NikahDate.ts
export const NIKAH_DATE_TIMESTAMP = new Date("2025-06-14T18:45:00+05:30").getTime(); // Adjust Maghrib time as needed
export const NIKAH_DATE_HIJRI = "17 Dhul-Hijjah 1446 AH";
```

---

## 🧠 Tips

* Always wrap React component imports in `client:*` hydration directives in Astro.
* For multi-line strings, use `dangerouslySetInnerHTML` or `<br />`.
* Use Tailwind `whitespace-pre-line` for formatted blocks.
* Use `date-fns` for formatting and `Intl.DateTimeFormat` for locale flexibility.

---

## 📖 Useful Astro Docs

* [Astro + React](https://docs.astro.build/en/guides/integrations-guide/react/)
* [Client Directives](https://docs.astro.build/en/reference/directives-reference/#clientload)
* [Astro with Tailwind](https://docs.astro.build/en/guides/integrations-guide/tailwind/)

---

```
