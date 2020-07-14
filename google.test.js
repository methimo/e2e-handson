describe("Googleでpuppeteerを検索してリポジトリにアクセスする", () => {
  beforeAll(async () => {
    // デフォルトのタイムアウトが5000msなので長めに設定し直す
    jest.setTimeout(30000);
  });

  test("Googleにアクセス", async () => {
    await page.goto("https://google.com");
    await page.screenshot({ path: "screenshots/1.png", fullPage: true });
  });

  test("検索ワードを入力", async () => {
    await expect(page).toFill('input[name="q"]', "puppeteeeeeeer");
    await page.screenshot({ path: "screenshots/2.png", fullPage: true });
  });
});
