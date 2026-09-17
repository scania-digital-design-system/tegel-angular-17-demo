import { Component, Input } from "@angular/core";
import { TegelModule } from "@scania/tegel-angular-17";

@Component({
    selector: "app-tag",
    templateUrl: "./tag.component.html",
    styleUrls: ["./tag.component.css"],
    imports: [TegelModule]
})
export default class TagComponent {}
