/**
 * Génère l'image Open Graph par défaut (1200×630) et l'apple-touch-icon.
 * Usage : node scripts/generate-og.mjs
 * Les fichiers générés sont commités : ce script ne tourne qu'à la demande.
 */
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

const paper = '#f7f3ea';
const ink = '#1a1713';
const vermillon = '#e24a1b';

// Astérisque signature, dessiné en traits (indépendant des polices installées).
function asterisk(cx, cy, r, stroke, width) {
  const lines = [];
  for (let i = 0; i < 6; i++) {
    const a = (i * Math.PI) / 3 + Math.PI / 2;
    const x2 = cx + r * Math.cos(a);
    const y2 = cy + r * Math.sin(a);
    lines.push(
      `<line x1="${cx}" y1="${cy}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="${stroke}" stroke-width="${width}" stroke-linecap="round"/>`
    );
  }
  return lines.join('');
}

const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="${paper}"/>
  <rect x="40" y="40" width="1120" height="550" fill="none" stroke="${ink}" stroke-width="2"/>
  <line x1="40" y1="150" x2="1160" y2="150" stroke="${ink}" stroke-width="1"/>
  <text x="80" y="110" font-family="serif" font-size="44" font-weight="600" fill="${ink}">Vermillon</text>
  ${asterisk(354, 96, 20, vermillon, 8)}
  <text x="1120" y="110" font-family="monospace" font-size="22" fill="#857d69" text-anchor="end">studio de landing pages</text>
  <text x="80" y="300" font-family="serif" font-size="52" fill="${ink}">Des landing pages sur mesure,</text>
  <text x="80" y="375" font-family="serif" font-size="52" font-style="italic" fill="${vermillon}">construites comme des argumentaires.</text>
  <text x="80" y="520" font-family="monospace" font-size="24" fill="#57503f">Stratégie · Copywriting · Design · Développement</text>
</svg>`;

const icon = `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180">
  <rect width="180" height="180" fill="${paper}"/>
  ${asterisk(90, 90, 52, vermillon, 20)}
</svg>`;

await mkdir(new URL('../public/og/', import.meta.url), { recursive: true });
await sharp(Buffer.from(og)).png().toFile(new URL('../public/og/default.png', import.meta.url).pathname);
await sharp(Buffer.from(icon)).png().toFile(new URL('../public/apple-touch-icon.png', import.meta.url).pathname);
console.log('OG et icônes générés dans public/');
