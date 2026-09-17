import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ToggleComponent } from "./toggle.component";
import { FormBuilder, FormGroup } from "@angular/forms";

describe("ToggleComponent", () => {
  let component: ToggleComponent;
  let fixture: ComponentFixture<ToggleComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput("toggleGroup", (new FormBuilder()).group({ mouse: true, keyboard: true, trackpad: true, monitor: true }));
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
