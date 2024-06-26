import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { TegelModule } from "@scania/tegel-angular-17";

@Component({
  selector: "app-stepper",
  templateUrl: "./stepper.component.html",
  styleUrls: ["./stepper.component.css"],
  standalone: true,
  imports: [CommonModule, TegelModule],
})
export default class StepperComponent {
  @Input() orientation: "vertical" | "horizontal" = "horizontal"; // Set the initial orientation
  @Input() labelPosition: "below" | "aside" = "aside"; // Set the label position as needed
  minInputLenght = 5;
  completedSteps = 0;
  errorStepIndex: number | undefined;

  constructor() {}

  getState(index: number): string | null {
    if (index === this.errorStepIndex) {
      return "error";
    } else if (this.completedSteps === index) {
      return "current";
    } else if (this.completedSteps < index) {
      return "upcoming";
    } else if (this.completedSteps > index) {
      return "success";
    }
    return null;
  }

  onTdsInput(index: number, event: any): void {
    const value = event.detail.target.value;
    if (value.length >= this.minInputLenght) {
      this.completedSteps = index + 1;
      this.errorStepIndex = undefined;
    }
  }

  onTdsChange(index: number, event: any): void {
    const value = event.detail.target.value;
    if (value.length < this.minInputLenght) {
      this.errorStepIndex = index;
      this.completedSteps = index;
    }
  }
}
