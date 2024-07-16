import { CommonModule } from "@angular/common";
import { Component, computed, input, OnInit } from "@angular/core";
import type { Column, RowData, Table } from "@tanstack/angular-table";
import { DebouncedInputDirective } from "./debounced-input.directive";

declare module "@tanstack/angular-table" {
  //allows us to define custom properties for our columns
  interface ColumnMeta<TData extends RowData, TValue> {
    filterVariant?: "text" | "range" | "select";
  }
}

@Component({
  selector: "app-table-filter",
  styleUrls: ["./table-filter.component.scss"],
  template: `
    @if (filterVariant() === 'select') {
    <select
      class="text-field-input-sm"
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
    <input
      type="text"
      class="text-field-input-sm"
      debouncedInput
      [debounce]="500"
      [attr.placeholder]="
        'Search... (' + column().getFacetedUniqueValues().size + ')'
      "
      [attr.list]="column().id + 'list'"
      [value]="columnFilterValue() ?? ''"
      (inputEvent)="column().setFilterValue($any($event).target.value)"
    />
    <div class="h-1"></div>
    }
  `,
  standalone: true,
  imports: [CommonModule, DebouncedInputDirective],
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
