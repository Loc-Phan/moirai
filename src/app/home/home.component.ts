import { Component } from "@angular/core";
import { TrailerData, trailerData } from "../mock-data/trailerData";
import { BestSellerData } from "../shared/components/best-seller/best-seller.component";
import { bestSellerData } from "../mock-data/bestSellerData";
import { BlogData, firstBlogsData } from "../mock-data/blogData";
import { PricingData } from "../shared/components/price-table/price-table.component";
import { pricingData } from "../mock-data/pricingData";
import { AboutUsData, aboutData } from "../mock-data/aboutUsData";

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
