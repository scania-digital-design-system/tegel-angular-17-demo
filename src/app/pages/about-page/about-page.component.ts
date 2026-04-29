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

  buttonVariants: Array<"primary" | "secondary" | "ghost" | "danger"> = [
    "primary",
    "secondary",
    "ghost",
    "danger",
  ];

  buttonSizes: Array<"xs" | "sm" | "md" | "lg"> = ["xs", "sm", "md", "lg"];

  tagVariants: Array<
    "neutral" | "information" | "success" | "warning" | "error" | "new"
  > = ["neutral", "information", "success", "warning", "error", "new"];

  tooltipPlacements: Array<"top" | "bottom" | "left" | "right"> = [
    "top",
    "bottom",
    "left",
    "right",
  ];

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
