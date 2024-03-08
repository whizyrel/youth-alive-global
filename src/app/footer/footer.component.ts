import { Component, Input } from '@angular/core';
import { ILink } from '../interfaces/link.interface';
import { IExternalLink } from '../interfaces/external-link.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  public readonly address: string =
    'Global Youth Office, Living Faith Church, Canaanland, Ota, Nigeria.';
  public readonly contactNumber = {
    title: '+234 816 287 9125',
    no: '2348162879125',
  };
  public readonly email = 'yafreports@gmail.com';
  @Input() public links: ILink[] = [];
  @Input() public socialLinks: IExternalLink[] = [];
}
