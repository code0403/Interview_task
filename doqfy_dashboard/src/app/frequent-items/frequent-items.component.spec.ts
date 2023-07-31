import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequentItemsComponent } from './frequent-items.component';

describe('FrequentItemsComponent', () => {
  let component: FrequentItemsComponent;
  let fixture: ComponentFixture<FrequentItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrequentItemsComponent]
    });
    fixture = TestBed.createComponent(FrequentItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
