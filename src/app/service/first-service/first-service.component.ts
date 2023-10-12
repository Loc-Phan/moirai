import { Component } from "@angular/core";
import { BestSellerData } from "src/app/shared/components/best-seller/best-seller.component";
import { PricingData } from "src/app/shared/components/price-table/price-table.component";

@Component({
	selector: "first-service-app",
	templateUrl: "./first-service.component.html",
})
export class FirstServiceComponent {
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
	pricingData: PricingData[] = [
		{
			title: "Hemming Trousers",
			decription:
				"Make your perfect trousers the ideal length with our hemming service.",
			features: [
				"Precise Hemming",
				"Customizable Fit",
				"Length Adjustment",
				"Professional Finishing",
			],
			pricing: 10,
		},
		{
			title: "Replacing Buttons",
			decription:
				"Refresh and rejuvenate your clothing with our button replacement service.",
			features: [
				"Use Suitable Button Styles",
				"Improved Functionality",
				"Quality Selection",
				"Attention to Detail",
			],
			pricing: 5,
		},
		{
			title: "Replacing Zipper",
			decription: "Enhance the your clothing with zipper replacement service.",
			features: [
				"Renewed Functionality",
				"Extended Garment Lifespan",
				"Customizable Options",
				"Attention to Detail",
			],
			pricing: 5,
		},
		{
			title: "Waist cinching",
			decription: "Transform your clothing with our waist cinching service.",
			features: [
				"Flattering Silhouette",
				"Tailored Adjustments",
				"Personalized Style",
				"Versatile Options",
			],
			pricing: 10,
		},
	];
}
