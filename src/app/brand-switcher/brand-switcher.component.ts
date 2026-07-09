import { Component, EventEmitter, Output } from "@angular/core";
import { TegelModule } from "@scania/tegel-angular-17";

@Component({
  selector: "app-brand-switcher",
  templateUrl: "./brand-switcher.component.html",
  standalone: true,
  imports: [TegelModule],
})
export class BrandSwitcherComponent {
  @Output() brandToggle = new EventEmitter<void>();

  labelText: "scania" | "traton" = "scania";

  toggleBrand() {
    this.brandToggle.emit();
    if (this.labelText === "scania") {
      this.labelText = "traton";
    } else {
      this.labelText = "scania";
    }
  }
}
