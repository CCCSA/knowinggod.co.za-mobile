import { Component } from '@angular/core';

// appbrowserView
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  [x: string]: any;

  constructor(private iab: InAppBrowser) {
    const browser = this.iab.create('https://knowinggod.co.za/', '_blank');
  }

  onclick() {
  this.lab.create('https://knowinggod.co.za/', '_blank', 'hideurlbar=yes');
  }
}