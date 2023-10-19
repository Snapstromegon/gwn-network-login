import 'dotenv/config';
import { chromium } from 'playwright';

const isOnline = async (browser) => {
  const page = await browser.newPage();
  try {
    await page.goto(process.env.TEST_URL);
    const success = (await page.url()) === process.env.TEST_URL;
    await page.close();
    return success;
  } catch (e) {
    await page.close();
    return false;
  }
};

const login = async (browser) => {
  const page = await browser.newPage();
  await page.goto(process.env.LOGIN_URL);
  await page.fill('#userid', process.env.USERNAME);
  await page.fill('#password', process.env.PASSWORD);
  await page.check('#AGB');
  await page.click('[type="submit"]');
  await page.close();
};

const browser = await chromium.launch({ headless: !!JSON.parse(process.env.HEADLESS) });

let online = await isOnline(browser);
if (!online) {
  await login(browser);
  online = await isOnline(browser);
}

await browser.close();

console.log(online ? 'Online' : 'Offline');
process.exit(online ? 0 : 1);
