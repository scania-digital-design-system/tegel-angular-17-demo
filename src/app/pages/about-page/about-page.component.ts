import { Component, OnDestroy, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TegelModule } from "@scania/tegel-angular-17";

type Brand = "scania" | "traton";

@Component({
  selector: "app-about-page",
  standalone: true,
  templateUrl: "./about-page.component.html",
  styleUrls: ["./about-page.component.css"],
  imports: [TegelModule, CommonModule],
})
export default class AboutPageComponent implements OnInit, OnDestroy {
  brand: Brand = "scania";

  dividerVariants: Array<
    "discrete" | "subtle" | "soft" | "defined" | "dark-blue"
  > = ["discrete", "subtle", "soft", "defined", "dark-blue"];

  ngOnInit(): void {
    this.applyBrand(this.brand);
  }

  ngOnDestroy(): void {
    document.body.classList.remove("scania", "traton");
  }

  setBrand(brand: Brand): void {
    this.brand = brand;
    this.applyBrand(brand);
  }

  private applyBrand(brand: Brand): void {
    document.body.classList.remove("scania", "traton");
    document.body.classList.add(brand);
  }
}
