/**
 * Génère l'image Open Graph par défaut (1200×630) et l'apple-touch-icon
 * dans l'identité « Signal » : nuit d'encre, faisceau et astérisque vermillon.
 * Usage : node scripts/generate-og.mjs
 * Les fichiers générés sont commités : ce script ne tourne qu'à la demande.
 */
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

const night = '#0c0b09';
const light = '#f4f1ea';
const soft = '#978f81';
const vermillon = '#ff4a1f';

// Astérisque signature, dessiné en traits (indépendant des polices installées).
function asterisk(cx, cy, r, stroke, width, opacity = 1) {
  const lines = [];
  for (let i = 0; i < 6; i++) {
    const a = (i * Math.PI) / 3 + Math.PI / 2;
    const x2 = cx + r * Math.cos(a);
    const y2 = cy + r * Math.sin(a);
    lines.push(
      `<line x1="${cx}" y1="${cy}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="${stroke}" stroke-width="${width}" stroke-linecap="round" opacity="${opacity}"/>`
    );
  }
  return lines.join('');
}

const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs>
    <radialGradient id="glow" cx="0.18" cy="0.75" r="0.8">
      <stop offset="0" stop-color="${vermillon}" stop-opacity="0.22"/>
      <stop offset="0.55" stop-color="${vermillon}" stop-opacity="0.05"/>
      <stop offset="1" stop-color="${vermillon}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="${night}"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  ${asterisk(1080, 120, 260, vermillon, 40, 0.08)}
  <text x="80" y="112" font-family="DejaVu Sans, sans-serif" font-size="40" font-weight="bold" fill="${light}">Vermillon</text>
  ${asterisk(318, 100, 18, vermillon, 7)}
  <text x="1120" y="108" font-family="DejaVu Sans Mono, monospace" font-size="21" fill="${soft}" text-anchor="end">studio de landing pages</text>
  <text x="80" y="330" font-family="DejaVu Sans, sans-serif" font-size="58" font-weight="bold" fill="${light}">Des landing pages sur mesure,</text>
  <text x="80" y="408" font-family="DejaVu Sans, sans-serif" font-size="58" font-weight="bold" fill="${vermillon}">construites comme des argumentaires.</text>
  <rect x="80" y="470" width="150" height="4" rx="2" fill="${vermillon}"/>
  <text x="80" y="540" font-family="DejaVu Sans Mono, monospace" font-size="23" fill="${soft}">Stratégie · Copywriting · Design · Développement</text>
</svg>`;

const icon = `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180">
  <rect width="180" height="180" rx="36" fill="${night}"/>
  ${asterisk(90, 90, 52, vermillon, 20)}
</svg>`;

await mkdir(new URL('../public/og/', import.meta.url), { recursive: true });
await sharp(Buffer.from(og)).png().toFile(new URL('../public/og/default.png', import.meta.url).pathname);
await sharp(Buffer.from(icon)).png().toFile(new URL('../public/apple-touch-icon.png', import.meta.url).pathname);
console.log('OG et icônes « Signal » générés dans public/');
