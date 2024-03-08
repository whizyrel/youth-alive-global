import { Component } from '@angular/core';
import { Image } from '../gallery/gallery.component';

@Component({
  selector: 'app-corpers',
  templateUrl: './corpers.component.html',
  styleUrls: ['./corpers.component.scss'],
})
export class CorpersComponent {
  public images: Image[] = Array.from({ length: 30 }, (_, i) => ({
    src: `https://firebasestorage.googleapis.com/v0/b/yaf-test.appspot.com/o/corpers/corpers-image-${
      i + 1
    }.jpeg?alt=media&token=87957d6a-0d00-45db-9f62-ae76a63031fe`,
  }));
}
