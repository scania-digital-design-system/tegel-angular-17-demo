import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { TegelModule } from "@scania/tegel-angular-17";

@Component({
  selector: "app-checkbox",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TegelModule],
  templateUrl: "./checkbox.component.html",
})
export class CheckboxComponent {
  @Input() checkboxGroup: FormGroup;

  handleCheckboxChange(event: any, name: string) {
    this.checkboxGroup.get(name)?.setValue(event.detail.checked);
  }
}
