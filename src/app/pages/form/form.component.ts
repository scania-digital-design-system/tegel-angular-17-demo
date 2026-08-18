import { Component } from "@angular/core";
import { CommonModule, Location } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import ReactiveFormsComponent from "./reactive-forms/reactive-forms.component";
import { Router, RouterModule } from "@angular/router";
import SimpleFormComponent from "src/app/pages/form/simple-form/simple-form.component";
import BreadcrumbsComponent from "../../navigation/breadcrumbs/breadcrumbs.component";
import { TegelModule } from "@scania/tegel-angular-17";
import { untilDestroyedRef } from "src/utils";

@Component({
    selector: "app-form",
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        TegelModule,
    ],
    templateUrl: "./form.component.html",
    styleUrls: ["./form.component.css"]
})
export default class FormComponent {
  fullPath: string;
  currentPathIndex: number;
  private untilDestroyed = untilDestroyedRef();

  constructor(private router: Router, private location: Location) {
    this.router.events.pipe(this.untilDestroyed()).subscribe(() => {
      this.fullPath = this.location.path(); // gives you the relative URL
      this.currentPathIndex = [
        "simple-form", "reactive-forms"
      ].findIndex((pathSegment) => this.fullPath.includes(pathSegment));
    });
  }
}
