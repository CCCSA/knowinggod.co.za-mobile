import { Component } from '@angular/core';
import { tap } from 'rxjs/operators';

// appbrowserView
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { HttpClient } from '@angular/common/http';
import { ReadAssetTextService } from '../read-asset-text.service';

declare var externalJsFunction;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  [x: string]: any;

  constructor(private iab: InAppBrowser, private http: HttpClient, private readAsset: ReadAssetTextService) {
    const browser = this.iab.create('https://courses.knowinggod.co.za/my-courses', '_blank', 'hideurlbar=yes');
    browser.on('loadstop').subscribe(async () => {
      const jsCode = await this.readAsset.asText('assets/js/externaljsfile.js');
      browser.executeScript({ code: jsCode });

      browser.insertCSS({
        code : ".header__button { visibility: hidden; }"
      });
      console.log('loaded');
    });
  }
}
