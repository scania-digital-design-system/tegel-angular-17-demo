import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import { TegelModule } from "@scania/tegel-angular-17";

@Component({
    selector: "app-radio-button",
    templateUrl: "./radio-button.component.html",
    imports: [CommonModule, ReactiveFormsModule, TegelModule]
})
export class RadioButtonComponent {
  @Input() radioButtonGroup: FormGroup;
}
