/**
 * Génère l'image Open Graph par défaut (1200×630) et l'apple-touch-icon
 * dans l'identité « Nuit cinématique » : noir profond, halos froids,
 * texte lumineux, accent glacier.
 * Usage : node scripts/generate-og.mjs
 * Les fichiers générés sont commités : ce script ne tourne qu'à la demande.
 */
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

const night = '#07080a';
const light = '#eef0f3';
const soft = '#84878d';
const accent = '#9fd0e8';

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
    <radialGradient id="a1" cx="0.12" cy="1.2" r="0.9">
      <stop offset="0" stop-color="#4078b4" stop-opacity="0.36"/>
      <stop offset="1" stop-color="#4078b4" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="a2" cx="0.9" cy="1.1" r="0.7">
      <stop offset="0" stop-color="#2ea0a0" stop-opacity="0.18"/>
      <stop offset="1" stop-color="#2ea0a0" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="t" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0.25" stop-color="#ffffff"/>
      <stop offset="1" stop-color="#b9bcc2"/>
    </linearGradient>
    <linearGradient id="acc" x1="0" y1="0" x2="1" y2="0.3">
      <stop offset="0" stop-color="#cfe9f7"/>
      <stop offset="1" stop-color="#7fb6d8"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="${night}"/>
  <rect width="1200" height="630" fill="url(#a1)"/>
  <rect width="1200" height="630" fill="url(#a2)"/>
  <line x1="0" y1="520" x2="1200" y2="520" stroke="${light}" stroke-opacity="0.14"/>
  <text x="80" y="110" font-family="DejaVu Sans, sans-serif" font-size="38" font-weight="bold" fill="${light}">Vermillon</text>
  ${asterisk(288, 98, 14, accent, 6)}
  <text x="1120" y="104" font-family="DejaVu Sans Mono, monospace" font-size="20" fill="${soft}" text-anchor="end">studio de landing pages</text>
  <text x="600" y="310" font-family="DejaVu Sans, sans-serif" font-size="56" font-weight="bold" fill="url(#t)" text-anchor="middle">Des landing pages sur mesure,</text>
  <text x="600" y="386" font-family="DejaVu Sans, sans-serif" font-size="56" font-weight="bold" fill="url(#acc)" text-anchor="middle">construites comme des argumentaires.</text>
  <rect x="440" y="440" width="320" height="58" rx="29" fill="#f5f6f7"/>
  <text x="600" y="478" font-family="DejaVu Sans, sans-serif" font-size="24" font-weight="bold" fill="#0b0c0e" text-anchor="middle">Présenter votre projet →</text>
  <text x="600" y="575" font-family="DejaVu Sans Mono, monospace" font-size="21" fill="${soft}" text-anchor="middle">Stratégie · Copywriting · Design · Développement</text>
</svg>`;

const icon = `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180">
  <defs>
    <radialGradient id="g" cx="0.3" cy="1.15" r="1.15">
      <stop offset="0" stop-color="#1c3c55"/>
      <stop offset="0.6" stop-color="#0b1017"/>
      <stop offset="1" stop-color="#07080a"/>
    </radialGradient>
  </defs>
  <rect width="180" height="180" rx="36" fill="url(#g)"/>
  ${asterisk(90, 90, 50, accent, 18)}
</svg>`;

await mkdir(new URL('../public/og/', import.meta.url), { recursive: true });
await sharp(Buffer.from(og)).png().toFile(new URL('../public/og/default.png', import.meta.url).pathname);
await sharp(Buffer.from(icon)).png().toFile(new URL('../public/apple-touch-icon.png', import.meta.url).pathname);
console.log('OG et icônes « Nuit cinématique » générés dans public/');
