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
import { TegelModule } from "@scania/tegel-angular-17";
@Component({
  selector: "app-editable-cell",
  standalone: true,
  imports: [CommonModule, TegelModule],
  template: `
    <tds-table-body-input-wrapper>
      <input
        [value]="internalValue"
        (blur)="onBlur($event)"
        (keydown.enter)="onEnter($event)"
        (keydown.escape)="onEscape($event)"
      />
    </tds-table-body-input-wrapper>
  `,
})
export class EditableCellComponent implements OnChanges, OnDestroy {
  @Input() value: any;
  @Input() cellIndex: any;
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
    event.target.blur();
  }

  onEnter(event: any) {
    this.internalValue = event.target.value;
    this.valueChange.emit(this.internalValue);
    event.target.blur();
  }

  onEscape(event: any) {
    event.target.blur();
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
