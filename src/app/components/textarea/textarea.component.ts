import { Component } from "@angular/core";
import { TegelModule } from "@scania/tegel-angular-17";

@Component({
  selector: "app-textarea",
  standalone: true,
  templateUrl: "./textarea.component.html",
  imports: [TegelModule],
})
export default class TextareaComponent {}
