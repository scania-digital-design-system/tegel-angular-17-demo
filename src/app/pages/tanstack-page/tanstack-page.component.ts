import { Component } from "@angular/core";
import { ColumnSearchComponent } from "@components/tanstack-table/filtering/column-search/column-search.component";
import { EditableDataComponent } from "@components/tanstack-table/editable-data/editable-data.component";

@Component({
  selector: "app-tanstack",
  standalone: true,
  imports: [ColumnSearchComponent, EditableDataComponent],
  templateUrl: "./tanstack-page.component.html",
})
export default class TanstackComponent {}
