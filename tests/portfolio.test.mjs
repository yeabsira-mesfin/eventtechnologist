import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join } from 'node:path';

const root = new URL('../', import.meta.url);
const read = (file) => readFileSync(new URL(file, root));
const source = (...paths) => paths.map(file => read(file).toString('utf8')).join('\n');

const certs = [
  'cvent-event-management',
  'cvent-event-management-advanced',
  'cvent-attendee-hub',
];

test('the original PDF certificates are present and unchanged', () => {
  const manifest = source('public/certificates/SHA256SUMS');
  for (const cert of certs) {
    const filename = `public/certificates/${cert}.pdf`;
    const data = read(filename);
    assert.equal(data.toString('ascii', 0, 5), '%PDF-');
    assert.ok(data.byteLength > 50_000);
    const sha = createHash('sha256').update(data).digest('hex');
    assert.ok(manifest.split('\n').includes(`${sha}  ${filename}`), `Digest mismatch for ${filename}`);
  }
});

test('every credential has a genuine lightweight WebP preview', () => {
  for (const cert of certs) {
    const preview = read(`public/previews/${cert}.webp`);
    assert.equal(preview.toString('ascii', 0, 4), 'RIFF');
    assert.equal(preview.toString('ascii', 8, 12), 'WEBP');
    assert.ok(preview.byteLength > 1000 && preview.byteLength < 50_000);
  }
});

test('portfolio has all four event sessions, impact claims and career disclosure', () => {
  const content = source('src/content.ts');
  const app = source('src/App.tsx', 'src/pages/Career.tsx');
  const agenda = source('src/sections/Agenda.tsx');
  for (const text of ['250+', '5,000+', '20–30', '2 years', 'admission items', 'audience segmentation', 'conditional visibility', 'Cvent Attendee Hub', 'SpotMe', 'InEvent']) {
    assert.ok(content.toLowerCase().includes(text.toLowerCase()), `Missing ${text}`);
  }
  for (const client of ['BCD Travel', 'YPO', 'Abbott', 'CDW']) assert.ok(content.includes(client));
  assert.ok(app.includes('CLIENT PROGRAMS SUPPORTED THROUGH MMCY'));
  assert.ok(content.includes('led a team of 4'));
  assert.ok(content.includes("'Cvent Developer'"), 'Career progression must include the distinct Cvent Developer role');
  assert.ok(app.includes('Six career stages'));
  assert.ok(app.includes('20–30'));
  assert.ok(!content.includes('200'+'+') && !content.includes('12'+'–20'), 'Outdated metrics must be removed');
  assert.equal((content.match(/id: '0[1-4]'/g) || []).length, 4);
  assert.ok(agenda.includes('sessionEvidence'));
  assert.ok(agenda.includes('useParams'));
});

test('navigation, links and alt text are handled in source', () => {
  const nav = source('src/components/SiteHeader.tsx');
  const app = source('src/App.tsx', 'src/pages/Career.tsx');
  const credentials = source('src/sections/Credentials.tsx');
  for (const id of ['experience','mobile-apps','sessions','career','credentials','contact']) assert.ok(nav.includes(id));
  assert.ok(nav.includes("event.key === 'Escape'"));
  assert.ok(nav.includes('aria-expanded={mobileOpen}'));
  assert.ok(nav.includes('hidden={!mobileOpen}'));
  assert.ok(credentials.includes('loading="lazy"'));
  assert.ok(credentials.includes('alt={`Preview of'));
  assert.ok(credentials.includes('rel="noopener noreferrer"'));
  assert.ok(app.includes('mailto:'));
  assert.ok(!source('src/content.ts', 'src/App.tsx').includes('https://yeabsiramesfin.com'));
  assert.ok(credentials.includes('Yeabsira Mefin'));
});

test('essential deployment files are present', () => {
  for (const filename of ['index.html', 'src/main.tsx', 'vite.config.ts', 'tsconfig.json', 'vercel.json', '.github/workflows/ci.yml']) {
    assert.ok(existsSync(new URL(filename, root)), `Missing ${filename}`);
  }
  const vercel = JSON.parse(source('vercel.json'));
  assert.equal(vercel.buildCommand, 'npm run build');
  assert.equal(vercel.outputDirectory, 'dist');
  assert.equal(vercel.rewrites[0].destination, '/index.html');
});

