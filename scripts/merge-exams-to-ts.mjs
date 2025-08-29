import { promises as fs } from "fs";

const INBOX_DIR = "data/pending";
const TS_TARGET = "src/data/mockExams.ts";

function isValidExam(e) {
  return e && typeof e.id === "string" && e.title && Array.isArray(e.questions);
}

// Lê array do mockexams.ts
async function readFromTs(tsPath) {
  try {
    const ts = await fs.readFile(tsPath, "utf8");
    const match = ts.match(/export const mockExams\s*=\s*(\[[\s\S]*?\]);/);
    if (!match) return [];

    // Extrai só o conteúdo do array
    let arrTxt = match[1]
      .replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g, '"$2":') // chaves sem aspas -> aspas
      .replace(/'/g, '"') // aspas simples -> duplas
      .replace(/,\s*([}\]])/g, "$1"); // trailing commas

    return JSON.parse(arrTxt);
  } catch {
    return [];
  }
}

// Junta todos os JSONs novos
async function readInbox() {
  try {
    const files = (await fs.readdir(INBOX_DIR)).filter(f =>
      f.toLowerCase().endsWith(".json")
    );
    let all = [];
    for (const f of files) {
      const data = JSON.parse(await fs.readFile(`${INBOX_DIR}/${f}`, "utf8"));
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
  const existing = await readFromTs(TS_TARGET);
  const incoming = await readInbox();

  const { merged, added } = mergeById(existing, incoming);

  if (added > 0) {
    await fs.writeFile(TS_TARGET, toTsModule(merged), "utf8");
    console.log(`Merge concluído: +${added} novos exames; total ${merged.length}.`);
  } else {
    console.log("Nenhum exame novo adicionado.");
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
