import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinCommunityCtaComponent } from './join-community-cta.component';

describe('JoinCommunityCtaComponent', () => {
  let component: JoinCommunityCtaComponent;
  let fixture: ComponentFixture<JoinCommunityCtaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JoinCommunityCtaComponent]
    });
    fixture = TestBed.createComponent(JoinCommunityCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
