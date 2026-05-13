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

  modalOpen = false;
  overlayOpen = false;
  toastVisible = false;

  icons: string[] = [
    "truck",
    "bus",
    "engine",
    "fuel",
    "settings",
    "info",
    "warning",
    "tick",
    "cross",
    "search",
    "filters",
    "calendar",
    "clock",
    "email",
    "phone",
    "profile",
    "notification",
    "download",
    "upload",
    "save",
  ];

  scrollRows: number[] = Array.from({ length: 30 }, (_, i) => i + 1);

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

  openModal(): void {
    this.modalOpen = true;
  }

  closeModal(): void {
    this.modalOpen = false;
  }

  openOverlay(): void {
    this.overlayOpen = true;
  }

  closeOverlay(): void {
    this.overlayOpen = false;
  }

  toggleToast(): void {
    this.toastVisible = !this.toastVisible;
  }

  private applyBrand(brand: Brand): void {
    document.body.classList.remove("scania", "traton");
    document.body.classList.add(brand);
  }
}
