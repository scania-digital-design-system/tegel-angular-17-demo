import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { TdsToastCustomEvent } from "@scania/tegel";
import { TegelModule } from "@scania/tegel-angular-17";

@Component({
  selector: "app-toast",
  standalone: true,
  templateUrl: "./toast.component.html",
  styleUrls: ["./toast.component.css"],
  imports: [CommonModule, TegelModule],
})
export default class ToastComponent {
  hideToasts: boolean = false;

  toggleToasts() {
    this.hideToasts = !this.hideToasts;
  }
  preventClose(event: Event) {
    event.preventDefault();
  }
}
