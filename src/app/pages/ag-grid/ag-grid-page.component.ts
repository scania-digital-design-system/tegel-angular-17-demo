import { Component } from "@angular/core";
import AgGridColumnSearch from "./ag-grid-column-search.component";
import AgGridEditableCells from "./ag-grid-editable-cells.component";
import { AsyncPipe } from "@angular/common";
import { TegelModule } from "@scania/tegel-angular-17";

@Component({
  selector: "app-table-page",
  template: `
    <div class="tds-u-pb3">
      <tds-toggle
        (tdsToggle)="toggleMode()"
        headline="Toggle compact mode"
        size="sm"
      >
        <div slot="label">{{ labelText }}</div>
      </tds-toggle>
    </div>
    <div class="tds-headline-02 tds-u-pb1">AG-Grid Column Search</div>
    <p>This is an implementation of AG-Grid with column search.</p>
    <div
      class="ag-theme-quartz"
      [class.compact]="classCompact"
      style="height: 500px; width: 100%;"
    >
      <app-ag-grid-column-search></app-ag-grid-column-search>
    </div>
    <div class="tds-headline-02 tds-u-pb1 tds-u-pt3">
      AG-Grid Editable Cells
    </div>
    <p>This is an implementation of AG-Grid with editable cells.</p>
    <div
      class="ag-theme-quartz"
      [class.compact]="classCompact"
      style="height: 500px; width: 100%;"
    >
      <app-ag-grid-editable-cells></app-ag-grid-editable-cells>
    </div>
  `,
  styles: [``],
  standalone: true,
  imports: [
    AgGridColumnSearch,
    AgGridEditableCells,
    AsyncPipe,
    TegelModule,
  ],
})
export default class AgGridPageComponent {
  classCompact = false;
  labelText: "Compact" | "Default" = "Default";

  public toggleMode() {
    this.classCompact = !this.classCompact;
    if (this.labelText === "Compact") {
      this.labelText = "Default";
    } else {
      this.labelText = "Compact";
    }
  }
}
