import { Component } from "@angular/core";
import { AccordionData } from "src/app/shared/components/accordion/accordion.compoent";

@Component({
	selector: "first-faq-app",
	templateUrl: "./first-faq.component.html",
})
export class FirstFaqComponent {
	accordionData: AccordionData[] = [
		{
			title: "Does altering pants affect their shape?",
			content:
				"The length of the pants may be reduced due to altering, which can affect the shape or fit of the bottoms as follows:",
			listContent: [
				"Mid-Calf High-Waisted Super Stretch Leggings",
				"Full-Length High-Waisted Super Stretch Skinny Jeans",
				"Full-Length Smart Pants",
			],
		},
		{
			title: "What is the expected delivery time?",
			content:
				"Orders using the clothing alteration service will take an additional 1-4 business days from the estimated delivery time, excluding holidays and weekends. (Normal delivery time is 1-4 business days). Once your order is ready for shipment, you will receive an email with the tracking number from the shipping carrier. Same-day delivery for Click&Collect service does not apply to orders with pants alteration service.",
		},
		{
			title: "Do you provide support for clothing size adjustments?",
			content:
				"Yes, we do, but we only provide support for reducing the size of clothing. We cannot extend a product longer than its original length or widen the product.",
		},
		{
			title:
				"Clothing repair service is currently available at all physical stores and online stores?",
			content:
				"This service is only applicable to certain specific types of products. For online orders that include clothing alteration service, the delivery time will be extended by 1-4 working days from the estimated delivery time. (Not applicable for Click & Collect Same Day Delivery).",
		},
		{
			title: "Can I request a second alteration for the same item of clothing?",
			content:
				"For additional clothing alterations beyond the initial adjustment, we offer convenient options to cater to your needs. You can visit any of our stores or access our online store's dedicated clothing alteration service to request further modifications. To ensure seamless assistance, kindly provide the phone number associated with your purchase so that we may locate your order. Our attentive store staff is ready to provide the support you require.",
		},
		{
			title:
				"I have made an online purchase and would like to have the clothing altered. Can I bring the product to the store for alterations?",
			content:
				"Yes, you can visit any of our stores and request assistance from our staff. Please provide the phone number used for the purchase so that we can check your order. All of our stores provide clothing alteration services, so you can go to any store that is most convenient for you to request assistance from our staff.",
		},
		{
			title:
				"Can I request a return or exchange for a product that has been altered?",
			content:
				"Altered or tailored products are not eligible for exchange or return. In the event that you receive inaccurately altered or defective products, you can contact our Customer Service team for assistance.",
		},
	];
}
