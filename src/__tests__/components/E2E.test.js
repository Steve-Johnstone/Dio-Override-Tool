import puppeteer from 'puppeteer';

describe('E2E tests', () => {
	const app = 'http://localhost:3000/';
	let browser;
	let page;

	it('should direct the user to the Main Page when a valid url is entered and display the revelevant list of overrides', async () => {
		//Open browser and open app in new page
		browser = await puppeteer.launch();
		page = await browser.newPage();
		await page.goto(app);

		//Input a valid url
		await page.click('input[name="url"]');
		await page.type(
			'input[name="url"]',
			'cop/bookingdetails/bookingdetailspage'
		);

		//Click on the 'GO' button
		await page.click('button[name="Go"]');

		//Expect heading of main page to be displayed
		const heading = await page.$eval('h4', (el) => el.textContent);
		expect(heading).toBe('All Overrides');

		//Expect the first available override for this url to be displayed on the screen
		const item = await page.$eval('li', (el) => el.textContent);
		expect(item).toBe('All In Price Ec');

		//Expect the correct url to be displayed on the screen
		const url = await page.$eval('#url-display', (el) => el.textContent);
		expect(url).toBe(
			'localhost:8080/cop/bookingdetails/bookingdetailspage?override='
		);

		//Close browser
		await browser.close();
	});

	it('should filter the list of overrides correctly, based on the search term entered, regardless of casing used', async () => {
		//Open browser and open app in new page
		browser = await puppeteer.launch();
		page = await browser.newPage();
		await page.goto(app);

		//Input a valid url
		await page.click('input[name="url"]');
		await page.type(
			'input[name="url"]',
			'cop/bookingdetails/bookingdetailspage'
		);

		//Click on the 'GO' button
		await page.click('button[name="Go"]');

		//Type an override name into the search bar
		await page.click('input[name="search-item"]');
		await page.type('input[name="search-item"]', 'resend');

		//Expect the override list to contain only 2 overrides
		const list = await page.$$('ul');
		expect(list.length).toBe(2);

		//Expect the first override dispayed to be 'No Resend Email'
		const item = await page.$eval('li', (el) => el.textContent);
		expect(item).toBe('No Resend Email');

		//Close browser
		await browser.close();
	});

	it('should still display the relevant overrides, even when the search term is mis-spelled', async () => {
		//Open browser and open app in new page
		browser = await puppeteer.launch();
		page = await browser.newPage();
		await page.goto(app);

		//Input a valid url
		await page.click('input[name="url"]');
		await page.type('input[name="url"]', 'cop/confirmation/confirmation');

		//Click on the 'GO' button
		await page.click('button[name="Go"]');

		//Type an override name into the search bar
		await page.click('input[name="search-item"]');
		await page.type('input[name="search-item"]', 'arc rental');

		//Expect the override dispayed to be 'Car Rental'
		const item = await page.$eval('li', (el) => el.textContent);
		expect(item).toBe('Car Rental');

		//Close browser
		await browser.close();
	});

	// it('should add overrides to the list of selected overrides in the footer, when they are clicked', async () => {
	// 	//Open browser and open app in new page
	// 	browser = await puppeteer.launch();
	// 	page = await browser.newPage();
	// 	await page.goto(app);

	// 	//Input a valid url
	// 	await page.click('input[name="url"]');
	// 	await page.type('input[name="url"]', 'cop/confirmation/confirmation');

	// 	//Click on the 'GO' button
	// 	await page.click('button[name="Go"]');

	// 	//Click on an override from the override list
	// 	await page.click('input[name="search-item"]');
	// 	await page.type('input[name="search-item"]', 'arc rental');

	// 	//Expect the override to be dispayed in the list of selected overrides in the footer
	// 	let item = await page.$eval('li', (el) => el.textContent);
	// 	expect(item).toBe('Car Rental');

	// 	//Expect the override to be added to the url displayed in the footer
	// 	let item = await page.$eval('li', (el) => el.textContent);
	// 	expect(item).toBe('Car Rental');

	// 	//Close browser
	// 	await browser.close();
	// });
});
