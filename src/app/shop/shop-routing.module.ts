import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FirstShopComponent } from "./first-shop/first-shop.component";
import { SecondShopComponent } from "./second-shop/second-shop.component";
import { DetailShopComponent } from "./detail-shop/detail-shop.component";

const routes: Routes = [
	{
		path: "",
		children: [
			{
				path: "shopping/page-shop-grid-1",
				component: FirstShopComponent,
			},
			{
				path: "shopping/page-shop-grid-2",
				component: SecondShopComponent,
			},
			{
				path: "shop/:slug",
				component: DetailShopComponent,
			},
		],
	},
];

@NgModule({
	imports: [CommonModule, RouterModule.forChild(routes)],
	declarations: [],
	exports: [RouterModule],
})
export class ShopRoutingModule {}
