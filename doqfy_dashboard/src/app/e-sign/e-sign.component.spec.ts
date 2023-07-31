import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ESignComponent } from './e-sign.component';

describe('ESignComponent', () => {
  let component: ESignComponent;
  let fixture: ComponentFixture<ESignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ESignComponent]
    });
    fixture = TestBed.createComponent(ESignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
