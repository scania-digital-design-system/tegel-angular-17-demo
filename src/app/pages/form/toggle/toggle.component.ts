import { Component, Input } from "@angular/core";

import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import { TegelModule } from "@scania/tegel-angular-17";

@Component({
    selector: "app-toggle",
    imports: [ReactiveFormsModule, TegelModule],
    templateUrl: "./toggle.component.html",
    styleUrls: ["./toggle.component.css"]
})
export class ToggleComponent {
  @Input() toggleGroup: FormGroup;
}
