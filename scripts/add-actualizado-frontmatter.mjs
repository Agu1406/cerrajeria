/**
 * Añade frontmatter "actualizado: YYYY-MM-DD" a los .md de barrios y servicios.
 * Uso: node scripts/add-actualizado-frontmatter.mjs [--dry-run]
 * --dry-run: solo muestra qué archivos se modificarían, sin escribir.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const FECHA = '2026-03-03';
const DRY_RUN = process.argv.includes('--dry-run');

const dirs = [
  path.join(root, 'src', 'content', 'barrios'),
  path.join(root, 'src', 'content', 'duplicado-llaves-coche-barrios'),
  path.join(root, 'src', 'content', 'puertas-antiokupas-barrios'),
];

let total = 0;
for (const dir of dirs) {
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.md'));
  for (const file of files) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf-8');
    // No tocar si ya tiene el campo
    if (/^actualizado:\s/m.test(content) || content.includes('\nactualizado:')) {
      continue;
    }
    // Solo archivos que empiezan con --- y tienen cierre --- (LF o CRLF)
    if (!content.startsWith('---\n') && !content.startsWith('---\r\n')) continue;
    const parts = content.split(/\r?\n---\r?\n/);
    if (parts.length < 2) continue;
    // parts[0] = "---\n...frontmatter body"; parts[1..] = body tras el cierre
    const newContent = parts[0].trimEnd() + '\nactualizado: ' + FECHA + '\n---\n' + parts.slice(1).join('\n---\n');
    if (DRY_RUN) {
      console.log('(dry-run) modificaría:', filePath);
    } else {
      fs.writeFileSync(filePath, newContent, 'utf-8');
    }
    total++;
  }
}
console.log(DRY_RUN ? 'Dry-run: se modificarían' : 'Añadido actualizado:', total, 'archivos');
