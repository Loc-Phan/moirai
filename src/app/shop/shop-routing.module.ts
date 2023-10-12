import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FirstShopComponent } from "./first-shop/first-shop.component";
import { SecondShopComponent } from "./second-shop/second-shop.component";
import { DetailShopComponent } from "./detail-shop/detail-shop.component";
import { PostsModule } from "../shared/components/posts/posts.module";
import { DownloadBannerModule } from "../shared/components/download-banner/download-banner.module";

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
	imports: [
		CommonModule,
		PostsModule,
		DownloadBannerModule,
		RouterModule.forChild(routes),
	],
	declarations: [FirstShopComponent, SecondShopComponent],
	exports: [RouterModule],
})
export class ShopRoutingModule {}
