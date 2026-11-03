import { test, expect } from '@playwright/test';

for (const width of [1440, 768, 390, 320]) {
  test(`responsive layout at ${width}px, without horizontal overflow or broken images`, async ({ page }) => {
    await page.setViewportSize({ width, height: 860 });
    const runtimeErrors: string[] = [];
    page.on('pageerror', error => runtimeErrors.push(error.message));
    page.on('console', message => {
      if (message.type() === 'error') runtimeErrors.push(message.text());
    });
    await page.goto('/');
    await expect(page.getByRole('heading', { name: /Great events feel effortless/ })).toBeVisible();
    await expect(page.getByText('200+', { exact: true })).toBeVisible();
    const overflow = await page.evaluate(() => ({ width: window.innerWidth, content: document.documentElement.scrollWidth }));
    expect(overflow.content, `Document overflows at ${width}px`).toBeLessThanOrEqual(overflow.width + 1);
    for (const image of await page.locator('img').all()) {
      await image.scrollIntoViewIfNeeded();
      await expect.poll(() => image.evaluate(node => (node as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
    }
    expect(runtimeErrors).toEqual([]);
  });
}

test('agenda accordions can be opened and closed by keyboard', async ({ page }) => {
  await page.goto('/');
  const first = page.getByRole('button', { name: /Registration that just works/ });
  const second = page.getByRole('button', { name: /Every touchpoint matters/ });
  await expect(first).toHaveAttribute('aria-expanded', 'true');
  await second.focus();
  await page.keyboard.press('Enter');
  await expect(second).toHaveAttribute('aria-expanded', 'true');
  await expect(first).toHaveAttribute('aria-expanded', 'false');
  await page.keyboard.press('Space');
  await expect(second).toHaveAttribute('aria-expanded', 'false');
});

test('mobile navigation opens, navigates, and closes with Escape', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  const toggle = page.getByRole('button', { name: 'Open navigation' });
  await toggle.click();
  await expect(page.getByRole('navigation', { name: 'Mobile navigation' })).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.getByRole('navigation', { name: 'Mobile navigation' })).toBeHidden();
  await expect(page.getByRole('button', { name: 'Open navigation' })).toBeFocused();
  await page.getByRole('button', { name: 'Open navigation' }).click();
  await page.getByRole('navigation', { name: 'Mobile navigation' }).getByRole('link', { name: 'Credentials' }).click();
  await expect(page).toHaveURL(/#certifications$/);
  await expect(page.getByRole('navigation', { name: 'Mobile navigation' })).toBeHidden();
});

test('original certificates open at valid PDF URLs', async ({ page, request }) => {
  await page.goto('/');
  const certificateLinks = page.locator('.cert-link');
  await expect(certificateLinks).toHaveCount(3);
  for (const link of await certificateLinks.all()) {
    const href = await link.getAttribute('href');
    expect(href).toMatch(/^\/certificates\/.*\.pdf$/);
    await expect(link).toHaveAttribute('target', '_blank');
    const response = await request.get(href!);
    expect(response.status()).toBe(200);
    const file = await response.body();
    expect(file.subarray(0, 5).toString()).toBe('%PDF-');
  }
});

test('contact and external portfolio links use the correct destinations', async ({ page }) => {
  await page.goto('/');
  const email = page.getByRole('link', { name: 'Start a conversation' });
  await expect(email).toHaveAttribute('href', /mailto:Yeabsira\.mesfin29@gmail\.com/);
  const portfolio = page.getByRole('link', { name: /Main portfolio/ });
  await expect(portfolio).toHaveAttribute('href', 'https://yeabsiramesfin.com');
  await expect(portfolio).toHaveAttribute('rel', 'noopener noreferrer');
});

test('reduced motion preference is respected', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  await expect(page.getByRole('heading', { name: /Great events feel effortless/ })).toBeVisible();
  const behavior = await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior);
  expect(behavior).toBe('auto');
});
