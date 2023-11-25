import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorpersComponent } from './corpers.component';

describe('CorpersComponent', () => {
  let component: CorpersComponent;
  let fixture: ComponentFixture<CorpersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CorpersComponent]
    });
    fixture = TestBed.createComponent(CorpersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
