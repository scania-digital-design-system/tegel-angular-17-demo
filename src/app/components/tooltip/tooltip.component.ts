import { Component } from "@angular/core";
import { TegelModule } from "@scania/tegel-angular-17";

@Component({
  selector: "app-tooltip",
  standalone: true,
  templateUrl: "./tooltip.component.html",
  styleUrls: ["./tooltip.component.css"],
  imports: [TegelModule],
})
export default class TooltipComponent {}
