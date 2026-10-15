# Asset Manifest — repository contents

**Regenerated:** 14 October 2026, from the tree at commit `aa5775d`.
This file replaces the earlier collection manifest, which described a layout
(`assets/profile.*`, `resume/…`) that the repository no longer uses.

---

## Repository layout

```
Portfolio/
├── .nojekyll                      tells GitHub Pages to skip the Jekyll build
├── 404.html                       custom not-found page
├── index.html  about.html  projects.html  research.html
├── knowledge.html  journey.html  contact.html  privacy.html  terms.html
├── robots.txt  sitemap.xml  manifest.json
├── README.md  MANIFEST.md  PROFILE-NOTES.md
│
├── assets/
│   ├── css/       style.css  components.css  utilities.css
│   │              animations.css  contact.css
│   ├── js/        main.js  navigation.js  theme.js
│   │              animations.js  contact.js
│   ├── files/     Kartik_H_CRS_Resume_2026.pdf
│   │              AI_Patient_Education_Narrative_Review_Report.docx
│   ├── git.keep   pre-existing placeholder
│   └── images/
│       ├── brand/     10 SVG lockups and symbols
│       ├── favicon/   favicon.ico  favicon.svg  favicon-16/32/48.png
│       │              apple-touch-icon.png  icon-192.png  icon-512.png
│       ├── icons/     (.gitkeep)
│       ├── og/        og-image.png  (1200×630 social card)
│       ├── profile/   profile.jpg  — the only portrait file
│       └── projects/  (.gitkeep)
│
├── certificates/  8 PDFs
├── projects/      telepharmacy-project.pdf
│                  telepharmacy-project-presentation.pdf
└── visuals/       smile-framework.webp
                   telepharmacy-infographic.webp
                   bridging-india-translation.webp
```

**Note:** `assets/images/profile/profile.png` (2 MB, referenced by no page) was
deleted. `profile.jpg` is the only portrait in the repository.

---

## Certificates (8 files)

| File | What it is |
|---|---|
| `ai-in-pharma-nsqf-l5.pdf` | AI in Pharma — LSSSDC / Skill India, NSQF Level 5 (Mar 2026) |
| `generative-ai-mastermind.pdf` | Generative AI Mastermind — Outskill (Dec 2025) |
| `google-ai-essentials.pdf` | Google AI Essentials — Coursera |
| `google-prompting-essentials.pdf` | Google Prompting Essentials — Coursera |
| `use-ai-as-creative-partner.pdf` | Use AI as a Creative or Expert Partner — Coursera |
| `good-clinical-practice-nida.pdf` | Good Clinical Practice — NIDA Clinical Trials Network |
| `junior-medical-writer-internship.pdf` | YuvaIntern — certificate of experience |
| `bpharm-pdc-certificate.pdf` | **B.Pharm provisional degree certificate**, RGUHS, exam Oct 2025, reg. 20P3770 |

**Note:** the last file is an academic degree certificate, not a certification.
The site states **7 certifications** and lists the degree separately under
Education on `journey.html`.

---

## Visual assets

Each infographic is stored once, as WebP. The PNG originals were removed from the
repository, so there is no separate PNG fallback: the pages reference the WebP in
both the `<picture>` source and the `<img>`. WebP is supported by all current
browsers.

| File | Dimensions | Size | Notes |
|---|---|---|---|
| `visuals/smile-framework.webp` | 1535×2688 | 0.26 MB | **Served.** S.M.I.L.E. visual-communication asset |
| `visuals/telepharmacy-infographic.webp` | 1536×2690 | 0.49 MB | **Served** |
| `visuals/bridging-india-translation.webp` | 1408×768 | 0.22 MB | **Served** |
| `assets/images/og/og-image.png` | 1200×630 | 180 KB | Social preview card |
| `assets/images/profile/profile.jpg` | 1254×1254 | 435 KB | Portrait used by the site |

Served payload for the three infographics is **~0.97 MB**, down from ~13.7 MB
(93% smaller) at full resolution. The PNG originals are no longer in the
repository, so the repository is correspondingly smaller.

---

## Contact

**One number only.** The portfolio routes every enquiry through a single line
(+91 91415 42270). The separate business line is used on the Digital Setup site
and is deliberately not published here.

---

## Source

Collected originally from the Google Drive folder
`1Q4H74IroLXvXIfUwr_zxzLZAepc7hgR7` (13 October 2026). Contact details,
locations and academic facts are recorded in `PROFILE-NOTES.md`.
