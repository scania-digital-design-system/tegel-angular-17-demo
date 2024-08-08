import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import { TegelModule } from "@scania/tegel-angular-17";

@Component({
  selector: "app-checkbox",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TegelModule],
  templateUrl: "./checkbox.component.html",
})
export class CheckboxComponent {
  @Input() checkboxGroup: FormGroup;
}
