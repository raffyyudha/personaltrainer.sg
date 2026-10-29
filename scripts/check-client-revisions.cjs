// Run with: node scripts/check-client-revisions.cjs
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');

require.extensions['.ts'] = (module, filename) => {
  const source = fs.readFileSync(filename, 'utf8');
  module._compile(ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS },
  }).outputText, filename);
};

const { generatePseoMatrix, getPseoPageBySlug } = require('../src/data/pseo/matrix.ts');
const pages = generatePseoMatrix();
assert.equal(pages.length, 19866, 'Do not add programmatic pages during these revisions');
assert.equal(new Set(pages.map(page => page.slug)).size, pages.length, 'Slugs must be unique');
assert.equal(getPseoPageBySlug('nonexistent-client-revision-page'), null);

const forbidden = /1,500\+|Clients Transformed|fast weight loss|melt body fat fast|rapid fat loss|injury rehabilitation|injury recovery|rehab fitness|\bhealing\b|guaranteed results|promise you|results the first day|correction of upper cross syndrome|relief from chronic neck stiffness|restores muscle balance|releases tight fascia|improved spinal alignment|changes within \d|changes in \d|transform your body composition in \d/i;
const repeated = /\b1[- ]on[- ]1\s+1[- ]on[- ]1\b|\b(personal training|personal trainer)\s+\1\b|\b(in|at|near|the|for|and|to|with|on|around|by)\s+\2\b/i;
for (const page of pages) {
  // Landmarks may name ActiveSG; venues and service descriptions may not.
  const { landmarks, slug, service, ...copy } = page;
  const { id, slug: serviceSlug, ...serviceCopy } = service;
  const text = JSON.stringify({ ...copy, service: serviceCopy });
  assert(!forbidden.test(text), `Outdated claim on ${slug}`);
  assert(!/ActiveSG/i.test(text), `ActiveSG presented as training venue on ${slug}`);
  for (const value of [page.h1, page.keyword, page.metaTitle, page.metaDesc, page.introParagraph]) {
    assert(!repeated.test(value), `Repeated template wording on ${slug}`);
  }
  if (page.locationType === 'Condominium') {
    assert(page.introParagraph.includes('approved condominium gyms'), `Unqualified condo venue on ${slug}`);
    assert(page.faqs.some(faq => faq.answer.includes('confirm that your intended training arrangement is permitted')));
  }
}

const tampines = getPseoPageBySlug('personal-training-tampines-singapore');
assert.equal(tampines.introParagraph, 'Looking for structured one to one personal training in Tampines? PersonalTrainer.sg provides personalised coaching around Tampines, including suitable home spaces, approved condominium gyms, private training facilities and outdoor training areas. Whether your goal is weight management, strength improvement, better stamina, body toning or general fitness, your programme will be planned according to your current fitness level, ability, goals and schedule.');
const postpartum = getPseoPageBySlug('personal-trainer-for-postpartum-near-city-hall-mrt-singapore');
assert.equal(postpartum.demographic.focusArea, 'Postpartum strength, pelvic floor awareness, gradual core strengthening, mobility and safe return to exercise, subject to medical clearance where required');
assert(getPseoPageBySlug('posture-rehab-the-sail-at-marina-bay-singapore'));

function checkSource(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const filename = path.join(dir, entry.name);
    if (entry.isDirectory()) checkSource(filename);
    else if (/\.tsx?$/.test(filename)) assert(!forbidden.test(fs.readFileSync(filename, 'utf8')), `Outdated claim in ${filename}`);
  }
}
checkSource(path.join(__dirname, '../src'));
console.log(`PASS: ${pages.length} existing URLs; ${pages.filter(page => page.locationType === 'Condominium').length} condominium pages; all template copy and client examples checked.`);
