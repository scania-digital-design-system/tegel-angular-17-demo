import { ComponentFixture, TestBed } from '@angular/core/testing';

import FormComponent from './form.component';
import TabsSubpageComponent from '@pages/tabs-links-page/tabs-subpage/tabs-subpage.component';
import { provideRouter } from '@angular/router';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideRouter([{ path: "first-tab", component: TabsSubpageComponent }])]
    });
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
