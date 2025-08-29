import { promises as fs } from 'fs';
import path from 'path';

const INBOX_DIR = 'data/pending';
const TS_TARGET = 'src/data/mockexams.ts';

function isValidExam(e) {
  return e && typeof e.id === 'string' && e.title && Array.isArray(e.questions);
}

async function tryExtractFromTS(tsPath) {
  const ts = await fs.readFile(tsPath, 'utf8');
  const m = ts.match(/export\s+const\s+mockExams\s*=\s*(\[[\s\S]*?\]);?/);
  if (!m) return [];
  let arrTxt = m[1]
    .replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g, '"$2":') // chaves sem aspas -> aspas
    .replace(/'/g, '"')
    .replace(/,\s*([}\]])/g, '$1');
  return JSON.parse(arrTxt);
}

async function gatherInbox(dir) {
  try {
    const files = (await fs.readdir(dir)).filter(f => f.endsWith('.json'));
    let all = [];
    for (const f of files) {
      const txt = await fs.readFile(path.join(dir, f), 'utf8');
      const data = JSON.parse(txt);
      all.push(...(Array.isArray(data) ? data : [data]));
    }
    return all;
  } catch {
    return [];
  }
}

function mergeById(base, additions) {
  const map = new Map(base.map(e => [e.id, e]));
  let added = 0;
  for (const e of additions) {
    if (isValidExam(e) && !map.has(e.id)) {
      map.set(e.id, e);
      added++;
    }
  }
  return { merged: Array.from(map.values()), added };
}

function toTsModule(exams) {
  const json = JSON.stringify(exams, null, 2);
  return `// AUTO-GERADO pelo workflow
export const mockExams = ${json};

export default mockExams;
`;
}

async function main() {
  const existing = await tryExtractFromTS(TS_TARGET);
  const incoming = await gatherInbox(INBOX_DIR);

  const { merged, added } = mergeById(existing, incoming);

  await fs.writeFile(TS_TARGET, toTsModule(merged), 'utf8');

  console.log(`Merge concluído: +${added} novos exames; total ${merged.length}.`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
