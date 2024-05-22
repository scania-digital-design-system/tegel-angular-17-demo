import { Component, Input } from "@angular/core";
import { TegelModule } from "@scania/tegel-angular-17";

@Component({
  selector: "app-tabs-subpage",
  standalone: true,
  templateUrl: "./tabs-subpage.component.html",
  imports: [TegelModule],
})
export default class TabsSubpageComponent {
  @Input() pathIndex: number;
}
