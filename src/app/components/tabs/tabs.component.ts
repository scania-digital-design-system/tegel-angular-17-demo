import { Component } from "@angular/core";
import { TegelModule } from "@scania/tegel-angular-17";

@Component({
    selector: "app-tabs",
    template: `
    <h1 class="tds-headline-02">Tabs</h1>
    <h2 class="tds-headline-03 tds-u-pb3 tds-u-pt3">Folder</h2>
    <tds-folder-tabs>
      <tds-folder-tab>
        <button role="tab" aria-controls="first-folder-tab">First tab</button>
      </tds-folder-tab>
      <tds-folder-tab>
        <button role="tab" aria-controls="second-folder-tab">Second tab is much longer</button>
      </tds-folder-tab>
      <tds-folder-tab>
        <button role="tab" aria-controls="third-folder-tab">Third tab</button>
      </tds-folder-tab>
      <tds-folder-tab disabled>
        <button role="tab" aria-controls="fourth-folder-tab" disabled>Fourth tab</button>
      </tds-folder-tab>
    </tds-folder-tabs>

    <h2 class="tds-headline-03 tds-u-pb3 tds-u-pt3">Inline</h2>
    <tds-inline-tabs>
      <tds-inline-tab>
        <button role="tab" aria-controls="first-inline-tab">First tab</button>
      </tds-inline-tab>
      <tds-inline-tab>
        <button role="tab" aria-controls="second-inline-tab">Second tab is much longer</button>
      </tds-inline-tab>
      <tds-inline-tab>
        <button role="tab" aria-controls="third-inline-tab">Third tab</button>
      </tds-inline-tab>
      <tds-inline-tab disabled>
        <button role="tab" aria-controls="fourth-inline-tab" disabled>Fourth tab</button>
      </tds-inline-tab>
    </tds-inline-tabs>

    <h2 class="tds-headline-03 tds-u-pb3 tds-u-pt3">Navigation</h2>
    <tds-navigation-tabs>
      <tds-navigation-tab>
        <a href="#" role="tab" aria-controls="first-navigation-tab">First tab</a>
      </tds-navigation-tab>
      <tds-navigation-tab>
        <a href="#" role="tab" aria-controls="second-navigation-tab">Second tab is much longer</a>
      </tds-navigation-tab>
      <tds-navigation-tab>
        <a href="#" role="tab" aria-controls="third-navigation-tab">Third tab</a>
      </tds-navigation-tab>
      <tds-navigation-tab disabled>
        <span aria-controls="fourth-navigation-tab">Fourth tab</span>
      </tds-navigation-tab>
    </tds-navigation-tabs>
  `,
    imports: [TegelModule]
})
export default class TabsComponent { }
