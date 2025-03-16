import * as userInfo from '../data/user-info.json';
import CryptoJS from "crypto-js";

const inputEmail = $('[name="email"]');
const inputPassword = $('[name="password"]');
const btnSubmit = $('button[type="submit"]');

export async function login() {
    await inputEmail.setValue(getDecryptedValue(userInfo.email));
    await inputPassword.setValue(getDecryptedValue(userInfo.password));
    await btnSubmit.click();
}

export function getDecryptedValue(data: string) {
    const secretKey = process.env.SECRET_KEY;
    if (!secretKey) {
        throw new Error('SECRET_KEY is not defined');
    }
    return CryptoJS.AES.decrypt(data, secretKey).toString(CryptoJS.enc.Utf8);
}

export async function openUrl(path: string) {
    return browser.url('https://suites.uat.cheqplease.com/' + path);
}
