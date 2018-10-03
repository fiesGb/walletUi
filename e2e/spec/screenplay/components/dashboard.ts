import {by} from 'protractor';
import {Target} from 'serenity-js/protractor';

export class Dashboard {

    static Header = Target.the('dashboard header')
        .located(by.id('dashboard-header'));
}
