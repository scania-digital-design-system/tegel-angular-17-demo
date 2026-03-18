import { Component } from "@angular/core";
import { TegelModule } from "@scania/tegel-angular-17";
import { TestEnum } from "./test-enum";
import { CommonModule } from "@angular/common";
import { of, delay } from "rxjs";

@Component({
  selector: "app-about-page",
  standalone: true,
  templateUrl: "./about-page.component.html",
  imports: [TegelModule, CommonModule],
})
export default class AboutPageComponent {
  testEnum = TestEnum;

  options$ = of(this.testEnum).pipe(delay(2000));
}
