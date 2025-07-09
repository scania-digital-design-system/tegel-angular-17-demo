import { Component } from "@angular/core";
import { JsonPipe } from "@angular/common";
import { TegelModule } from "@scania/tegel-angular-17";

@Component({
  selector: "app-about-page",
  standalone: true,
  templateUrl: "./about-page.component.html",
  imports: [TegelModule, JsonPipe],
})
export default class AboutPageComponent {
  selectedValues: { [key: string]: any } = {};
  Array = Array; // Make Array available in template

  handleDropdownChange(event: Event, dropdownName: string) {
    const target = event.target as HTMLTdsDropdownElement;
    this.selectedValues = {
      ...this.selectedValues,
      [dropdownName]: target.value,
    };
  }
}
