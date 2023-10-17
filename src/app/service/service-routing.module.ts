import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FirstServiceComponent } from "./first-service/first-service.component";
import { BestSellerModule } from "../shared/components/best-seller/best-seller.module";
import { PriceTableModule } from "../shared/components/price-table/price-table.module";
import { NewsLetterModule } from "../shared/components/news-letter/news-letter.module";
import { AccordionModule } from "../shared/components/accordion/accordion.module";
import { WeDoSliderModule } from "../shared/components/we-do-slider/we-do-slider.module";

const routes: Routes = [
	{
		path: "service",
		component: FirstServiceComponent,
	},
];

@NgModule({
	imports: [
		CommonModule,
		BestSellerModule,
		PriceTableModule,
		NewsLetterModule,
		AccordionModule,
		WeDoSliderModule,
		RouterModule.forChild(routes),
	],
	declarations: [FirstServiceComponent],
	exports: [RouterModule],
})
export class ServiceRoutingModule {}
