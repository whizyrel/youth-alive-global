import { Component } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss'],
})
export class FaqsComponent {
  public faqs: { title: string; body: string }[] = [
    {
      title: 'What makes Youth Alive fellowship community different?',
      body: '',
    },
    {
      title: "How can I get involved in Youth Alive's events?",
      body: '',
    },
    {
      title: "What's the essence of the 'fired community' theme?",
      body: '',
    },
    {
      title: "What makes Youth Alive's fellowship unique?",
      body: '',
    },
    {
      title: 'How does Youth Alive foster personal growth?',
      body: '',
    },
    {
      title: 'What opportunities are there for community involvement?',
      body: '',
    },
  ];
  public faqExpPanelStateMap: Map<number, boolean> = new Map();

  public togglePanel(i: number) {
    this.faqExpPanelStateMap.set(i, this.faqExpPanelStateMap.get(i) ? !this.faqExpPanelStateMap : true);
  }
}
