import { ComponentFixture, TestBed } from "@angular/core/testing";

import { TanstackComponent } from "./tanstack-page.component";

describe("TanstackComponent", () => {
  let component: TanstackComponent;
  let fixture: ComponentFixture<TanstackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TanstackComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TanstackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
