import { Component } from "@angular/core";
import { TegelModule } from "@scania/tegel-angular-17";

type Brand = "scania" | "traton";

@Component({
  selector: "app-about-page",
  standalone: true,
  templateUrl: "./about-page.component.html",
  styleUrl: "./about-page.component.css",
  imports: [TegelModule],
})
export default class AboutPageComponent {
  brand: Brand = "scania";
  selectedMeal = "salmon";

  meals = [
    { value: "salmon", label: "Salmon" },
    { value: "veal", label: "Veal" },
    { value: "chicken", label: "Chicken" },
  ];

  setBrand(event: Event) {
    const { checked } = (event as CustomEvent<{ toggleId: string; checked: boolean }>).detail;
    this.brand = checked ? "traton" : "scania";
  }
}
