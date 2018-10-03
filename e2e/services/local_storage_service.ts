import {protractor} from 'protractor';

export class LocalStorageService {

    static write(key: string, value: string) {
        return protractor.browser.executeScript(`window.localStorage.setItem('${key}','${value}')`);
    }
}
