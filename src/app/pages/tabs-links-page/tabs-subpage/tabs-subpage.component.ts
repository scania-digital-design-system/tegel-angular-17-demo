import { Component, Input } from "@angular/core";
import { TegelModule } from "@scania/tegel-angular-17";
import { CommonModule } from "@angular/common";
@Component({
  selector: "app-tabs-subpage",
  standalone: true,
  templateUrl: "./tabs-subpage.component.html",
  imports: [TegelModule, CommonModule],
  styles: [
    `
      #customers {
        font-family: Arial, Helvetica, sans-serif;
        border-collapse: collapse;
      }

      #customers td,
      #customers th {
        border: 1px solid #ddd;
        padding: 8px;
      }

      #customers tr:nth-child(even) {
        background-color: #f2f2f2;
      }

      #customers tr:hover {
        background-color: #ddd;
      }

      #customers th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
        background-color: #04aa6d;
        color: white;
      }
    `,
  ],
})
export default class TabsSubpageComponent {
  @Input() pathIndex: number;
}
