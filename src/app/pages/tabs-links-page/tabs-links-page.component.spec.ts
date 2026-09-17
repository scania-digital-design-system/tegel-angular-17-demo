import { ComponentFixture, TestBed } from '@angular/core/testing';

import  TabsLinksPageComponent  from './tabs-links-page.component';
import { ActivatedRoute, provideRouter } from '@angular/router';
import TabsSubpageComponent from './tabs-subpage/tabs-subpage.component';

describe('TabsLinksPageComponent', () => {
  let component: TabsLinksPageComponent;
  let fixture: ComponentFixture<TabsLinksPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideRouter([{ path: "first-tab", component: TabsSubpageComponent }])]
    });
    fixture = TestBed.createComponent(TabsLinksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
