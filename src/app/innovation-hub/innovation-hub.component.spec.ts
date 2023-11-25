import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovationHubComponent } from './innovation-hub.component';

describe('InnovationHubComponent', () => {
  let component: InnovationHubComponent;
  let fixture: ComponentFixture<InnovationHubComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InnovationHubComponent]
    });
    fixture = TestBed.createComponent(InnovationHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
