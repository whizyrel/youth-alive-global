import { Component, ElementRef, Inject, QueryList, ViewChildren } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Image } from '../gallery/gallery.component';

@Component({
  selector: 'app-gallery-image-preview',
  templateUrl: './gallery-image-preview.component.html',
  styleUrls: ['./gallery-image-preview.component.scss'],
})
export class GalleryImagePreviewComponent {
  public selectedImage!: string;
  public selectedIndex: number = 0;
  @ViewChildren('imageQuickViewBox')
  public imageQuickViewBoxes!: QueryList<ElementRef<HTMLDivElement>>;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { images: Image[]; focusIndex?: number }
  ) {}

  ngOnInit() {
    this.viewImage(this.data.focusIndex ?? this.selectedIndex);
  }

  public previousImage() {
    this.selectedIndex--;
    this.viewImage(this.selectedIndex);
  }

  public nextImage() {
    this.selectedIndex++;
    this.viewImage(this.selectedIndex);
  }

  public viewImage(index: number) {
    this.selectedIndex = index;
    this.selectedImage = this.data.images[index].src;
    this.scrollIntoView(index);
  }
  
  public scrollIntoView(index: number) {
    if (this.imageQuickViewBoxes && this.imageQuickViewBoxes.get(index)) {
      this.imageQuickViewBoxes.get(index)?.nativeElement.scrollIntoView();
    }
  }
}
