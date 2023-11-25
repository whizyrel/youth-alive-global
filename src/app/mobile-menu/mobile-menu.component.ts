import { Component, Inject } from '@angular/core';
import { ILink } from '../interfaces/link.interface';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: [
    '../toolbar/toolbar.component.scss',
    './mobile-menu.component.scss'],
})
export class MobileMenuComponent {
  public links: ILink[] = [];

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) private readonly data: ILink[], private readonly bottomSheetRef: MatBottomSheetRef) { }
  
  ngOnInit() {
    this.links = this.data;
  }

  public closeSheet() {
    this.bottomSheetRef.dismiss();
  }
}
