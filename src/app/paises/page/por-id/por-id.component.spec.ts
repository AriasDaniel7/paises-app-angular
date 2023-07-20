import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorIdComponent } from './por-id.component';

describe('PorIdComponent', () => {
  let component: PorIdComponent;
  let fixture: ComponentFixture<PorIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PorIdComponent]
    });
    fixture = TestBed.createComponent(PorIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
