import { Component } from "@angular/core";
import { FAQsData, faqsInfo } from "src/app/mock-data/faqsData";
import { FeedbackProp, feedbackData } from "src/app/mock-data/feedbackData";
import { pricingData, PricingData } from "src/app/mock-data/pricingData";

@Component({
	selector: "first-pricing-app",
	templateUrl: "./first-pricing.component.html",
})
export class FirstPricingComponent {
	pricingData: PricingData[] = pricingData;
	faqsInfo: FAQsData[] = faqsInfo;
	fBData: FeedbackProp[] = feedbackData;
}
