import { Component } from "@angular/core";
import { TegelModule } from "@scania/tegel-angular-17";
import { ExampleProductListComponent } from "../test/test.components";
@Component({
  selector: "app-about-page",
  standalone: true,
  templateUrl: "./about-page.component.html",
  imports: [TegelModule, ExampleProductListComponent],
})
export default class AboutPageComponent {}
