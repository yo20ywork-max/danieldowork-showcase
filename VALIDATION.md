# Validation

Checked on 2026-09-06 with the pinned TypeScript 5.6.3 compiler.

- TypeScript build: passed.
- `npm run demo`: passed; the five synthetic header sets produced `kol`, `social`, `media`, `video`, and `custom` respectively.

This is a small executable example of the existing classification module. It does not exercise the private application's full import pipeline, database, or deployed web UI. The sample runner was added for public review; the classification logic was extracted from the existing source.
