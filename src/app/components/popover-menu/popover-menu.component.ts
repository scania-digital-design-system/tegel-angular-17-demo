import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TegelModule } from "@scania/tegel-angular-17";

@Component({
  selector: "app-popover-menu",
  standalone: true,
  imports: [CommonModule, TegelModule],
  templateUrl: "./popover-menu.component.html",
})
export default class PopoverMenuComponent {}
