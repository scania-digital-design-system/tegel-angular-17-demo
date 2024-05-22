import { Component } from "@angular/core";
import { TegelModule } from "@scania/tegel-angular-17";
@Component({
  selector: "app-block",
  templateUrl: "./block.component.html",
  standalone: true,
  imports: [TegelModule],
})
export class BlockComponent {}
