type TemplateKey = 'kol' | 'social' | 'video' | 'media' | 'custom';

// Detect which template a sheet's headers best match.
// Pure rule-based — fast, deterministic, no AI calls.

interface Rule { template: TemplateKey; match: (headers: string[]) => boolean }

const has = (headers: string[], ...keywords: string[]) =>
  keywords.every((k) => headers.some((h) => h.includes(k)));

const hasAny = (headers: string[], ...keywords: string[]) =>
  keywords.some((k) => headers.some((h) => h.includes(k)));

const RULES: Rule[] = [
  // KOL: 名字 + 匯款 + 平台 (the canonical KOL collab sheet)
  { template: 'kol', match: (h) => has(h, 'KOL名稱') && hasAny(h, '匯款金額', '匯款帳號', '勞報') },
  { template: 'kol', match: (h) => has(h, 'KOL名稱', '露出平台') },
  { template: 'kol', match: (h) => has(h, '本名', '匯款銀行') },

  // Social: 圖文 / 短影 排程
  { template: 'social', match: (h) => hasAny(h, '社群媒體文章', 'Po文日期', '導流量', '文章內容') && hasAny(h, '圖文', '圖片', '照片', '關鍵字') },
  { template: 'social', match: (h) => has(h, '圖文', '預計完成日期') },
  { template: 'social', match: (h) => has(h, '圖文') && hasAny(h, '完成日期', '發佈日期', '上架日期') },
  { template: 'video', match: (h) => has(h, '短影') && hasAny(h, '預計完成日期', '完成日期') },

  // Media: 媒體曝光
  { template: 'media', match: (h) => has(h, '媒體', '報導連結') },
  { template: 'media', match: (h) => hasAny(h, '記者') && has(h, '報導連結') },

  // Video: 拍攝/剪輯
  { template: 'video', match: (h) => hasAny(h, '拍攝日期', '剪輯進度', '上架日期') },
];

export function classifySheet(headers: string[], sheetName: string): TemplateKey {
  for (const r of RULES) {
    if (r.match(headers)) return r.template;
  }
  // Sheet-name based fallback
  if (/媒體|新聞|報導/.test(sheetName)) return 'media';
  if (/影音|短影|YT|Reels|TikTok/.test(sheetName)) return 'video';
  if (/KOL|代言|合作/.test(sheetName)) return 'kol';
  if (/代操|社群|圖文/.test(sheetName)) return 'social';
  return 'custom';
}
