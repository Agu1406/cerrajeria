import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const barriosDir = path.join(root, 'src', 'content', 'barrios');
const duplicadoDir = path.join(root, 'src', 'content', 'duplicado-llaves-coche-barrios');
const antiokupasDir = path.join(root, 'src', 'content', 'puertas-antiokupas-barrios');

const INTRO_DUPLICADO = `En {nombre} realizamos duplicado de llaves de coche y mandos a domicilio. Tanto si necesitas una llave de reserva como si has perdido la original, nos desplazamos a tu ubicación con el equipo necesario para la mayoría de marcas y modelos.`;

const LLEGADA_DUPLICADO = `A {nombre} llegamos normalmente en 20–40 minutos desde que confirmamos la cita. Te damos un presupuesto orientativo por teléfono.`;

const INTRO_ANTIOKUPAS = `En {nombre} instalamos y reforzamos puertas antiokupas para viviendas y locales vacíos. Refuerzo de cerraduras, instalación de puertas de seguridad y asesoramiento para disuadir intrusiones.`;

const LLEGADA_ANTIOKUPAS = `A {nombre} llegamos en 25–45 minutos desde la confirmación. Te indicamos opciones y precios por teléfono antes del desplazamiento.`;

function escapeYaml(str) {
  if (str.includes('\n') || str.includes(':') || str.includes('"')) return `"${str.replace(/"/g, '\\"')}"`;
  return str;
}

function getNombre(content) {
  const m = content.match(/nombre:\s*["']([^"']+)["']/);
  return m ? m[1] : '';
}

const files = fs.readdirSync(barriosDir).filter((f) => f.endsWith('.md'));
fs.mkdirSync(duplicadoDir, { recursive: true });
fs.mkdirSync(antiokupasDir, { recursive: true });

for (const file of files) {
  const slug = path.basename(file, '.md');
  const content = fs.readFileSync(path.join(barriosDir, file), 'utf-8');
  const nombre = getNombre(content);
  if (!nombre) {
    console.warn('Skip (no nombre):', file);
    continue;
  }

  const dupBody = `---
nombre: ${escapeYaml(nombre)}
intro: ${escapeYaml(INTRO_DUPLICADO.replace('{nombre}', nombre))}
llegadaTexto: ${escapeYaml(LLEGADA_DUPLICADO.replace('{nombre}', nombre))}
---
`;
  fs.writeFileSync(path.join(duplicadoDir, file), dupBody, 'utf-8');

  const antiBody = `---
nombre: ${escapeYaml(nombre)}
intro: ${escapeYaml(INTRO_ANTIOKUPAS.replace('{nombre}', nombre))}
llegadaTexto: ${escapeYaml(LLEGADA_ANTIOKUPAS.replace('{nombre}', nombre))}
---
`;
  fs.writeFileSync(path.join(antiokupasDir, file), antiBody, 'utf-8');
}

console.log('Generados:', files.length, 'barrios x 2 colecciones');
