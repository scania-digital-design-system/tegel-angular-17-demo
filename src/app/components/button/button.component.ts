import { Component } from "@angular/core";
import { TegelModule } from "@scania/tegel-angular-17";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  standalone: true,
  imports: [TegelModule],
})
export class ButtonComponent {}
