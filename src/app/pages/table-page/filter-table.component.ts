import { Component, ElementRef, ViewChild } from "@angular/core";
import exampleData from "./exampleData.json";

import { TegelModule } from "@scania/tegel-angular-17";

@Component({
  selector: "app-filter-table",
  template: `
    <div class="tds-headline-02 tds-u-pb1 tds-u-pt3">Filter Table</div>
    <p>This Table can be filtered.</p>
    <tds-table
      vertical-dividers="false"
      compact-design="false"
      responsive
      no-min-width
    >
      <tds-table-toolbar
        #toolbar
        table-title="Filter"
        filter
        tds-search-aria-label="Search vehicles"
        (tdsFilter)="handleFilter($event)"
      ></tds-table-toolbar>
      <tds-table-header>
        <tds-header-cell
          cell-key="truck"
          cell-value="Truck type"
        ></tds-header-cell>
        <tds-header-cell
          cell-key="driver"
          cell-value="Driver name"
        ></tds-header-cell>
        <tds-header-cell
          cell-key="country"
          cell-value="Country"
        ></tds-header-cell>
        <tds-header-cell
          cell-key="mileage"
          cell-value="Mileage"
          text-align="right"
        ></tds-header-cell>
      </tds-table-header>
      <tds-table-body
        [emptyState]="tableData.length === 0 ? 'no-filtered-data' : 'none'"
      >
        <div
          slot="no-filtered-data"
          class="tds-u-flex-center"
          style="padding: var(--unit-32);"
        >
          <div class="tds-u-flex tds-u-gap2" style="max-width: 560px;">
            <tds-icon name="search" size="28px" aria-hidden="true"></tds-icon>
            <div>
              <h4 class="tds-headline-04" style="margin: 0;">No data found</h4>
              <p
                class="tds-body-02"
                style="margin-block: var(--unit-16) 0; color: var(--color-text-defined);"
              >
                There's nothing to show here yet. Try adjusting your filters or
                check back later.
              </p>
              <tds-button
                variant="primary"
                size="sm"
                text="Clear filters"
                style="margin-block-start: var(--unit-32);"
                (click)="clearFilters()"
              ></tds-button>
            </div>
          </div>
        </div>
        @for (row of tableData; track row) {
          <tds-table-body-row>
            <tds-body-cell cell-key="truck">
              {{ row.truck }}
            </tds-body-cell>
            <tds-body-cell cell-key="driver">
              {{ row.driver }}
            </tds-body-cell>
            <tds-body-cell cell-key="country">
              {{ row.country }}
            </tds-body-cell>
            <tds-body-cell text-align="right" cell-key="mileage">
              {{ row.mileage }}
            </tds-body-cell>
          </tds-table-body-row>
        }
      </tds-table-body>
    </tds-table>
  `,
  styles: [``],
  imports: [TegelModule],
})
export class FilterTableComponent {
  @ViewChild("toolbar", { read: ElementRef })
  toolbar!: ElementRef<HTMLTdsTableToolbarElement>;
  tableData = exampleData;

  clearFilters() {
    const searchField =
      this.toolbar.nativeElement.shadowRoot?.querySelector("tds-text-field");
    if (searchField) {
      searchField.value = "";
    }
    this.tableData = exampleData;
  }

  handleFilter(event: any) {
    const { query } = event.detail;
    this.tableData = exampleData.filter((object) =>
      Object.values(object).some((value) =>
        value.toString().toLowerCase().includes(query.toLowerCase()),
      ),
    );
  }
}
