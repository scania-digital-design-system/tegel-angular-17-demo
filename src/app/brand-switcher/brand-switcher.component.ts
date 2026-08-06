import { Component, EventEmitter, Output } from "@angular/core";
import { TegelModule } from "@scania/tegel-angular-17";

type Brand = 'scania' | 'traton';
@Component({
  selector: "app-brand-switcher",
  templateUrl: "./brand-switcher.component.html",
  standalone: true,
  imports: [TegelModule],
})
export class BrandSwitcherComponent {
  @Output() handleBrandChange = new EventEmitter<Brand>();

  currentBrand: Brand = 'scania';

  brandSelector(brand: Brand) {
    this.currentBrand = brand;
    this.handleBrandChange.emit(brand); 
  }
}
