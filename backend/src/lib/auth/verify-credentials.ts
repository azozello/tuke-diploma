import {checkSchoolLogin, createScrapper} from "../scrapper/scrapper";

interface Credentials {
    username: string;
    password: string;
}

const verifyCredentials = async ({password, username}: Credentials) => {
    const page = await createScrapper()
    return await checkSchoolLogin(page, username, password)
}

export {verifyCredentials, Credentials}