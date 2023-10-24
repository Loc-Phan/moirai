import { Component, Input } from "@angular/core";

@Component({
	selector: "heart-icon-component",
  templateUrl: "./heart-icon.component.html",
  styleUrls: ["./heart-icon.component.scss"]
})
export class HeartIconComponent {
  @Input() color = "#222222";
};
