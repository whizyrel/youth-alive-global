import { Component } from '@angular/core';
import { Image } from '../gallery/gallery.component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {
  public images: Image[] = Array.from({ length: 30 }, (_, i) => ({
    src: `https://storage.googleapis.com/yaf-test.appspot.com/landing/landing-image-${
      i + 1
    }.jpeg`,
  }));
}
