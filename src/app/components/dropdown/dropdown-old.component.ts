import { Component, ViewChild } from "@angular/core";
import { TegelModule } from "@scania/tegel-angular-17";

@Component({
  selector: "app-dropdown-old",
  standalone: true,
  templateUrl: "./dropdown-old.component.html", // Update this line
  imports: [TegelModule],
})
export class DropdownOldComponent {
  @ViewChild("dropdownRef", { static: true })
  dropdownRef: HTMLTdsDropdownElement;

  resetDropdown() {
    // Check if the dropdown component instance is accessible
    if (this.dropdownRef) {
      this.dropdownRef.reset();
    } else {
      console.log("Dropdown reference is NOT valid, cannot call reset.");
    }
  }
}
