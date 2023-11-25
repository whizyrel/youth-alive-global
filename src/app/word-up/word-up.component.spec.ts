import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordUpComponent } from './word-up.component';

describe('WordUpComponent', () => {
  let component: WordUpComponent;
  let fixture: ComponentFixture<WordUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WordUpComponent]
    });
    fixture = TestBed.createComponent(WordUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
