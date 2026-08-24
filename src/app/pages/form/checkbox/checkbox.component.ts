import { Component, Input } from "@angular/core";

import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import { TegelModule } from "@scania/tegel-angular-17";

@Component({
    selector: "app-checkbox",
    imports: [ReactiveFormsModule, TegelModule],
    templateUrl: "./checkbox.component.html"
})
export class CheckboxComponent {
  @Input() checkboxGroup: FormGroup;
}
