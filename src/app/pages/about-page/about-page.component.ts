import { Component } from "@angular/core";
import { TegelModule } from "@scania/tegel-angular-17";
import { TestEnum } from "./test-enum";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-about-page",
  standalone: true,
  templateUrl: "./about-page.component.html",
  imports: [TegelModule, CommonModule],
})
export default class AboutPageComponent {
  testEnum = TestEnum;
}
