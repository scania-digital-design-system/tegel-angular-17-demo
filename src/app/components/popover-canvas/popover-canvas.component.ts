import { Component, ViewChild } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TegelModule } from "@scania/tegel-angular-17";

@Component({
  selector: "app-popover-canvas",
  standalone: true,
  imports: [CommonModule, TegelModule],
  templateUrl: "./popover-canvas.component.html",
})
export default class PopoverCanvasComponent {
  showPrinterInformation = false;

  handleTogglePrinterInformation(event: any) {
    this.showPrinterInformation = event.detail.checked;
  }
}
