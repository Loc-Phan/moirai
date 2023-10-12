import { Component, Input } from "@angular/core";

export interface PricingData {
	title: string;
	decription: string;
	features: string[];
	pricing?: number;
	pricingMonth?: number;
	pricingYear?: number;
}

@Component({
	selector: "price-table-component",
	templateUrl: "./price-table.component.html",
})
export class PriceTableComponent {
	@Input() priceData!: PricingData[];
	@Input() priceItemStyle!: string;
	isActive = 0;
	isToggled = false;
}
