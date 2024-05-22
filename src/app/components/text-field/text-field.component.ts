import { Component } from "@angular/core";
import { TegelModule } from "@scania/tegel-angular-17";

@Component({
  selector: "app-text-field",
  standalone: true,
  templateUrl: "./text-field.component.html",
  imports: [TegelModule],
})
export default class TextFieldComponent {}
