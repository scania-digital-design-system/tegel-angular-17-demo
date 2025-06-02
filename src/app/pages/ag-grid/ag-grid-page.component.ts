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
        headline="Toggle compact mode (currently not working)"
        size="sm"
      >
        <div slot="label">{{ labelText }}</div>
      </tds-toggle>
    </div>

    <div
      class="ag-theme-quartz tds-mode-variant-primary"
      [class.compact]="classCompact"
      style="height: 500px; width: 100%;"
    >
      <h4>Primary mode variant</h4>
      <app-ag-grid-column-search></app-ag-grid-column-search>
    </div>

    <div
      class="ag-theme-quartz tds-mode-variant-secondary"
      [class.compact]="classCompact"
      style="height: 500px; width: 100%;"
    >
      <h4 style="margin-top: 100px">Secondary mode variant</h4>
      <app-ag-grid-editable-cells></app-ag-grid-editable-cells>
    </div>

    <div style="margin-top: 100px"></div>
  `,
  styles: [``],
  standalone: true,
  imports: [AgGridColumnSearch, AgGridEditableCells, AsyncPipe, TegelModule],
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
