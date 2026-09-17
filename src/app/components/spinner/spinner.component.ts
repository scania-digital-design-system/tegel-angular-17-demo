import { Component } from "@angular/core";

import { TegelModule } from "@scania/tegel-angular-17";

@Component({
    selector: "app-spinner",
    imports: [TegelModule],
    templateUrl: "./spinner.component.html"
})
export default class SpinnerComponent {}
