import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from '../footer/footer.component';
import { JoinCommunityCtaComponent } from '../join-community-cta/join-community-cta.component';
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CampusCorpersCtaComponent } from '../campus-corpers-cta/campus-corpers-cta.component';
import { FaqsComponent } from '../faqs/faqs.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MobileMenuComponent } from '../mobile-menu/mobile-menu.component';

const modules = [
  RouterModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatDividerModule,
  MatFormFieldModule,
  MatInputModule,
  MatExpansionModule,
  MatBottomSheetModule,
];

@NgModule({
  declarations: [
    FooterComponent,
    JoinCommunityCtaComponent,
    ToolbarComponent,
    CampusCorpersCtaComponent,
    FaqsComponent,
    MobileMenuComponent
  ],
  imports: [CommonModule, ...modules],
  exports: [
    ...modules,
    FooterComponent,
    JoinCommunityCtaComponent,
    ToolbarComponent,
    CampusCorpersCtaComponent,
    FaqsComponent,
    MobileMenuComponent
  ],
})
export class SharedModule {}
