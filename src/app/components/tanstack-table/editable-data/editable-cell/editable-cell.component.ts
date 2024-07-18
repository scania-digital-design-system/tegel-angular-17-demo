import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  ElementRef,
  Renderer2,
  OnDestroy,
} from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-editable-cell",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="!isEditing" (click)="isEditing = true">{{ internalValue }}</div>
    <input
      *ngIf="isEditing"
      [value]="internalValue"
      (blur)="onBlur($event)"
      (keydown.enter)="onEnter($event)"
      (keydown.escape)="onEscape($event)"
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
export class EditableCellComponent implements OnChanges, OnDestroy {
  @Input() value: any;
  @Output() valueChange = new EventEmitter<any>();
  isEditing = false;
  internalValue: any;
  private documentClickListener: () => void;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.documentClickListener = this.renderer.listen(
      "document",
      "click",
      this.onDocumentClick.bind(this)
    );
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes["value"]) {
      this.internalValue = this.value;
    }
  }

  ngOnDestroy() {
    if (this.documentClickListener) {
      this.documentClickListener();
    }
  }

  onBlur(event: any) {
    this.isEditing = false;
    this.internalValue = event.target.value;
    this.valueChange.emit(this.internalValue);
    console.log(this.internalValue, event);
  }

  onEnter(event: any) {
    this.isEditing = false;
    this.internalValue = event.target.value;
    this.valueChange.emit(this.internalValue);
    console.log(this.internalValue, event);
  }

  onEscape(event: any) {
    this.isEditing = false;
  }

  private onDocumentClick(event: MouseEvent) {
    if (
      this.isEditing &&
      !this.elementRef.nativeElement.contains(event.target)
    ) {
      this.isEditing = false;
    }
  }
}
