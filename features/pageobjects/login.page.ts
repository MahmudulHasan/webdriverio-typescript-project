import * as userInfo from '../data/user-info.json';
const inputEmail = $('[name="email"]');
const inputPassword = $('[name="password"]');
const btnSubmit = $('button[type="submit"]');

export async function login() {
    await inputEmail.setValue(userInfo.email);
    await inputPassword.setValue(userInfo.password);
    await btnSubmit.click();
}

export async function openUrl(path: string) {
    return browser.url('https://suites.uat.cheqplease.com/' + path);
}
