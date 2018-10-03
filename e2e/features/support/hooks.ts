import { protractor } from 'protractor';
import { UrlService } from '../../services/url-service';

export default function () {
  this.setDefaultTimeout(30 * 1000);

  this.Before({ timeout: 60000 }, async function() {
    return await protractor.browser.get(UrlService.getBaseUrl());
  });

  this.After({ timeout: 300000 }, async function(scenario) {
    const world = this;
  });

  this.registerHandler('BeforeFeatures', function() {
    protractor.browser.driver
      .manage()
      .window()
      .maximize();
    return console.log('\n\n############## Starting Tests ##############\n');
  });

  this.registerHandler('AfterFeatures', function() {
    return console.log('\n################ Tests Done ################\n\n');
  });
}
