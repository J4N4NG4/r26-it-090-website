# R26-IT-090 Research Project Website

Next.js website for **AI-Powered Smart Service Marketplace for Household Maintenance in Sri Lanka** (SLIIT, 2026), hosted free on Vercel.

## Folder structure — what you will edit

```
r26-it-090-website/
├── data/siteData.js        ← ALL text, names, dates, image paths, download links
├── public/
│   ├── images/
│   │   ├── cover.svg       ← hero background (replace with cover.jpg)
│   │   ├── team/           ← member + supervisor photos
│   │   └── gallery/        ← optional field-visit photos
│   └── documents/
│       ├── presentations/  ← proposal / progress / final slides (PDF)
│       ├── proposal/       ← individual proposal reports
│       ├── final/          ← individual final theses + group report
│       └── research-paper/ ← research paper
├── app/page.js             ← page layout (no need to edit)
├── app/globals.css         ← colours & styling (edit :root to change theme)
└── components/             ← navbar, gallery, contact form, icons
```

Anything inside `public/` is served from the site root:
`public/images/team/IT22551320.jpg` → `/images/team/IT22551320.jpg`
(never write `/public/` in the path).

---

## Step 1 — Install the tools (once)

1. Install **Node.js LTS** from https://nodejs.org (includes `npm`). Check: `node -v`
2. Install **Git** from https://git-scm.com. Check: `git --version`
3. Install **VS Code** (recommended).
4. Create free accounts on **GitHub** and **Vercel** (sign up to Vercel *with GitHub*).

## Step 2 — Run the website on your computer

```bash
cd r26-it-090-website
npm install        # downloads Next.js (first time only)
npm run dev        # starts the site
```
Open http://localhost:3000. Every time you save a file the page refreshes automatically.
Stop it with `Ctrl + C`.

## Step 3 — Add team & supervisor photos

1. Crop each photo to a **square** (e.g. 600×600 px) and compress it (https://squoosh.app) to under ~200 KB.
2. Name them simply, no spaces: `IT22551320.jpg`, `IT22283658.jpg`, `IT22643704.jpg`, `IT22137982.jpg`, `supervisor.jpg`, `co-supervisor.jpg`.
3. Copy them into `public/images/team/`.
4. In `data/siteData.js`, change each `photo` line, e.g.
   `photo: "/images/team/IT22551320.jpg"`

## Step 4 — Add the cover image

Put a wide photo (about 1920×1080, under ~500 KB) in `public/images/` as `cover.jpg`, then in `siteData.js` set
`coverImage: "/images/cover.jpg"`. A dark overlay is added automatically so the text stays readable.

## Step 5 — Add downloadable files

1. Export slides and reports as **PDF** (smaller, opens everywhere).
2. Rename with no spaces, e.g. `progress-presentation-1.pdf`, `IT22551320-final-thesis.pdf`.
3. Copy into the matching folder in `public/documents/`.
4. In `siteData.js` → `documentGroups`, fill in `file`:
   ```js
   { label: "Progress Presentation I", file: "/documents/presentations/progress-presentation-1.pdf" },
   ```
   Empty `file: ""` shows a grey **Coming soon** button.

**Large files (over ~25 MB, e.g. .pptx with videos):** don't put them in the project — GitHub refuses files over 100 MB and large files make every deploy slow. Upload to Google Drive → Share → *Anyone with the link* → copy link, and paste it as the `file` value:
```js
{ label: "Final Presentation", file: "https://drive.google.com/file/d/XXXX/view?usp=sharing" },
```
Links starting with `http` open in a new tab automatically.

## Step 6 — Update the other content

All in `data/siteData.js`: `project` (name, tagline), `researchGaps`, `literatureReview`, `features`, `gallery`, `milestones` (**check the dates**), `references`, `contact` (add the group email — the contact form opens the visitor's email app addressed to it).

## Step 7 — Put the code on GitHub

1. On github.com → **New repository** → name `r26-it-090-website` → Public → *don't* add a README → Create.
2. In the project folder:
   ```bash
   git init
   git add .
   git commit -m "First version of project website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/r26-it-090-website.git
   git push -u origin main
   ```
   (`node_modules` and `.next` are excluded by `.gitignore` — that is correct.)
3. Add teammates: repo → Settings → Collaborators → Add people.

## Step 8 — Deploy on Vercel (free Hobby plan)

1. https://vercel.com → **Add New… → Project**.
2. **Import** the `r26-it-090-website` repository (allow Vercel to access it if asked).
3. Framework preset: **Next.js** (auto-detected). Leave build settings as default.
4. Click **Deploy**. After ~1 minute you get a link like `https://r26-it-090-website.vercel.app`.
5. Optional nicer name: Project → Settings → Domains → edit to e.g. `r26-it-090.vercel.app` (if free).

## Step 9 — Updating the live site later

```bash
git add .
git commit -m "Add progress presentation 2"
git push
```
Vercel rebuilds and updates the live site automatically within a minute or two. Check `npm run build` locally first if you changed code — if the build fails, Vercel keeps the previous version online.

## Troubleshooting

| Problem | Fix |
|---|---|
| Image shows broken | Path must start with `/images/...`, match file name and capitals exactly (Vercel is case-sensitive: `.JPG` ≠ `.jpg`). |
| Download gives 404 | File not in `public/documents/...`, or path typo, or file not committed (`git status`). |
| `git push` rejected (file too large) | Remove the big file, use a Google Drive link instead. |
| Contact button greyed out | Add `email` in `contact` in `siteData.js`. |
| `npm` not found | Reinstall Node.js and reopen the terminal. |
