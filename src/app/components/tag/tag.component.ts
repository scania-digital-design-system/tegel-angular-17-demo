import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { TegelModule } from "@scania/tegel-angular-17";

@Component({
  selector: "app-tag",
  templateUrl: "./tag.component.html",
  styleUrls: ["./tag.component.css"],
  standalone: true,
  imports: [CommonModule, TegelModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TagComponent {
  // Tag variants
  variants: string[] = [
    "Neutral",
    "Success",
    "Warning",
    "Error",
    "Information",
    "New",
  ];

  // Tag sizes
  sizes: string[] = ["Large", "Small"];

  // Sample text for tags
  tagTexts: { [key: string]: string } = {
    Neutral: "Neutral",
    Success: "Success",
    Warning: "Warning",
    Error: "Error",
    Information: "Information",
    New: "New",
  };

  // Icons for each variant
  variantIcons: { [key: string]: string } = {
    Neutral: "info",
    Success: "check",
    Warning: "warning",
    Error: "error",
    Information: "info",
    New: "star",
  };
}
