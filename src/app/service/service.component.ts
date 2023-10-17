import { Component, inject } from "@angular/core";
import { pricingData } from "src/app/mock-data/pricingData";
import { HeaderService } from "src/app/services/header.service";
import { BestSellerData } from "src/app/shared/components/best-seller/best-seller.component";
import { PricingData } from "src/app/shared/components/price-table/price-table.component";

@Component({
	selector: "first-service-app",
	templateUrl: "./service.component.html",
})
export class ServiceComponent {
	bestSellerData: BestSellerData = {
		tag: "Built Exclusively For You",
		title: "Precision Fixes: Quality Commitment for Your Clothes",
		description:
			"Precision fixes for your clothes with quality craftsmanship. Our skilled tailors ensure impeccable results using premium materials and techniques. Affordable pricing and dedicated customer care. Discover the difference today!",
		images: [
			"/assets/images/page/services/1/img-built-1.png",
			"/assets/images/page/services/1/img-built-2.png",
		],
		content: [
			{
				id: 1,
				title: "Precise Alterations",
				text: "Our skilled tailors provide meticulous alterations, ensuring every adjustment is crafted with precision.",
			},
			{
				id: 2,
				title: "Quality Materials & Techniques",
				text: "We use premium materials and proven techniques for fixing clothes, ensuring durability and impeccable results.",
			},
			{
				id: 3,
				title: "Affordable Pricing",
				text: "We offer competitive pricing for our fixing services without compromising on quality.",
			},
			{
				id: 4,
				title: "Dedicated Customer Care",
				text: "We provide attentive customer care to address any post-repair inquiries or concerns, ensuring your satisfaction.",
			},
		],
	};
	pricingData: PricingData[] = pricingData;
	headerService = inject(HeaderService);
	constructor() {
		this.headerService.setHeaderStyleObs("normal-logo header-btn-black");
	}
	ngOnDestroy() {
		this.headerService.setHeaderStyleObs("");
	}
}
