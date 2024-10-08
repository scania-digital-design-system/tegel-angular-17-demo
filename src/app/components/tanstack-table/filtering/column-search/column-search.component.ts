import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from "@angular/core";
import {
  ColumnDef,
  type ColumnFiltersState,
  createAngularTable,
  FlexRenderDirective,
  getCoreRowModel,
  getFacetedMinMaxValues,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getSortedRowModel,
} from "@tanstack/angular-table";
import { TegelModule } from "@scania/tegel-angular-17";
import { FilterComponent } from "../table-filter.component";
import { makeData, type Person } from "../../makeData";
import { FormsModule } from "@angular/forms";
import { NgClass } from "@angular/common";

@Component({
  selector: "app-column-search",
  standalone: true,
  imports: [
    FilterComponent,
    FlexRenderDirective,
    FormsModule,
    NgClass,
    TegelModule,
  ],
  templateUrl: "./column-search.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColumnSearchComponent {
  readonly columnFilters = signal<ColumnFiltersState>([]);
  readonly data = signal(makeData(10));

  readonly columns: ColumnDef<Person>[] = [
    {
      accessorKey: "firstName",
      header: () => "First Name",
      cell: (info) => info.getValue(),
    },
    {
      accessorFn: (row) => row.lastName,
      id: "lastName",
      cell: (info) => info.getValue(),
      header: () => "Last Name",
    },
    {
      accessorKey: "age",
      header: () => "Age",
    },
    {
      accessorKey: "visits",
      header: () => "Visits",
    },
    {
      accessorKey: "progress",
      header: "Profile Progress",
    },
  ];

  table = createAngularTable<Person>(() => ({
    columns: this.columns,
    data: this.data(),
    state: {
      columnFilters: this.columnFilters(),
    },
    globalFilterFn: "includesString",
    onColumnFiltersChange: (updater) => {
      updater instanceof Function
        ? this.columnFilters.update(updater)
        : this.columnFilters.set(updater);
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(), //client-side filtering
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(), // client-side faceting
    getFacetedUniqueValues: getFacetedUniqueValues(), // generate unique values for select filter/autocomplete
    getFacetedMinMaxValues: getFacetedMinMaxValues(), // generate min/max values for range filter
    debugTable: false,
    debugHeaders: false,
    debugColumns: false,
  }));

  readonly stringifiedFilters = computed(() =>
    JSON.stringify(this.columnFilters(), null, 2)
  );

  onPageInputChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const page = inputElement.value ? Number(inputElement.value) - 1 : 0;
    this.table.setPageIndex(page);
  }

  refreshData(): void {
    this.data.set(makeData(100_000)); // stress test
  }
}
