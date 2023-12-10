import { Component } from '@angular/core';
import { ILink } from './interfaces/link.interface';
import { IExternalLink } from './interfaces/external-link.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public readonly toolbarLinks: ILink[] = [
    { title: 'Fellowship', paths: ['/', 'fellowship'] },
    { title: 'Campus', paths: ['/', 'campus'] },
    { title: 'Corpers', paths: ['/', 'corpers'] },
    { title: 'Word Up', paths: ['/', 'word-up'] },
    { title: 'Innovation Hub', paths: ['/', 'innovation-hub'] },
  ];
  public readonly footerLinks: ILink[] = [
    ...this.toolbarLinks,
    { title: 'Contact us', paths: ['/', 'contact-us'] },
  ];
  public readonly footerSocialLinks: IExternalLink[] =[
    { title: 'Facebook', href: 'https://facebook.com' },
    { title: 'Instagram', href: 'https://instagram.com' },
    { title: 'Twitter / X', href: 'https://x.com' },
    { title: 'LinkedIn', href: 'https://linkedin.com' },
    { title: 'Tiktok', href: 'https://tiktok.com' },
  ];
}
