import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

// appbrowserView
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ReadAssetTextService } from '../read-asset-text.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  [x: string]: any;
  subscribe: any;

  constructor(
    private iab: InAppBrowser,
    public platform: Platform,
    private readAsset: ReadAssetTextService,
  ) {

    this.subscribe = this.platform.backButton.subscribeWithPriority(666666, () => {
      if(this.constructor.name == "HomePage")
      {
        if(window.confirm("Would you like to leave?"))
        {
          navigator["app"].exitApp();        }
      }
    })


    const browser = this.iab.create('https://courses.knowinggod.co.za/my-courses', '_blank', 'location=no,hidden=yes');
    browser.on('loadstart').subscribe(() => {
      browser.hide();
    });
  
    browser.on('loadstop').subscribe(async () => {
      const jsCode = await this.readAsset.asText('assets/js/externaljsfile.js');
      browser.executeScript({ code: jsCode });

      browser.insertCSS({
        code : ".header__button { visibility: hidden; }"
      });

      browser.show();
    });
  }
}
