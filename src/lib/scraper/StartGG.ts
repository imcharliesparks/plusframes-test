import { StartGGCredentials } from '@/shared/types'
import Scraper from '.'

class StartGGScraper extends Scraper {
	constructor() {
		super('https://www.start.gg')
	}

	private async init() {
		await this.initScraper()
	}

	public async signUserIn(credentials: StartGGCredentials) {
		const { email, password } = credentials

		await this.init()
		await this.goToPage()
		await this.clickElement('button[id="onetrust-accept-btn-handler"]')
		await this.clickElement('button[name="loginOrRegister"]')
		await this.enterText('input[name="loginEmail"]', email)
		await this.enterText('input[name="loginPassword"]', password)
		const isButtonDisabled: boolean = await this.isElementDisabled('button[name="loginOrRegister"]')

		if (isButtonDisabled) {
			throw new Error('Error signing in, button was disabled. This is like an issue with user credentials.')
		}

		await this.clickElement('button[name="loginSubmit"]')
		const loginRequestResponse = await this.waitForNetworkResponse('https://www.start.gg/api/-/rest/user/login')

		if (loginRequestResponse.success === false) {
			throw new Error('Error signing in, credentials were invalid.')
		}

		await this.terminate()
		return true
	}
}

export default StartGGScraper
