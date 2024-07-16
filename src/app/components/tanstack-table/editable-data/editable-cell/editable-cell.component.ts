import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-editable-cell",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="!isEditing" (click)="isEditing = true">{{ value }}</div>
    <input
      *ngIf="isEditing"
      [value]="value"
      (blur)="onBlur($event)"
      (keydown.enter)="onEnter($event)"
    />
  `,
  styles: [
    `
      div {
        cursor: pointer;
      }
      input {
        width: 100%;
      }
    `,
  ],
})
export class EditableCellComponent {
  @Input() value: any;
  @Output() valueChange = new EventEmitter<any>();
  isEditing = false;

  onBlur(event: any) {
    this.isEditing = false;
    this.valueChange.emit(event.target.value);
  }

  onEnter(event: any) {
    this.isEditing = false;
    this.valueChange.emit(event.target.value);
  }
}
