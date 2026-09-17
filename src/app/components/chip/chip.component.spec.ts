import { ComponentFixture, TestBed } from '@angular/core/testing';

import ChipsPageComponent from './chip.component';

describe('ChipsPageComponent', () => {
  let component: ChipsPageComponent;
  let fixture: ComponentFixture<ChipsPageComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
