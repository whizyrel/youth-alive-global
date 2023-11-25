import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-campus-corpers-cta',
  templateUrl: './campus-corpers-cta.component.html',
  styleUrls: ['./campus-corpers-cta.component.scss']
})
export class CampusCorpersCtaComponent {
  @Input() public ctaHeading!: string;

}
