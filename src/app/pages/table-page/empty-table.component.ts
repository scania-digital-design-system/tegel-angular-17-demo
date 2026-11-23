import { Component } from "@angular/core";

import { TegelModule } from "@scania/tegel-angular-17";

@Component({
  selector: "app-empty-table",
  template: `
    <div class="tds-headline-02 tds-u-pb1 tds-u-pt3">Empty Table</div>
    <p>This Table shows an empty state when there is no data.</p>
    <tds-table
      vertical-dividers="false"
      compact-design="false"
      responsive
      no-min-width
    >
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
      <tds-table-body empty-state="no-data">
        <div
          slot="no-data"
          class="tds-u-flex-center"
          style="padding: var(--unit-32);"
        >
          <div class="tds-u-flex tds-u-gap2" style="max-width: 560px;">
            <tds-icon name="truck" size="28px" aria-hidden="true"></tds-icon>
            <div>
              <h4 class="tds-headline-04" style="margin: 0;">
                No vehicles yet
              </h4>
              <p
                class="tds-body-02"
                style="margin-block: var(--unit-16) 0; color: var(--color-text-defined);"
              >
                Add a vehicle to start building your fleet, or choose a vehicle
                type to get started.
              </p>
              <div
                class="tds-u-flex tds-u-flex-wrap tds-u-gap2"
                style="margin-block-start: var(--unit-32);"
                role="group"
                aria-label="Vehicle types"
              >
                @for (label of vehicleTypes; track label) {
                  <tds-chip type="button" size="lg"
                    ><span slot="label">{{ label }}</span></tds-chip
                  >
                }
              </div>
              <div
                class="tds-u-flex tds-u-flex-wrap tds-u-gap2"
                style="align-items: center; margin-block-start: var(--unit-32);"
              >
                <tds-button
                  variant="primary"
                  size="sm"
                  text="Add vehicle"
                ></tds-button>
                <tds-button
                  variant="secondary"
                  size="sm"
                  text="Import vehicles"
                ></tds-button>
                <tds-button
                  variant="ghost"
                  size="sm"
                  text="View sample fleet"
                ></tds-button>
                <tds-link underline><a href="#">Explore Scania</a></tds-link>
              </div>
            </div>
          </div>
        </div>
      </tds-table-body>
    </tds-table>
  `,
  imports: [TegelModule],
})
export class EmptyTableComponent {
  vehicleTypes = ["Trucks", "Buses", "Vans", "Trailers", "Other"];
}
