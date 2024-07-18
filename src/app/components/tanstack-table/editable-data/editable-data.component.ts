import { ChangeDetectionStrategy, Component, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import {
  ColumnDef,
  createAngularTable,
  FlexRenderDirective,
  getCoreRowModel,
  FlexRenderComponent,
} from "@tanstack/angular-table";
import { TegelModule } from "@scania/tegel-angular-17";
import { EditableCellComponent } from "./editable-cell/editable-cell.component"; // Import the new component

type Person = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
};

const defaultData: Person[] = [
  {
    firstName: "tanner",
    lastName: "linsley",
    age: 24,
    visits: 100,
    status: "In Relationship",
    progress: 50,
  },
  {
    firstName: "tandy",
    lastName: "miller",
    age: 40,
    visits: 40,
    status: "Single",
    progress: 80,
  },
  {
    firstName: "joe",
    lastName: "dirte",
    age: 45,
    visits: 20,
    status: "Complicated",
    progress: 10,
  },
];

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
  ], // Add the new component to imports
  templateUrl: "./editable-data.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditableDataComponent {
  data = signal<Person[]>(defaultData);

  table = createAngularTable(() => ({
    data: this.data(),
    columns: defaultColumns,

    getCoreRowModel: getCoreRowModel(), // Moved here
    debugTable: true,
  }));

  updateData(rowIndex: number, columnId: string, value: any) {
    const updatedData = [...this.data()];
    (updatedData[rowIndex] as any)[columnId] = value; // Use type assertion
    this.data.set(updatedData);
  }

  rerender() {
    this.data.set([...defaultData.sort(() => -1)]);
  }
}
