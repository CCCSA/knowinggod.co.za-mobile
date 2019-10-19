import { Component } from '@angular/core';
import { tap } from 'rxjs/operators';

// appbrowserView
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { HttpClient } from '@angular/common/http';

declare var externalJsFunction;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  [x: string]: any;

  constructor(private iab: InAppBrowser, private http: HttpClient) {
    const browser = this.iab.create('https://courses.knowinggod.co.za/my-courses', '_blank', 'hideurlbar=yes');
    browser.on('loadstop').subscribe(async () => {
      browser.insertCSS({
        code : ".header__button { visibility: hidden; }"
      });
      console.log('loaded');
        this.http.get('assets/js/externaljsfile.js', { responseType: 'text' }).subscribe(
          {
            next(code) {
              console.log(code);
              browser.executeScript({ code });
            },
            error(err) {
              console.dir(err);
            }
          });
    });
  }
}
