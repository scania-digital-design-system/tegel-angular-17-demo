import { CommonModule } from "@angular/common";
import { Component, computed, input } from "@angular/core";
import type { Column, RowData, Table } from "@tanstack/angular-table";
import { DebouncedInputDirective } from "./debounced-input.directive";
import { TegelModule } from "@scania/tegel-angular-17";

declare module "@tanstack/angular-table" {
  //allows us to define custom properties for our columns
  interface ColumnMeta<TData extends RowData, TValue> {
    filterVariant?: "text" | "range" | "select";
  }
}

@Component({
  selector: "app-table-filter",
  template: `
    @if (filterVariant() === 'select') {
    <select
      [value]="columnFilterValue()?.toString()"
      (change)="column().setFilterValue($any($event).target.value)"
    >
      <option value="">All</option>
      @for (value of sortedUniqueValues(); track value) {
      <option [value]="value">
        {{ value }}
      </option>
      }
    </select>
    } @else {
    <tds-table-header-input-wrapper>
      <input
        type="text"
        debouncedInput
        [debounce]="500"
        [attr.placeholder]="
          'Search... (' + column().getFacetedUniqueValues().size + ')'
        "
        [attr.list]="column().id + 'list'"
        [value]="columnFilterValue() ?? ''"
        (inputEvent)="column().setFilterValue($any($event).target.value)"
      />
    </tds-table-header-input-wrapper>

    }
  `,
  standalone: true,
  imports: [CommonModule, DebouncedInputDirective, TegelModule],
})
export class FilterComponent<T> {
  column = input.required<Column<any, any>>();

  table = input.required<Table<T>>();

  readonly filterVariant = computed(() => {
    return (this.column().columnDef.meta ?? {}).filterVariant;
  });

  readonly columnFilterValue = computed<any>(() =>
    this.column().getFilterValue()
  );

  readonly sortedUniqueValues = computed(() => {
    const filterVariant = this.filterVariant();
    const column = this.column();
    if (filterVariant === "range") {
      return [];
    }
    return Array.from(column.getFacetedUniqueValues().keys())
      .sort()
      .slice(0, 5000);
  });
}
