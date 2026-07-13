/**
 * Génère l'image Open Graph par défaut (1200×630) et l'apple-touch-icon
 * dans l'identité « Chambre noire » : noir neutre, blanc argentique,
 * accent froid, anneaux concentriques.
 * Usage : node scripts/generate-og.mjs
 * Les fichiers générés sont commités : ce script ne tourne qu'à la demande.
 */
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

const night = '#0b0b0c';
const silver = '#edeef0';
const soft = '#85878f';
const accent = '#a8cce0';

function rings(cx, cy, radii, stroke) {
  return radii
    .map(
      (r, i) =>
        `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${stroke}" stroke-width="1" opacity="${(0.06 + i * 0.015).toFixed(3)}"/>`
    )
    .join('');
}

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
  <rect width="1200" height="630" fill="${night}"/>
  ${rings(1060, 315, [420, 350, 285, 225, 170, 120], silver)}
  <text x="80" y="112" font-family="DejaVu Serif, serif" font-style="italic" font-size="42" fill="${silver}">Vermillon</text>
  ${asterisk(292, 100, 15, accent, 6)}
  <text x="1120" y="106" font-family="DejaVu Sans Mono, monospace" font-size="20" fill="${soft}" text-anchor="end">studio de landing pages</text>
  <text x="80" y="330" font-family="DejaVu Serif, serif" font-size="60" fill="${silver}">Des landing pages sur mesure,</text>
  <text x="80" y="412" font-family="DejaVu Serif, serif" font-style="italic" font-size="60" fill="${accent}">construites comme des argumentaires.</text>
  <rect x="80" y="472" width="120" height="2" fill="${accent}"/>
  <text x="80" y="540" font-family="DejaVu Sans Mono, monospace" font-size="22" fill="${soft}">Stratégie · Copywriting · Design · Développement</text>
</svg>`;

const icon = `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180">
  <rect width="180" height="180" rx="36" fill="${night}"/>
  ${asterisk(90, 90, 50, accent, 18)}
</svg>`;

await mkdir(new URL('../public/og/', import.meta.url), { recursive: true });
await sharp(Buffer.from(og)).png().toFile(new URL('../public/og/default.png', import.meta.url).pathname);
await sharp(Buffer.from(icon)).png().toFile(new URL('../public/apple-touch-icon.png', import.meta.url).pathname);
console.log('OG et icônes « Chambre noire » générés dans public/');
