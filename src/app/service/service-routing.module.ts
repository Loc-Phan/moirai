import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FirstServiceComponent } from "./first-service/first-service.component";
import { SecondServiceComponent } from "./second-service/second-service.component";
import { BestSellerModule } from "../shared/components/best-seller/best-seller.module";
import { PriceTableModule } from "../shared/components/price-table/price-table.module";
import { NewsLetterModule } from "../shared/components/news-letter/news-letter.module";
import { AccordionModule } from "../shared/components/accordion/accordion.module";
import { WeDoSliderModule } from "../shared/components/we-do-slider/we-do-slider.module";

const routes: Routes = [
	{
		path: "service",
		children: [
			{
				path: "page-service-1",
				component: FirstServiceComponent,
			},
			{
				path: "page-service-2",
				component: SecondServiceComponent,
			},
		],
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
	declarations: [FirstServiceComponent,SecondServiceComponent],
	exports: [RouterModule],
})
export class ServiceRoutingModule {}
