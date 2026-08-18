import { Component, ViewChild } from "@angular/core";

import { TegelModule } from "@scania/tegel-angular-17";

@Component({
    selector: "app-popover-canvas",
    imports: [TegelModule],
    templateUrl: "./popover-canvas.component.html"
})
export default class PopoverCanvasComponent {
  showPrinterInformation = false;

  handleTogglePrinterInformation(event: any) {
    this.showPrinterInformation = event.detail.checked;
  }
}
