import { Component, Input } from "@angular/core";

@Component({
	selector: "cart-icon-component",
	templateUrl: "./cart-icon.component.html",
	styleUrls: ["./cart-icon.component.scss"],
})
export class CartIconComponent {
	@Input() color = "#222222";
}
