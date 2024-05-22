import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import { TegelModule } from "@scania/tegel-angular-17";

@Component({
  selector: "app-radio-button",
  standalone: true,
  templateUrl: "./radio-button.component.html",
  imports: [CommonModule, ReactiveFormsModule, TegelModule],
})
export class RadioButtonComponent {
  @Input() radioButtonGroup: FormGroup;

  handleRadioChange(event: any, name: string) {
    console.log(this.radioButtonGroup.get(name));
    console.log(event.detail.value);
    this.radioButtonGroup.get(name)?.setValue(event.detail.value);
  }
}
