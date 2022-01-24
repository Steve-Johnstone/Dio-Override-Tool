import puppeteer from 'puppeteer';

describe('E2E tests for valid URL containing no pre-selected overrides', () => {
	const app = 'http://localhost:3000/';
	let browser;
	let page;

	//Open app before each test, enter a valid url and click on the 'GO' button.
	beforeEach(async () => {
		browser = await puppeteer.launch();
		page = await browser.newPage();
		await page.goto(app);

		await page.click('input[name="url"]');
		await page.type(
			'input[name="url"]',
			'cop/bookingdetails/bookingdetailspage'
		);
		await page.click('button[name="Go"]');
	});

	//Close browser after each test
	afterEach(async () => {
		await browser.close();
	});

	it('should direct the user to the Main Page and display the revelevant list of overrides', async () => {
		//Expect heading of main page to be displayed
		const heading = await page.$eval('h4', (el) => el.textContent);
		expect(heading).toBe('All Overrides');

		//Expect the first available override for this url to be displayed on the screen
		const item = await page.$eval('li', (el) => el.textContent);
		expect(item).toBe('All In Price Ec With Scc With Currency Conversion');

		//Expect the correct url to be displayed on the screen
		const url = await page.$eval('#url-display', (el) => el.textContent);
		expect(url).toBe(
			'http://localhost:8080/cop/bookingDetails/bookingDetailsPage?override='
		);
	});

	it('should filter the overrides based on the search term entered, regardless of the casing used', async () => {
		//Type an override name into the search bar
		await page.click('input');
		await page.type('input', 'resend');

		//Expect the override list to contain only 2 overrides
		const list = await page.$$('ul');
		expect(list.length).toBe(2);

		//Expect the first override dispayed to be 'No Resend Email'
		const item = await page.$eval('li', (el) => el.textContent);
		expect(item).toBe('No Resend Email');
	});

	it('should still display the relevant overrides, even when the search term is mis-spelled', async () => {
		//Type an override name into the search bar
		await page.click('input');
		await page.type('input', 'Nilstallments');

		//Expect the override dispayed to be 'Car Rental'
		const item = await page.$eval('li', (el) => el.textContent);
		expect(item).toBe('Installments');
	});

	it('should add an override to the selected overrides when it is clicked and also to the url', async () => {
		//Click on the 8th override in the list ('Change Redirect')
		await page.click('.override-list > li:nth-child(11)');

		//Expect the override to be dispayed in the list of selected overrides in the footer
		const footerList = await page.$eval(
			'.footer-override-list',
			(el) => el.textContent
		);
		expect(footerList).toBe('change-redirect');

		//Expect the override to be added to the url displayed in the footer
		const url = await page.$eval('#url-display', (el) => el.textContent);
		expect(url).toBe(
			'http://localhost:8080/cop/bookingDetails/bookingDetailsPage?override=change-redirect'
		);
	});

	it('should remove overrides from the list of selected overrides in the footer when they are clicked again and also remove them from the url', async () => {
		//Click on the 5th override in the list twice ('Australian Print Receipt')
		await page.click('.override-list > li:nth-child(5)');
		await page.click('.override-list > li:nth-child(5)');

		//Expect the override NOT to be dispayed in the list of selected overrides in the footer
		const footerList = await page.$eval(
			'.footer-override-list',
			(el) => el.textContent
		);
		expect(footerList).toBe('');

		//Expect the override to be removed from the url displayed in the footer
		const url = await page.$eval('#url-display', (el) => el.textContent);
		expect(url).toBe(
			'http://localhost:8080/cop/bookingDetails/bookingDetailsPage?override='
		);
	});
	it('should clear all the overrides from the selected overrides list in the footer when "Clear All" is clicked and also remove them from the url', async () => {
		//Click on the 5th and 14th overrides in the list ('Australian Print Receipt', 'Cm App Web)
		await page.click('.override-list > li:nth-child(7)');
		await page.click('.override-list > li:nth-child(15)');

		//Expect all the overrides to be dispayed in the list of selected overrides in the footer, in kebab casing
		const item1 = await page.$eval(
			'.footer-override-list > li:nth-child(1)',
			(el) => el.textContent
		);
		expect(item1).toBe('australian-print-receipt');

		const item2 = await page.$eval(
			'.footer-override-list > li:nth-child(2)',
			(el) => el.textContent
		);
		expect(item2).toBe('cm-app-web');

		//Click on the 'Clear All' button
		await page.click('button[name="clear-all"]');

		//Expect list of selected overrides to now be empty
		const footerList = await page.$eval(
			'.footer-override-list',
			(el) => el.textContent
		);
		expect(footerList).toBe('');

		//Expect the overrides to be present in the url displayed in the footer, in the order in which they were added
		const url = await page.$eval('#url-display', (el) => el.textContent);
		expect(url).toBe(
			'http://localhost:8080/cop/bookingDetails/bookingDetailsPage?override='
		);
	});

	it('should remove an override from the list of selected overrides, as well as the url, when an override is clicked in the selected list', async () => {
		//Click on an override in the list of overrides ('Card On File Message')
		await page.click('.override-list > li:nth-child(8)');

		//Expect the override to be in the list of selected overrides in the footer
		const override = await page.$eval(
			'.footer-override-list',
			(el) => el.textContent
		);
		expect(override).toBe('card-on-file-message');

		//Expect the override to be in the url displayed in the footer
		let url = await page.$eval('#url-display', (el) => el.textContent);
		expect(url).toBe(
			'http://localhost:8080/cop/bookingDetails/bookingDetailsPage?override=card-on-file-message'
		);

		//Click on the override from the list of selected overrides in the footer
		await page.click('.footer-override-list > li:nth-child(1)');

		//Expect the override NOT to be in the list of selected overrides
		const footerList = await page.$eval(
			'.footer-override-list',
			(el) => el.textContent
		);
		expect(footerList).toBe('');

		//Expect the override NOT to be in the url
		url = await page.$eval('#url-display', (el) => el.textContent);
		expect(url).toBe(
			'http://localhost:8080/cop/bookingDetails/bookingDetailsPage?override='
		);
	});

	it('should open a new tab with the dynamically constructed url, when the "Show It" button is clicked', async () => {
		//Click on the some overrides from the list ('Insurance Details', 'Multi Room)
		await page.click('.override-list > li:nth-child(26)');
		await page.click('.override-list > li:nth-child(28)');

		const pageTarget = page.target();

		//Click on the 'Show it' button
		await page.click('a');

		//Expect to be taken to booking details page and see heading 'Your upcoming booking'
		const newTarget = await browser.waitForTarget(
			(target) => target.opener() === pageTarget
		);
		const newPage = await newTarget.page();
		await newPage.goto(
			'http://localhost:8080/cop/bookingDetails/bookingDetailsPage?override=multi-room,insurance-details'
		);
		const heading = await newPage.$eval('h1', (el) => el.textContent);
		expect(heading).toBe('Your upcoming booking');
	});
});

describe('E2E tests for valid URL containing pre-selected overrides', () => {
	it('should direct the user to the Main Page and display the revelevant list of overrides', async () => {
		//Open app
		let browser = await puppeteer.launch();
		let page = await browser.newPage();
		await page.goto('http://localhost:3000/');

		//Enter a valid url which contains pre-selected overrides ('affiliate-ana' & 'breakfast-upsell-error'') and click on the 'GO' button.
		await page.click('input[name="url"]');
		await page.type(
			'input[name="url"]',
			'cop/bookingform/booking?override=affiliate-ana,breakfast-upsell-error'
		);
		await page.click('button[name="Go"]');

		//Expect the pre-selected overrides to appear in the selected overrides list
		const footerList = await page.$eval(
			'.footer-override-list',
			(el) => el.textContent
		);
		expect(footerList).toContain('affiliate-ana');
		expect(footerList).toContain('breakfast-upsell-error');

		//Expect the url to be displayed on the screen to contain the pre-selected overrides
		const url = await page.$eval('#url-display', (el) => el.textContent);
		expect(url).toBe(
			'http://localhost:8080/cop/bookingForm/booking?override=affiliate-ana,breakfast-upsell-error'
		);
		//Close the browser
		await browser.close();
	});
});
