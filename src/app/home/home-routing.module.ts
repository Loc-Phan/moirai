import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { AboutUsModule } from "../shared/components/about-us/about-us.module";
import { BestSellerModule } from "../shared/components/best-seller/best-seller.module";
import { NewsLetterModule } from "../shared/components/news-letter/news-letter.module";
import { PriceTableModule } from "../shared/components/price-table/price-table.module";
import { TestimonialSliderModule } from "../shared/components/testimonial-slider/testimonial-slider.module";
import { BlogsModule } from "../shared/components/blogs/blogs.module";
import { LogoSliderModule } from "../shared/components/logo-slider/logo-slider.module";
import { OfferSliderModule } from "../shared/components/offer-slider/offer-slider.module";

const routes: Routes = [
	{
		path: "",
		component: HomeComponent,
	},
];

@NgModule({
	imports: [
		CommonModule,
		AboutUsModule,
		BestSellerModule,
		NewsLetterModule,
    PriceTableModule,
    TestimonialSliderModule,
    LogoSliderModule,
    OfferSliderModule,
    BlogsModule,
		RouterModule.forChild(routes),
	],
	declarations: [HomeComponent],
	exports: [RouterModule],
	providers: [],
})
export class HomeRoutingModule {}
