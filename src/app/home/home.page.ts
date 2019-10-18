import { Component } from '@angular/core';

// WebView
import { WebView } from '@ionic-native/ionic-webview/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private webview: WebView) {}

  img = this.webview.convertFileSrc('https://knowinggod.co.za/');

}
