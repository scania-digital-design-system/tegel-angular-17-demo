import { Component } from "@angular/core";
import { TegelModule } from "@scania/tegel-angular-17";

@Component({
  selector: "app-link",
  standalone: true,
  template: `
    <h1 class="tds-headline-02">Link</h1>
    <tds-link>
      <a href="https://tegel.scania.com/home" target="_blank">Tegel</a>
    </tds-link>
  `,
  imports: [TegelModule],
})
export default class LinkComponent { }
