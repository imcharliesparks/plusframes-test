import { chromium, Browser, Page, BrowserContext, Frame } from 'playwright'

class Scraper {
	private baseUrl: string
	private browser!: Browser
	private context!: BrowserContext
	private page!: Page
	public currentLocation!: string

	constructor(baseUrl: string) {
		this.baseUrl = baseUrl
	}

	public async initScraper() {
		this.browser = await chromium.launch({ headless: process.env.NODE_ENV !== 'development' })
		this.context = await this.browser.newContext()
		this.page = await this.context.newPage()
		this.page.on('framenavigated', (frame: Frame) => (this.currentLocation = frame.url()))
	}

	public async terminate() {
		await this.browser.close()
	}

	public async goToPage(subdomain?: string) {
		let reqUrl: string = this.baseUrl
		if (subdomain) reqUrl += subdomain
		await this.page.goto(reqUrl)
	}

	public async clickElement(selector: string) {
		await this.page.click(selector)
	}

	public async enterText(selector: string, inputText: string) {
		await this.page.fill(selector, inputText)
	}

	public async hasTextOnPage(selector: string) {
		const textExistsOnPage = await this.page.$(selector)
		return !!textExistsOnPage
	}

	public async elementIsOnPage(selector: string) {
		const foundElement = await this.page.$(selector)
		return !!foundElement
	}

	public async isElementDisabled(selector: string) {
		const isDisabled: boolean = await this.page.$eval(selector, (elem: any) => elem.disabled)

		return isDisabled
	}

	public async waitForNetworkResponse(reqUrl: string) {
		const request = this.page.waitForResponse(reqUrl)
		const response = await request
		const result = await response.json()
		return result
	}
}

export default Scraper
