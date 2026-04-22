import { Component } from "@angular/core";
import { CardComponent } from "src/app/components/card/card.component";
import ModalComponent from "src/app/components/modal/modal.component";

@Component({
  selector: "app-components",
  templateUrl: "./components.component.html",
  standalone: true,
  imports: [CardComponent, ModalComponent],
})
export default class ComponentsComponent {}
