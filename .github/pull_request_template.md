### PR title

Short, imperative summary: Add <project-name> project

### Description

What does this PR do and why?

- Adds a new project entry in `src/lib/constants/projects.ts`
- Adds an MDX article in `src/content/<slug>.mdx`
- Adds assets under `public/projects/<slug>/`

### Changes included

- New constant in `src/lib/constants/projects.ts` with fields: `name`, `slug`, `description`, `markdownPath` (e.g., `"content/<slug>.mdx"`), `image`, optional `heroImage`, optional `screenshotUrls`, `tags`, `links`, and optional `homepage`
- New MDX file at `src/content/<slug>.mdx` with frontmatter and content
- New assets in `public/projects/<slug>/`: `preview.png`, `hero.png` (or `.jpg` when appropriate), and screenshots `1.jpg` ...

### How to validate

1) Lint and build

```bash
pnpm lint && pnpm build
```

2) Run locally and verify pages

```bash
pnpm dev
```

- Visit `/projects` and confirm the new card appears (if `homepage: true`)
- Visit `/projects/<slug>` and verify content and images render
- Check OG image endpoint: `/api/og/projects/<slug>`

3) Assets sanity check

- `public/projects/<slug>/preview.png` exists
- `public/projects/<slug>/hero.png` (or `.jpg`) exists and is referenced by the project (if used)
- `public/projects/<slug>/1.jpg` ... numbered screenshots exist and are referenced in `screenshotUrls` (if used)

### Screenshots / recordings (optional but recommended)

Attach relevant screenshots of the project page and card.

### Checklist

- [ ] `src/lib/constants/projects.ts`: added a new project object with correct `slug`
- [ ] `markdownPath` points to `content/<slug>.mdx`
- [ ] `image` set to `/projects/<slug>/preview.png`
- [ ] `heroImage` set to `/projects/<slug>/hero.png` (if used)
- [ ] `screenshotUrls` paths start with `/projects/<slug>/` and have correct file names
- [ ] `src/content/<slug>.mdx` created with frontmatter and content (can import custom components)
- [ ] Assets added under `public/projects/<slug>/` (preview, hero, screenshots)
- [ ] `pnpm lint` and `pnpm build` succeed locally

---

### How to add a new project (EN)

- Add a JSON object to the `PROJECTS` list in `src/lib/constants/projects.ts`
- Save app screenshots to `public/projects/<slug>/1.jpg`, `2.jpg`, ... (or any image extension)
- Save the hero image to `public/projects/<slug>/hero.png` (used in `projects/[slug]/page.tsx`)
- Generate the preview image via Figma ([Mockup Plugin](https://www.figma.com/community/plugin/817043359134136295/mockup-plugin-devices-mockups-print-mockups-warp-and-distort-transformation))) and save as `public/projects/<slug>/preview.png`
- Write a markdown article at `src/content/<slug>.mdx` explaining the project; you can import custom components (see `farville.mdx` as an example)

---

Reference: [GitHub Docs: Creating a pull request template](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/creating-a-pull-request-template-for-your-repository)


