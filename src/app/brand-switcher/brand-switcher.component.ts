import { Component, OnInit } from "@angular/core";
import { TegelModule } from "@scania/tegel-angular-17";

@Component({
  selector: "app-brand-switcher",
  templateUrl: "./brand-switcher.component.html",
  standalone: true,
  imports: [TegelModule],
})
export class BrandSwitcherComponent implements OnInit {
  brand: "scania" | "traton" = "scania";
  labelText: "Scania" | "Traton" = "Scania";

  ngOnInit(): void {
    this.applyBrand();
  }

  toggleBrand() {
    this.brand = this.brand === "scania" ? "traton" : "scania";
    this.labelText = this.brand === "scania" ? "Scania" : "Traton";
    this.applyBrand();
  }

  private applyBrand() {
    const body = document.body;
    body.classList.remove("scania", "traton");
    body.classList.add(this.brand);
  }
}
