import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TegelModule } from '@scania/tegel-angular-17';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dropdown-new',
  standalone: true,
  templateUrl: './dropdown-new.component.html',
  imports: [TegelModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DropdownNewComponent {
  selectedValue: string | null = null;

  handleChange(event: CustomEvent<{ name: string; value: string }>) {
    this.selectedValue = event.detail?.value || null;
  }

  resetDropdown() {
    this.selectedValue = null;
    this.handleChange({ detail: { name: 'dropdown', value: null } } as CustomEvent);
  }

  removeOption2() {
    if (this.selectedValue) {
      const values = this.selectedValue.split(',').filter(value => value !== 'option-2');
      this.selectedValue = values.length ? values.join(',') : null;
      this.handleChange({ detail: { name: 'dropdown', value: this.selectedValue } } as CustomEvent);
    }
  }
}
