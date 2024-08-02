import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { TegelModule } from "@scania/tegel-angular-17";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this line
  imports: [TegelModule],
})
export class ButtonComponent {}
