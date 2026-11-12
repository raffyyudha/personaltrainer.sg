const { chromium } = require('C:/Users/wcast/AppData/Local/npm-cache/_npx/420ff84f11983ee5/node_modules/playwright');
const assert = require('node:assert/strict');
(async()=>{
 const browser=await chromium.launch({channel:'chrome',headless:true});
 const page=await browser.newPage();
 await page.goto('http://localhost:3001/rates',{waitUntil:'networkidle'});
 await page.evaluate(()=>document.fonts.ready);
 await page.evaluate(()=>{for(const el of document.querySelectorAll('*')) if(getComputedStyle(el).position==='fixed') el.setAttribute('data-review-overlay','')});
 await page.addStyleTag({content:'[data-review-overlay],nextjs-portal {visibility:hidden!important}'});
 for(const width of [320,390,768,1100,1440,1920]){
  await page.setViewportSize({width,height:1000});
  const checks=await page.locator('[data-package]').evaluateAll(cards=>cards.map(card=>{
   const badge=card.querySelector('[class*="_badge"]'),heading=card.querySelector('h3');
   return {gold:getComputedStyle(heading.lastElementChild).color,gap:badge?heading.getBoundingClientRect().top-badge.getBoundingClientRect().bottom:null,
   badgeGold:badge?getComputedStyle(badge).backgroundColor:null,overflow:card.scrollWidth>card.clientWidth+1,
   bottom:card.getBoundingClientRect().bottom,button:card.querySelector('a').getBoundingClientRect().top};
  }));
  for(const check of checks){assert.equal(check.gold,'rgb(197, 160, 89)');assert(!check.overflow);if(check.gap!==null){assert(check.gap>=10);assert.equal(check.badgeGold,'rgb(197, 160, 89)')}}
  if(width>=1100){assert(Math.max(...checks.map(c=>c.bottom))-Math.min(...checks.map(c=>c.bottom))<1);assert(Math.max(...checks.map(c=>c.button))-Math.min(...checks.map(c=>c.button))<1)}
  const starter=page.locator('[class*="_starterTitle"]');assert.equal(await starter.evaluate(el=>getComputedStyle(el).backgroundColor),'rgb(197, 160, 89)');
  const footer=await page.locator('[class*="_posterFooter"] svg').evaluateAll(els=>els.map(el=>getComputedStyle(el).color));assert(footer.every(c=>c==='rgb(197, 160, 89)'));
  console.log(width+'px: standard gold, clear badges, no overflow'+(width>=1100?', equal cards and buttons':''));
  if(width===390||width===1440)await page.locator('[data-rates-poster]').screenshot({path:`artifacts/rates-review/${width===390?'mobile':'desktop'}-standard-gold.png`});
 }
 await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});
