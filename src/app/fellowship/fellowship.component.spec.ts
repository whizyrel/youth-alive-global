import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FellowshipComponent } from './fellowship.component';

describe('FellowshipComponent', () => {
  let component: FellowshipComponent;
  let fixture: ComponentFixture<FellowshipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FellowshipComponent]
    });
    fixture = TestBed.createComponent(FellowshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
