const { Builder, By, Key, until } = require('selenium-webdriver');

async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('http://localhost:3000');
        let firstResult = await driver.findElement(By.className('header-text'));
        console.log(await firstResult.getText());
    } finally {
        // Quit the browser session
        await driver.quit();
    }
}

example();
