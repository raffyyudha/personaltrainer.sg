const {chromium}=require('C:/Users/wcast/AppData/Local/npm-cache/_npx/420ff84f11983ee5/node_modules/playwright');const assert=require('node:assert/strict');
(async()=>{const browser=await chromium.launch({channel:'chrome',headless:true});const page=await browser.newPage();await page.setViewportSize({width:390,height:844});
for(const route of ['/','/rates','/services','/about']){
await page.goto('http://localhost:3001'+route,{waitUntil:'networkidle'});await page.addStyleTag({content:'nextjs-portal {display:none!important}'});
const strip=page.getByRole('list',{name:'Training benefits'});assert.equal(await strip.count(),1);assert(await strip.isVisible());
await page.evaluate(()=>scrollTo(0,900));const box=await strip.boundingBox();assert(box.y>0&&box.y+box.height<200,route+' sticky strip');
if(route==='/'){await page.locator('#about').scrollIntoViewIfNeeded();await page.screenshot({path:'artifacts/rates-review/home-mobile-sticky-benefits.png'});}
if(route==='/rates'){await page.evaluate(()=>scrollTo(0,0));await page.screenshot({path:'artifacts/rates-review/mobile-header-benefits.png'});}
console.log(route+': benefits visible once and remain below header while scrolling');
}
await page.goto('http://localhost:3001/rates',{waitUntil:'networkidle'});
for(const width of [320,430,768,1440]){await page.setViewportSize({width,height:900});const strip=page.getByRole('list',{name:'Training benefits'});assert.equal(await strip.isVisible(),width<768);if(width<768)assert(await strip.evaluate(el=>el.scrollWidth<=el.clientWidth));}
await page.setViewportSize({width:390,height:844});await page.getByRole('button',{name:'Toggle mobile menu'}).click();assert(await page.locator('.mobile-nav-drawer').isVisible());
await browser.close();console.log('320–1440px responsive visibility, no strip overflow, mobile menu passed');})();
