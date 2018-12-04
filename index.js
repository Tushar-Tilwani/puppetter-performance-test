const puppeteer = require("puppeteer");
const { extractDataFromPerformanceTiming } = require("./helpers");
const { url } = require("./properties");

async function run() {
  const browser = await puppeteer.launch({
    headless: true
  });

  
  const page = await browser.newPage();
  await page.goto(url);

  const performanceTiming = JSON.parse(
    await page.evaluate(() => JSON.stringify(window.performance.timing))
  );

  await page.screenshot({path: 'final-state.png'});

  const result = extractDataFromPerformanceTiming(
    performanceTiming,
    "responseEnd",
    "domInteractive",
    "domContentLoadedEventEnd",
    "loadEventEnd"
  );

  console.log('All values are in milli seconds');
  console.log('--------------------------------');
  console.log(result);
  browser.close();
}

run();