const puppeteer = require("puppeteer");
const capture = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://fotoshot.onrender.com");
  await page.screenshot({ path: "./fotoshot.png" });
  await browser.close();
};
capture();
