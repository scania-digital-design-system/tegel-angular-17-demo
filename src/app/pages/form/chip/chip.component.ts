import { Component, Input } from "@angular/core";
import { FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";

import { TegelModule } from "@scania/tegel-angular-17";

@Component({
    selector: "app-chip",
    templateUrl: "./chip.component.html",
    imports: [FormsModule, ReactiveFormsModule, TegelModule],
    styleUrls: ["./chip.component.css"]
})
export class ChipComponent {
  @Input() chipGroup: FormGroup;
  @Input() chipRadioGroup: FormGroup;
}
