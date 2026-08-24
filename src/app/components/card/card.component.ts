
import { Component } from "@angular/core";
import { TegelModule } from "@scania/tegel-angular-17";

@Component({
    selector: "app-card",
    templateUrl: "./card.component.html",
    styleUrls: ["./card.component.css"],
    imports: [TegelModule]
})
export default class CardComponent {
  cardImagePath = "../../../assets/images/card-img.png";

  handleCardClick(event: Event): void {
    console.log(event);
  }
}
