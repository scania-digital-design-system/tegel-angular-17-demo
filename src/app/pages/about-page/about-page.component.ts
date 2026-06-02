import { Component } from "@angular/core";
import { TegelModule } from "@scania/tegel-angular-17";
import { ICON_NAMES } from "./icons";

type Brand = "scania" | "traton";

@Component({
  selector: "app-about-page",
  standalone: true,
  templateUrl: "./about-page.component.html",
  styleUrl: "./about-page.component.css",
  imports: [TegelModule],
})
export default class AboutPageComponent {
  readonly allIcons = ICON_NAMES;
  brand: Brand = "scania";
  query = "";

  get filteredIcons(): string[] {
    const q = this.query.trim().toLowerCase();
    return q ? this.allIcons.filter((name) => name.includes(q)) : this.allIcons;
  }

  setBrand(event: Event) {
    const { checked } = (event as CustomEvent<{ toggleId: string; checked: boolean }>).detail;
    this.brand = checked ? "traton" : "scania";
  }

  onSearch(event: Event) {
    this.query = (event.target as HTMLInputElement).value;
  }
}
