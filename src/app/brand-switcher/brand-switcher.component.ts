import { Component, Renderer2 } from "@angular/core";
import { TegelModule } from "@scania/tegel-angular-17";

@Component({
  selector: "app-brand-switcher",
  templateUrl: "./brand-switcher.component.html",
  standalone: true,
  imports: [TegelModule],
})
export class BrandSwitcherComponent {
  brand: "scania" | "traton" = "scania";

  constructor(private renderer: Renderer2) {}

  toggleBrand() {
    if (this.brand === "scania") {
      this.brand = "traton";
      this.renderer.addClass(document.body, "traton");
    } else {
      this.brand = "scania";
      this.renderer.removeClass(document.body, "traton");
    }
  }
}
