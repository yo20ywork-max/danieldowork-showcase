import { classifySheet } from './classify.js';

const samples = [
  { headers: ['KOL名稱', '匯款金額'], sheetName: 'Example collaboration' },
  { headers: ['圖文', '預計完成日期'], sheetName: 'Example schedule' },
  { headers: ['媒體', '報導連結'], sheetName: 'Example coverage' },
  { headers: ['拍攝日期'], sheetName: 'Example production' },
  { headers: ['Title'], sheetName: 'Miscellaneous' },
];
for (const sample of samples) {
  console.log(JSON.stringify({ ...sample, template: classifySheet(sample.headers, sample.sheetName) }));
}
