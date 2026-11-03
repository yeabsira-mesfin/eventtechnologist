import { test, expect } from '@playwright/test';
const routes = ['/', '/experience', '/mobile-apps', '/sessions', '/sessions/01', '/sessions/02', '/sessions/03', '/sessions/04', '/career', '/credentials', '/contact'];
for (const width of [1440, 768, 390, 320]) {
 test(`all routes are responsive at ${width}px with valid images`, async ({ page }) => {
  await page.setViewportSize({width,height:900});
  const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
  for (const route of routes) {
   await page.goto(route);await expect(page.locator('h1')).toBeVisible();
   const sizes=await page.evaluate(()=>({viewport:innerWidth,content:document.documentElement.scrollWidth}));
   expect(sizes.content,`Overflow on ${route}`).toBeLessThanOrEqual(sizes.viewport+1);
   for (const image of await page.locator('img').all()) {await image.scrollIntoViewIfNeeded();await expect.poll(()=>image.evaluate(n=>(n as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);}
  }
  expect(errors).toEqual([]);
 });
}
for (const route of routes) {
 test(`direct route and refresh: ${route}`,async({page})=>{await page.goto(route);const heading=await page.locator('h1').innerText();await page.reload();await expect(page.locator('h1')).toHaveText(heading,{useInnerText:true});});
}
test('mobile app screen switches, links and keyboard access',async({page})=>{
 await page.goto('/mobile-apps');const nav=page.getByRole('navigation',{name:'Event app screens'});
 for(const name of ['Experience','Career','Sessions','Credentials','Contact','Home']){const b=nav.getByRole('button',{name,exact:true});await b.focus();await b.press('Enter');await expect(b).toHaveAttribute('aria-pressed','true');await expect(page.locator('#phone-content')).toBeVisible();}
 await page.getByRole('button',{name:'My Experience',exact:true}).click();await expect(page.locator('#phone-content')).toContainText('Cvent Attendee Hub');
 await page.getByRole('link',{name:'Explore this specialty'}).click();await expect(page).toHaveURL(/\/sessions\/02$/);await page.goBack();await expect(page).toHaveURL(/\/mobile-apps$/);
});
test('session selection and browser history',async({page})=>{await page.goto('/sessions');const nav=page.getByRole('navigation',{name:'Professional sessions'});await nav.getByRole('link',{name:/03/}).click();await expect(page.locator('.session-detail')).toContainText('5,000+');await page.goBack();await expect(page.locator('.session-detail')).toContainText('Cvent Registration Architecture');});
test('career stages update the detail panel',async({page})=>{await page.goto('/career');const nav=page.getByRole('navigation',{name:'Career stages'});for(const role of ['Intern','Junior Cvent Developer','Account Manager','Client Success Advisor','Team Lead']){await nav.getByRole('button',{name:new RegExp(role)}).click();await expect(page.locator('#career-detail h2')).toHaveText(role);}await expect(page.locator('#career-detail')).toContainText('led a team of 4');});
test('mobile menu closes on navigation and Escape',async({page})=>{await page.setViewportSize({width:390,height:844});await page.goto('/');await page.getByRole('button',{name:'Open navigation'}).click();await expect(page.getByRole('navigation',{name:'Mobile navigation'})).toBeVisible();await page.keyboard.press('Escape');await expect(page.getByRole('button',{name:'Open navigation'})).toBeFocused();await expect(page.getByRole('navigation',{name:'Mobile navigation'})).toBeHidden();await page.getByRole('button',{name:'Open navigation'}).click();await page.getByRole('navigation',{name:'Mobile navigation'}).getByRole('link',{name:'Credentials',exact:true}).click();await expect(page).toHaveURL(/\/credentials$/);await expect(page.getByRole('navigation',{name:'Mobile navigation'})).toBeHidden();});
test('original certificate links and name disclosure',async({page,request})=>{await page.goto('/credentials');const links=page.locator('.cert-link');await expect(links).toHaveCount(3);for(const link of await links.all()){const response=await request.get((await link.getAttribute('href'))!);expect(response.status()).toBe(200);expect((await response.body()).subarray(0,5).toString()).toBe('%PDF-');await expect(link).toHaveAttribute('target','_blank');}await expect(page.locator('.credential-note')).toContainText('Yeabsira Mefin');});
test('contact link, no external portfolio link and unknown route',async({page})=>{await page.goto('/contact');await expect(page.getByRole('link',{name:'Start a conversation'})).toHaveAttribute('href',/^mailto:Yeabsira.mesfin29@gmail.com/);for(const route of routes){await page.goto(route);await expect(page.locator('a[href*="yeabsiramesfin.com"]')).toHaveCount(0);}await page.goto('/missing');await expect(page.getByRole('link',{name:'Return to the lobby'})).toBeVisible();});
test('reduced motion disables page and phone animations',async({page})=>{await page.emulateMedia({reducedMotion:'reduce'});await page.goto('/mobile-apps');expect(await page.locator('main').evaluate(el=>getComputedStyle(el).animationName)).toBe('none');expect(await page.locator('#phone-content').evaluate(el=>getComputedStyle(el).animationName)).toBe('none');});
