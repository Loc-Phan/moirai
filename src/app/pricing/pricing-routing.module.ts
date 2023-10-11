import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FirstPricingComponent } from "./first-pricing/first-pricing.component";
import { SecondPricingComponent } from "./second-pricing/second-pricing.component";

const routes: Routes = [
	{
		path: "pricing",
		children: [
			{
				path: "page-pricing-1",
				component: FirstPricingComponent,
			},
			{
				path: "page-pricing-2",
				component: SecondPricingComponent,
			},
		],
	},
];

@NgModule({
	imports: [CommonModule, RouterModule.forChild(routes)],
	declarations: [],
	exports: [RouterModule],
})
export class PricingRoutingModule {}
