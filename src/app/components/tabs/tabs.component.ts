import { Component } from "@angular/core";
import { TegelModule } from "@scania/tegel-angular-17";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-tabs",
  standalone: true,
  template: `
    <div class="tds-headline-02 tds-u-pb1">Tabs</div>
    <div class="tds-headline-03 tds-u-pb3 tds-u-pt3">Folder</div>
    <tds-folder-tabs>
      <tds-folder-tab>
        <button>First tab</button>
      </tds-folder-tab>
      <tds-folder-tab>
        <button>Second tab is much longer</button>
      </tds-folder-tab>
      <tds-folder-tab>
        <button>Third tab</button>
      </tds-folder-tab>
      <tds-folder-tab disabled>
        <button>Fourth tab</button>
      </tds-folder-tab>
    </tds-folder-tabs>

    <div class="tds-headline-03 tds-u-pb3 tds-u-pt3">Inline</div>
    <tds-inline-tabs defaultSelectedIndex="1" *ngIf="loaded">
      <tds-inline-tab *ngFor="let tab of inlineTabs">
        <button>{{ tab }}</button>
      </tds-inline-tab>
    </tds-inline-tabs>
    <button (click)="injectInlineTab()">Inject inline tabs</button>

    <div class="tds-headline-03 tds-u-pb3 tds-u-pt3">Navigation</div>
    <tds-navigation-tabs>
      <tds-navigation-tab>
        <a href="#">First tab</a>
      </tds-navigation-tab>
      <tds-navigation-tab>
        <a href="#">Second tab is much longer</a>
      </tds-navigation-tab>
      <tds-navigation-tab>
        <a href="#">Third tab</a>
      </tds-navigation-tab>
      <tds-navigation-tab disabled>
        <a href="javascript:void(0)">Fourth tab</a>
      </tds-navigation-tab>
    </tds-navigation-tabs>
  `,
  imports: [TegelModule, CommonModule],
})
export class TabsComponent {
  loaded = false;
  inlineTabs: string[] = [
    "First tab",
    "Second tab is much longer",
    "Third tab",
    "Fourth tab",
  ];

  injectInlineTab() {
    this.loaded = true;
  }
}
