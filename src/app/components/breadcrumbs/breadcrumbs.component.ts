import { Component } from "@angular/core";
import { TegelModule } from "@scania/tegel-angular-17";

@Component({
  selector: "app-breadcrumbs",
  template: `
    <h1 class="tds-headline-02">Breadcrumbs</h1>
    <tds-breadcrumbs>
      <tds-breadcrumb>
        <a href="#">Page 1</a>
      </tds-breadcrumb>
      <tds-breadcrumb>
        <a href="#">Page 2</a>
      </tds-breadcrumb>
      <tds-breadcrumb [current]="true">
        <a href="#">Page 3</a>
      </tds-breadcrumb>
    </tds-breadcrumbs>
  `,
  standalone: true,
  imports: [TegelModule],
})
export default class BreadcrumbsComponent { }
