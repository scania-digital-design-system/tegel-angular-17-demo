
import { Component } from "@angular/core";
import { TegelModule } from "@scania/tegel-angular-17";

@Component({
    selector: "app-slider",
    templateUrl: "./slider.component.html",
    styleUrls: ["./slider.component.css"],
    imports: [TegelModule]
})
export default class SliderComponent {
  // @Input() orientation: "vertical" | "horizontal" = "horizontal"; // Set the initial orientation
  // @Input() labelPosition: "below" | "aside" = "aside"; // Set the label position as needed
  // minInputLenght = 5;
  // completedSteps = 0;
  // errorStepIndex: number | undefined;
  value: string = "10";
  // showTooltipSimple = signal(false);
  showTooltipSimple = false;
  showTooltipControls = false;
  constructor() {}

  onTdsInput(event: any): void {
    this.value = event.target.value;
  }

  setShowTooltipSimple(newValue: boolean) {
    this.showTooltipSimple = newValue;
  }

  setShowTooltipControls(newValue: boolean) {
    this.showTooltipControls = newValue;
  }
}
