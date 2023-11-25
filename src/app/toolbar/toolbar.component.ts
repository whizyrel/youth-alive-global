import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { YAG } from '../constants/route.constant';
import { ILink } from '../interfaces/link.interface';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MobileMenuComponent } from '../mobile-menu/mobile-menu.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  @ViewChild('bottomSheetTemplate')
  public bottomSheetTemplate!: TemplateRef<HTMLDivElement>;
  public readonly YAG = YAG;
  @Input() public links: ILink[] = [];

  constructor(private readonly bottomSheet: MatBottomSheet) {}

  public openBottomSheet() {
    this.bottomSheet.open(MobileMenuComponent, { data: this.links });
  }
}
