import puppeteer from 'puppeteer'

const START_URL = 'https://student.tuke.sk/student/login.mais?'

async function createScrapper(startUrl = START_URL) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(startUrl)

    return page
}

const checkSchoolLogin = async (page, username, password) => {
    const submitForm = async (tempPage) => {
        await tempPage.type('input[name=j_username]', username)
        await tempPage.type('input[name=j_password]', password)
        await tempPage.$eval('#loginForm', (form) => form.submit())

        await tempPage.waitForNavigation()

        const url = await tempPage.url()

        return url.includes('login.mais') === false
    }

    try {
        return await submitForm(page)
    } catch (e) {
        const browser = await puppeteer.launch()
        const page = await browser.newPage()
        await page.goto(START_URL)

        const isLoginValid = await submitForm(page)

        await browser.close()

        return isLoginValid
    }
}


export {createScrapper, checkSchoolLogin}
