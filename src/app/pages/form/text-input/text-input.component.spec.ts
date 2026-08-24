import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextInputComponent } from './text-input.component';
import { FormBuilder } from '@angular/forms';

describe('TextInputComponent', () => {
  let component: TextInputComponent;
  let fixture: ComponentFixture<TextInputComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TextInputComponent);
    component = fixture.componentInstance;

    fixture.componentRef.setInput("textFieldGroup", (new FormBuilder()).group({ firstName: "sweden", dateOfBirth: "2000-10-24", phoneNumber: "901287316", address: "Nothing" }))

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});