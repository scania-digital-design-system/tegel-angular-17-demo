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

  labelText: "Traton" | "Scania" = "Scania";

  toggleBrand() {
    this.labelText = this.labelText === "Scania" ? "Traton" : "Scania";
    this.brandToggle.emit();
  }
}
