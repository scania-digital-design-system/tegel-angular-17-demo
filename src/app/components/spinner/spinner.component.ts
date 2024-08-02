import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TegelModule } from "@scania/tegel-angular-17";

@Component({
  selector: "app-spinner",
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this line
  imports: [CommonModule, TegelModule],
  templateUrl: "./spinner.component.html",
})
export default class SpinnerComponent {}
