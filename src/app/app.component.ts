import { Component } from '@angular/core';
import { ScreenOrientation } from '@capacitor/screen-orientation';
import { SplashScreen } from '@capacitor/splash-screen';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    this.config();
  }
  async config() {
    await SplashScreen.hide();
    await ScreenOrientation.lock({
      orientation: 'portrait'
    })
  }
}
