import { ComponentFixture, TestBed } from '@angular/core/testing';

import TabsSubpageComponent from './tabs-subpage.component';

describe('TabsSubpageComponent', () => {
  let component: TabsSubpageComponent;
  let fixture: ComponentFixture<TabsSubpageComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsSubpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
