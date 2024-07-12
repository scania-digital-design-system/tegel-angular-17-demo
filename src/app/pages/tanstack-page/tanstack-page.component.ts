import { Component } from "@angular/core";
import { ColumnSearchComponent } from "@components/tanstack-table/filtering/column-search/column-search.component";

@Component({
  selector: "app-tanstack",
  standalone: true,
  imports: [ColumnSearchComponent],
  templateUrl: "./tanstack-page.component.html",
})
export default class TanstackComponent {}
