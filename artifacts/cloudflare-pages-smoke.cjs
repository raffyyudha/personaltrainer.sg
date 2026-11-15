const fs = require('node:fs');
const assert = require('node:assert/strict');
const { chromium } = require('C:/Users/wcast/AppData/Local/npm-cache/_npx/420ff84f11983ee5/node_modules/playwright');
(async()=>{
 const base='http://127.0.0.1:8788';
 const urls=[...fs.readFileSync('out/sitemap.xml','utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map(m=>new URL(m[1]).pathname);
 const pseo=urls.filter(p=>p.startsWith('/singapore/'));
 const samples=[pseo[0],pseo[999],pseo[1000],pseo[10000],pseo.at(-1)];
 for(const pathname of ['/', '/rates','/singapore',...samples]){
  const response=await fetch(base+pathname);assert.equal(response.status,200,pathname);
  const html=await response.text();assert(html.includes('<h1')||html.includes('TRIAL SESSION'),pathname+' initial HTML content');
  assert(html.includes('rel="canonical"'),pathname+' canonical');
  assert(html.includes('application/ld+json'),pathname+' structured data');
 }
 assert.equal((await fetch(base+'/singapore/not-a-real-pseo-page')).status,404);
 assert.equal((await fetch(base+'/not-a-real-page')).status,404);
 const privacy=await fetch(base+'/privacy',{redirect:'manual'});assert.equal(privacy.status,301);assert(privacy.headers.get('location').endsWith('/privacy-policy'));
 assert((await (await fetch(base+'/robots.txt')).text()).includes('sitemap.xml'));
 const browser=await chromium.launch({channel:'chrome',headless:true});const page=await browser.newPage();
 const problems=[],payloads=[];
 page.on('pageerror',e=>problems.push(e.message));
 page.on('request',r=>{if(r.url().startsWith(base)&&(r.url().includes('_rsc=')||new URL(r.url()).pathname.endsWith('.txt')&&!r.url().includes('robots')))payloads.push(r.url())});
 page.on('response',r=>{if(r.url().startsWith(base)&&r.status()>=400)problems.push(r.status()+' '+r.url())});
 await page.goto(base+'/singapore',{waitUntil:'networkidle'});
 const link=page.locator('a[href^="/singapore/"]').first();const destination=await link.getAttribute('href');
 const nav=page.waitForNavigation({waitUntil:'networkidle'});await link.click();await nav;assert(new URL(page.url()).pathname===destination);
 await page.reload({waitUntil:'networkidle'});
 await page.goto(base+samples.at(-1),{waitUntil:'networkidle'});
 await page.setViewportSize({width:390,height:844});
 await page.getByRole('button',{name:'Toggle mobile menu'}).click();
 const menu=page.locator('.mobile-nav-drawer');assert(await menu.isVisible());
 const ratesLink=menu.locator('a[href="/rates"]');await ratesLink.scrollIntoViewIfNeeded();
 const ratesNav=page.waitForNavigation({waitUntil:'networkidle'});await ratesLink.click();await ratesNav;
 assert(new URL(page.url()).pathname==='/rates');assert.equal(await page.locator('[data-package]').count(),5);
 assert.deepEqual(payloads,[],'No requests for deleted RSC payloads');assert.deepEqual(problems,[],'No hydration errors or missing local assets');
 await browser.close();
 console.log('PASS: initial SEO HTML, first/middle/last pSEO, 404, privacy redirect, robots, native navigation, reload, mobile menu, Rates cards; zero RSC requests or local asset errors.');
})();
