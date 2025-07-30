// @ts-check
import { test, expect } from '@playwright/test';

const IMG_CAT_PREFIX = 'https://cataas.com/'
const LOCAL_HOST_URL = 'http://localhost:5173/'
test('app show random facts and image', async ({ page }) => {
  await page.goto(LOCAL_HOST_URL);

  // Expect a title "to contain" a substring.
  const text = await page.getByRole('paragraph')
  const img = await page.getByRole('img')

  const textContent = await text.textContent()
  const imgSource = await img.getAttribute('src')

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imgSource?.startsWith(IMG_CAT_PREFIX)).toBeTruthy()
});


