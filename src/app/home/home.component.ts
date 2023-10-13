import { Component } from "@angular/core";
import { TrailerData, trailerData } from "../mockData/trailerData";
import { BestSellerData } from "../shared/components/best-seller/best-seller.component";
import { bestSellerData } from "../mockData/bestSellerData";
import { BlogData, firstBlogsData } from "../mockData/blogData";
import { PricingData } from "../shared/components/price-table/price-table.component";
import { pricingData } from "../mockData/pricingData";
import { AboutUsData, aboutData } from "../mockData/aboutUsData";

@Component({
	selector: "home-app",
	templateUrl: "./home.component.html",
})
export class HomeComponent {
	activeIndex = 1;
	trailerDatas: TrailerData = trailerData;
	bestSellerDatas: BestSellerData = bestSellerData;
	blogsData: BlogData[] = firstBlogsData;
	pricingData: PricingData[] = pricingData;
	aboutData: AboutUsData[] = aboutData;
}
