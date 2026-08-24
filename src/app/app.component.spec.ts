import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { provideRouter } from '@angular/router';
import FormComponent from '@pages/form/form.component';
import AboutPageComponent from '@pages/about-page/about-page.component';

describe('AppComponent', () => {
  it('should create the app', () => {
    TestBed.configureTestingModule({
      providers: [provideRouter([{ path: "home", component: AboutPageComponent }])]
    })
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'tegel-angular-demo'`, () => {
    TestBed.configureTestingModule({
      providers: [provideRouter([{ path: "cenas", component: FormComponent }])]
    });
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Angular Demo');
  });
});
