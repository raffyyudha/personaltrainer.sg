const { chromium } = require('C:/Users/wcast/AppData/Local/npm-cache/_npx/420ff84f11983ee5/node_modules/playwright');
const fs = require('fs');
(async () => {
 const browser = await chromium.launch({channel:'chrome',headless:true});
 const page = await browser.newPage();
 const errors=[];
 page.on('pageerror', e=>errors.push(e.message));
 await page.goto('http://localhost:3001/rates', {waitUntil:'networkidle'});
 await page.evaluate(()=>document.fonts.ready);
 await page.evaluate(()=>{ for(const el of document.querySelectorAll('*')) if(getComputedStyle(el).position==='fixed') el.setAttribute('data-review-overlay',''); });
 await page.addStyleTag({content:'[data-review-overlay] { visibility: hidden !important; }'});
 for(const [name,width] of [['desktop',1280],['mobile',390],['small-mobile',320],['tablet',768],['wide-desktop',1536]]) {
  await page.setViewportSize({width,height:6000});
  await page.locator('[data-package-grid]').scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  const cards=page.locator('[data-package]');
  if(await cards.count()!==5) throw Error('Expected five packages');
  const failures=await cards.evaluateAll(cards=>cards.flatMap(card=>{
   const r=card.getBoundingClientRect();
   const results=[];
   if(card.scrollWidth>card.clientWidth+1) results.push('Card overflow '+card.dataset.package);
   if(r.left<0 || r.right>innerWidth) results.push('Offscreen '+card.dataset.package);
   for(const el of card.querySelectorAll('li')) if(getComputedStyle(el).textAlign!=='left') results.push('Alignment '+el.textContent);
   return results;
  }));
  if(failures.length) throw Error(name+': '+failures.join(', '));
  if(name==='desktop'||name==='mobile') {
   await page.locator('[data-rates-poster]').screenshot({path:`artifacts/rates-review/${name}-all-five.png`});
   for(let i=0;i<5;i++) await page.screenshot({clip: await cards.nth(i).evaluate(el=>{const r=el.getBoundingClientRect();return {x:r.x+scrollX,y:r.y+scrollY-22,width:r.width,height:r.height+24}}),path:`artifacts/rates-review/${name}-${[12,24,36,48,60][i]}-sessions.png`});
  }
  console.log(name+': five cards, no overflow, left-aligned content');
 }
 fs.writeFileSync('artifacts/rates-review/rendered-copy.txt',(await page.locator('[data-package-grid]').innerText()));
 if(errors.length) throw Error(errors.join('\n'));
 await browser.close();
})();
