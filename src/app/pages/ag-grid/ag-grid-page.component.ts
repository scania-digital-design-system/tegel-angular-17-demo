import { Component } from "@angular/core";
import AgGridColumnSearch from "./ag-grid-column-search.component";
import AgGridEditableCells from "./ag-grid-editable-cells.component";
import { AsyncPipe } from "@angular/common";
import { TegelModule } from "@scania/tegel-angular-17";

@Component({
  selector: "app-table-page",
  template: `
    <div
      class="tds-mode-variant-primary"
      style="height: 500px; width: 100%; padding: 20px; padding-bottom: 100px"
    >
      <h4>Primary mode variant</h4>
      <app-ag-grid-column-search></app-ag-grid-column-search>
    </div>

    <div
      class="tds-mode-variant-secondary"
      style="height: 500px; width: 100%; padding: 20px; padding-bottom: 100px; margin-top: 10px; margin-bottom: 10px"
    >
      <h4 style="margin-top: 10px">Secondary mode variant</h4>
      <app-ag-grid-editable-cells></app-ag-grid-editable-cells>
    </div>
  `,
  standalone: true,
  imports: [AgGridColumnSearch, AgGridEditableCells, AsyncPipe, TegelModule],
})
export default class AgGridPageComponent {}
