import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FirstPricingComponent } from "./first-pricing/first-pricing.component";
import { SecondPricingComponent } from "./second-pricing/second-pricing.component";
import { PriceTableModule } from "../shared/components/price-table/price-table.module";
import { NewsLetterModule } from "../shared/components/news-letter/news-letter.module";
import { FeedbackBoxModule } from "../shared/components/feedback-box/feedback-box.module";
import { ContactBoxModule } from "../shared/components/contact-box/contact-box.module";

const routes: Routes = [
	{
		path: "pricing",
		component: FirstPricingComponent,
	},
];

@NgModule({
	imports: [
		CommonModule,
		PriceTableModule,
		NewsLetterModule,
		FeedbackBoxModule,
		ContactBoxModule,
		RouterModule.forChild(routes),
	],
	declarations: [FirstPricingComponent, SecondPricingComponent],
	exports: [RouterModule],
})
export class PricingRoutingModule {}
