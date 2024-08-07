import { Component, ViewChild } from "@angular/core";
import { TegelModule } from "@scania/tegel-angular-17";

@Component({
  selector: "app-dropdown",
  standalone: true,
  templateUrl: "./dropdown.component.html", // Update this line
  imports: [TegelModule],
})
export class DropdownComponent {
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
