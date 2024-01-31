import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GalleryImagePreviewComponent } from '../gallery-image-preview/gallery-image-preview.component';

export interface Image {
  src: string;
  name?: string;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  public imageBatch: Image[] = [];
  @Input() public images: Image[] = [];
  public MAX_IMAGE_BATCH = 10;
  public currentBatch = 0;

  constructor(private readonly dialog: MatDialog) {}

  ngOnInit() {
    this.initializeGallery();
  }

  public openPreview(index: number) {
    this.dialog.open(GalleryImagePreviewComponent, {
      data: {
        images: this.images,
        focusIndex: index + this.currentBatch * this.MAX_IMAGE_BATCH,
      },
      width: '100%',
      maxWidth: '100%',
      minWidth: '100%',
      height: '100%',
      maxHeight: '100%',
      minHeight: '100%',
      panelClass: ['transparent-mat-dialog-surface'],
    });
  }

  public initializeGallery() {
    const start = this.currentBatch * this.MAX_IMAGE_BATCH;
    const end = start + this.MAX_IMAGE_BATCH;

    this.imageBatch = this.images.slice(start, end);
  }

  public atEndOfGallery() {
    return (this.currentBatch + 1) * this.MAX_IMAGE_BATCH >= this.images.length;
  }

  public previous() {
    this.currentBatch--;

    const start = this.currentBatch * this.MAX_IMAGE_BATCH;
    const end = start + this.MAX_IMAGE_BATCH;

    this.imageBatch = this.images.slice(start, end);
  }

  public next() {
    this.currentBatch++;

    const start = this.currentBatch * this.MAX_IMAGE_BATCH;
    const end = start + this.MAX_IMAGE_BATCH;

    this.imageBatch = this.images.slice(start, end);
  }
}
