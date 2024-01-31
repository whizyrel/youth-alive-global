import { Component } from '@angular/core';
import { Image } from '../gallery/gallery.component';

// https://jsoneditoronline.org/#left=local.sixiba&right=local.viyaxa

@Component({
  selector: 'app-fellowship',
  templateUrl: './fellowship.component.html',
  styleUrls: ['./fellowship.component.scss'],
})
export class FellowshipComponent {
  public images: Image[] = Array.from({ length: 30 }, (_, i) => ({
    src: `https://storage.googleapis.com/yaf-test.appspot.com/fellowship/fellowship-image-${
      i + 1
    }.jpeg`,
  }));
}
