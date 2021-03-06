import { Component } from '@angular/core';
import { tap } from 'rxjs/operators';
import { platform } from '@ionic/angular'

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
  subscribe:any;

  constructor(private iab: InAppBrowser, private http: HttpClient, public platform: platform) {

    this.subscribe = this.platform.backButton.subscribeWithPriority(666666, () => {
      if(this.constructor.name == "HomePage")
      {
        if(window.confirm("Would you like to leave?"))
        {
          navigator["app"].exitApp();        }
      }
    })

    const browser = this.iab.create('https://courses.knowinggod.co.za/my-courses', '_blank', 'hideurlbar=yes');
    browser.on('loadstop').subscribe(async () => {
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
