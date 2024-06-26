import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { Router, RouterLink, RouterOutlet } from "@angular/router";
import BreadcrumbsComponent from "../../navigation/breadcrumbs/breadcrumbs.component";
import { TegelModule } from "@scania/tegel-angular-17";

@Component({
  selector: "app-text-page",
  templateUrl: "./text-page.component.html",
  standalone: true,
  imports: [
    BreadcrumbsComponent,
    RouterLink,
    RouterOutlet,
    CommonModule,
    TegelModule,
  ],
})
export default class TextPageComponent {
  constructor(private router: Router) {}

  tegelStorybook = "https://tegel-storybook.netlify.app/";

  isTextRoute(): boolean {
    return this.router.url === "/text";
  }
}
