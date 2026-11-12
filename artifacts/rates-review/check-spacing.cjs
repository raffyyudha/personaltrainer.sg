const { chromium }=require('C:/Users/wcast/AppData/Local/npm-cache/_npx/420ff84f11983ee5/node_modules/playwright');
const assert=require('node:assert/strict');
(async()=>{const browser=await chromium.launch({channel:'chrome',headless:true});const page=await browser.newPage();
for(const [name,width] of [['desktop',1440],['mobile',390]]){
await page.setViewportSize({width,height:1000});await page.goto('http://localhost:3001/services',{waitUntil:'networkidle'});await page.evaluate(()=>document.fonts.ready);
await page.evaluate(()=>{for(const el of document.querySelectorAll('*')) if(getComputedStyle(el).position==='fixed') el.setAttribute('data-review-overlay','')});
await page.addStyleTag({content:'header, nextjs-portal, [data-review-overlay] {visibility:hidden!important}'});
const result=await page.locator('[data-package]').evaluateAll(cards=>cards.map(c=>{const list=c.querySelector('ul'),desc=c.querySelector('ul + div p');return {color:getComputedStyle(desc).color,gap:desc.getBoundingClientRect().top-list.getBoundingClientRect().bottom,overflow:c.scrollWidth>c.clientWidth+1};}));
for(const r of result){assert.equal(r.color,'rgb(17, 17, 17)');assert(r.gap<24);assert(!r.overflow)}
if(width>=1100){
const alignment=await page.locator('[data-package]').evaluateAll(cards=>cards.map(c=>({bottom:c.getBoundingClientRect().bottom,button:c.querySelector('a').getBoundingClientRect().top})));
assert(Math.max(...alignment.map(c=>c.bottom))-Math.min(...alignment.map(c=>c.bottom))<1,'Equal card bottoms');
assert(Math.max(...alignment.map(c=>c.button))-Math.min(...alignment.map(c=>c.button))<1,'Aligned enquiry buttons');
console.log('Equal card heights and aligned buttons verified');
}
await page.locator('[data-package-grid]').screenshot({path:`artifacts/rates-review/${name}-compact-with-descriptions.png`});console.log(name,result);
}await browser.close()})();
