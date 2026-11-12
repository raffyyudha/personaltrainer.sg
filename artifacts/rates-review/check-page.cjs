const { chromium } = require('C:/Users/wcast/AppData/Local/npm-cache/_npx/420ff84f11983ee5/node_modules/playwright');
const assert = require('node:assert/strict');
(async()=>{
 const browser=await chromium.launch({channel:'chrome',headless:true});
 const page=await browser.newPage();
 for(const [name,width] of [['desktop',1440],['mobile',390]]) {
  await page.setViewportSize({width,height:1000});
  await page.goto('http://localhost:3001/rates',{waitUntil:'networkidle'});
  await page.evaluate(()=>document.fonts.ready);
  await page.evaluate(()=>window.scrollTo(0,0));
  const trial=await page.locator('main h3').first().boundingBox();
  assert(trial.y>120,'Trial heading clears navigation');
  const text=await page.locator('main').innerText();
  const labels=['TRIAL SESSION','STUDENT RATE','PERSONAL TRAINING PACKAGES','STARTER PROMOTIONAL RATE','12 Sessions','24 Sessions','36 Sessions','48 Sessions','60 Sessions','Related Fitness & Pricing Guides'];
  let previous=-1;
  for(const label of labels){const index=text.toLowerCase().indexOf(label.toLowerCase(),previous+1);assert(index>previous,label+' order');previous=index;}
  assert(!text.includes('Flat rate for any number'));
  assert(!text.includes('Best for clients who want'));
  assert(text.includes('The trial session fee is fully waived if a minimum 12 session package is purchased immediately after the trial.'));
  assert.equal(await page.locator('[data-package] a').count(),5);
  await page.screenshot({path:`artifacts/rates-review/${name}-full-page.png`,fullPage:true});
  console.log(name+': section order, waiver, clean copy and five enquiry links verified');
 }
 await browser.close();
})();

