import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusCorpersCtaComponent } from './campus-corpers-cta.component';

describe('CampusCorpersCtaComponent', () => {
  let component: CampusCorpersCtaComponent;
  let fixture: ComponentFixture<CampusCorpersCtaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CampusCorpersCtaComponent]
    });
    fixture = TestBed.createComponent(CampusCorpersCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
