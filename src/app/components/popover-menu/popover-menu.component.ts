import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

import { TegelModule } from "@scania/tegel-angular-17";

@Component({
    selector: "app-popover-menu",
    imports: [TegelModule],
    templateUrl: "./popover-menu.component.html"
})
export default class PopoverMenuComponent {}
