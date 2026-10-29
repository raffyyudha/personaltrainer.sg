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
const impliedClaims = /will make you achieve your goals faster|100% safe|needing fast results|joint lubrication|moving seamlessly without injury|preventing spinal strain|trial session fees are 100% waivable/i;
const repeated = /\b1[- ]on[- ]1\s+1[- ]on[- ]1\b|\b(personal training|personal trainer)\s+\1\b|\b(in|at|near|the|for|and|to|with|on|around|by)\s+\2\b/i;
for (const page of pages) {
  // Landmarks may name ActiveSG; venues and service descriptions may not.
  const { landmarks, slug, service, ...copy } = page;
  const { id, slug: serviceSlug, ...serviceCopy } = service;
  const text = JSON.stringify({ ...copy, service: serviceCopy });
  assert(!forbidden.test(text), `Outdated claim on ${slug}`);
  assert(!impliedClaims.test(text), `Unsupported outcome or incomplete trial condition on ${slug}`);
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
    else if (/\.tsx?$/.test(filename)) {
      const source = fs.readFileSync(filename, 'utf8');
      assert(!forbidden.test(source), `Outdated claim in ${filename}`);
      assert(!impliedClaims.test(source), `Unsupported outcome or incomplete trial condition in ${filename}`);
      assert(!source.includes('https://personaltrainer.sg'), `URL must use the final www hostname in ${filename}`);
    }
  }
}
checkSource(path.join(__dirname, '../src'));

const read = relative => fs.readFileSync(path.join(__dirname, '../src', relative), 'utf8');
assert(read('app/services/page.tsx').includes('PersonalTrainer.sg provides fitness training at suitable home spaces, approved condominium gyms, private training facilities, outdoor training areas, multi storey car park training areas and other suitable training environments across Singapore. The most suitable training arrangement can be discussed during the enquiry.'));
assert(read('app/contact/page.tsx').includes('Training can be arranged across Singapore at suitable home spaces, approved condominium gyms, private training facilities, outdoor training areas, multi storey car park training areas and other suitable training environments. Please share your preferred training area or full location details when contacting PersonalTrainer.sg.'));
const condition = 'The trial session fee is fully waived if a minimum 12 session package is purchased immediately after the trial.';
const title = '90 Minute Professional Fitness Assessment and Personal Training Session';
const includes = 'Includes a professional consultation, goal analysis, InBody analysis, movement and fitness assessment, personalised exercise guidance and one to one personal training.';
for (const file of ['app/page.tsx', 'app/contact/page.tsx', 'components/RateCardsGrid.tsx', 'app/personal-trainer-cost-singapore/page.tsx']) {
  const source = read(file);
  for (const wording of [condition, title, includes, '$144', '$216']) assert(source.includes(wording), `Missing exact trial wording in ${file}: ${wording}`);
}
const sitemap = fs.readFileSync(path.join(__dirname, '../public/sitemap.xml'), 'utf8');
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
assert.equal(sitemapUrls.length, pages.length + 11, 'Keep the existing sitemap URL count');
assert.equal(new Set(sitemapUrls).size, sitemapUrls.length);
assert(sitemapUrls.every(url => url.startsWith('https://www.personaltrainer.sg/')), 'Sitemap must use the final hostname');
const sitemapPaths = new Set(sitemapUrls.map(url => new URL(url).pathname));
assert(pages.every(page => sitemapPaths.has(`/singapore/${page.slug}`)), 'Every existing programmatic URL must remain in the sitemap');
console.log(`PASS: ${pages.length} existing URLs; ${pages.filter(page => page.locationType === 'Condominium').length} condominium pages; all template copy and client examples checked.`);
