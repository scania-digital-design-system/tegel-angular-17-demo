import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { TegelModule } from "@scania/tegel-angular-17";

@Component({
  selector: "app-text-field",
  standalone: true,
  templateUrl: "./text-field.component.html",
  imports: [TegelModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Add this line
})
export default class TextFieldComponent {}
