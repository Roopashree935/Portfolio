# Asset Manifest — repository contents

**Regenerated:** 14 October 2026, from the actual tree at commit `93208a8`.
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
│       ├── profile/   profile.jpg  profile.png
│       └── projects/  (.gitkeep)
│
├── certificates/  8 PDFs
├── projects/      telepharmacy-project.pdf
│                  telepharmacy-project-presentation.pdf
└── visuals/       smile-framework.png
                   telepharmacy-infographic.png
                   bridging-india-translation.png
```

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
The site's "8 Certifications" hero figure counts it; there are **7 actual
certifications**. Reconcile before publishing the number.

---

## Visual assets

| File | Dimensions | Size | Notes |
|---|---|---|---|
| `visuals/smile-framework.png` | 1535×2688 | 5.7 MB | Tall portrait infographic; the S.M.I.L.E. visual-communication asset |
| `visuals/telepharmacy-infographic.png` | 1536×2690 | 6.9 MB | Tall portrait infographic |
| `visuals/bridging-india-translation.png` | 1408×768 | 1.7 MB | Landscape diagram |
| `assets/images/og/og-image.png` | 1200×630 | 180 KB | Social preview card |
| `assets/images/profile/profile.jpg` | 1254×1254 | 435 KB | Portrait actually used by the site |
| `assets/images/profile/profile.png` | 1254×1254 | 2.0 MB | **Unused** — no page references it |

The three `visuals/` infographics account for almost all of the repository's
size and are the heaviest thing a visitor downloads. Converting them to WebP
and serving responsive widths would be the single biggest speed win.

---

## Source

Collected originally from the Google Drive folder
`1Q4H74IroLXvXIfUwr_zxzLZAepc7hgR7` (13 October 2026). Contact details,
locations and academic facts are recorded in `PROFILE-NOTES.md`.
