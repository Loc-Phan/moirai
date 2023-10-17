import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ShopComponent } from "./shop/shop.component";
import { DetailShopComponent } from "./detail-shop/detail-shop.component";
import { PostsModule } from "../shared/components/posts/posts.module";
import { DownloadBannerModule } from "../shared/components/download-banner/download-banner.module";
import { ThumbSliderModule } from "../shared/components/thumb-slider/thumb-slider.module";

const routes: Routes = [
	{
		path: "shop",
		children: [
			{ path: "", component: ShopComponent },
			{ path: ":slug", component: DetailShopComponent },
		],
	},
];

@NgModule({
	imports: [
		CommonModule,
		PostsModule,
		DownloadBannerModule,
		ThumbSliderModule,
		RouterModule.forChild(routes),
	],
	declarations: [ShopComponent, DetailShopComponent],
	exports: [RouterModule],
})
export class ShopRoutingModule {}
