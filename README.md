# 华夏 · Huaxia — Chinese Culture Guide

Bilingual (Ukrainian / English) interactive guide to Chinese culture for students of Chinese.
Static site on GitHub Pages: https://bolshakovnestor.github.io/huaxia/

- 14 culture topics, 34 province pages, interactive map, dictionary with pinyin and audio, quizzes
- Separate crawlable page for every topic and province in both languages, `hreflang` links, `sitemap.xml`

## Editing
Content lives in `src/data/uk.js` and `src/data/en.js` (same structure; `{汉字|pīnyīn|translation}` = interactive term).
UI strings: `src/ui.mjs`. Code and styles: `src/assets/`.

After any change run:

```bash
node build.mjs
```

This regenerates `uk/`, `en/`, `assets/`, `sitemap.xml`, `robots.txt`. Commit everything and push to `main`.

## Data sources
Census figures: NBS China, 7th National Population Census (2020). Map outlines: Apache ECharts 4 (Apache-2.0).
Photos: Wikipedia / Wikimedia Commons (loaded at runtime). Each topic lists its sources.
