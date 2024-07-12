import { ChangeDetectionStrategy, Component, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import {
  ColumnDef,
  createAngularTable,
  FlexRenderDirective,
  getCoreRowModel,
} from "@tanstack/angular-table";

import { makeData, type Person } from "../makeData";

import { TegelModule } from "@scania/tegel-angular-17";
import { EditableCellComponent } from "./editable-cell/editable-cell.component"; // Import the new component
import { CommonModule } from "@angular/common";

const defaultColumns: ColumnDef<Person>[] = [
  {
    accessorKey: "firstName",
    header: () => "First Name",
  },
  {
    accessorFn: (row) => row.lastName,
    id: "lastName",

    header: () => `<span>Last Name</span>`,
  },
  {
    accessorKey: "age",
    header: () => "Age",
  },
  {
    accessorKey: "visits",
    header: () => `<span>Visits</span>`,
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "progress",
    header: "Profile Progress",
  },
];

@Component({
  selector: "app-editable-data",
  standalone: true,
  imports: [
    RouterOutlet,
    FlexRenderDirective,
    TegelModule,
    EditableCellComponent,
    CommonModule,
  ], // Add the new component to imports
  templateUrl: "./editable-data.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditableDataComponent {
  readonly data = signal(makeData(10));

  table = createAngularTable(() => ({
    data: this.data(),
    columns: defaultColumns,
    getCoreRowModel: getCoreRowModel(), // Moved here
    debugTable: true,
    meta: {
      updateData: this.updateData.bind(this), // Correctly reference the method
    },
  }));

  updateData(cellRowNumber: number, cellID: string, event: any) {
    // Ensure cellRowNumber is within bounds
    if (cellRowNumber >= 0 && cellRowNumber < this.data().length) {
      const updatedData: Person[] = [...this.data()]; // Explicitly type the array
      (updatedData[cellRowNumber][cellID as keyof Person] as any) = event; // Use type assertion to avoid 'never' type error
      this.data.set(updatedData); // Update the signal with the new data
    } else {
      console.error(`Invalid cellRowNumber: ${cellRowNumber}`);
    }
  }
}
