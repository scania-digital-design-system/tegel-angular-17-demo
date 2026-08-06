import { Component } from "@angular/core";
import { TegelModule } from "@scania/tegel-angular-17";

@Component({
  selector: "app-tabs",
  standalone: true,
  template: `
    <h1 class="tds-headline-02">Tabs</h1>
    <h2 class="tds-headline-03 tds-u-pb3 tds-u-pt3">Folder</h2>
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

    <h2 class="tds-headline-03 tds-u-pb3 tds-u-pt3">Inline</h2>
    <tds-inline-tabs>
      <tds-inline-tab>
        <button>First tab</button>
      </tds-inline-tab>
      <tds-inline-tab>
        <button>Second tab is much longer</button>
      </tds-inline-tab>
      <tds-inline-tab>
        <button>Third tab</button>
      </tds-inline-tab>
      <tds-inline-tab disabled>
        <button>Fourth tab</button>
      </tds-inline-tab>
    </tds-inline-tabs>

    <h2 class="tds-headline-03 tds-u-pb3 tds-u-pt3">Navigation</h2>
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
  imports: [TegelModule],
})
export default class TabsComponent { }
