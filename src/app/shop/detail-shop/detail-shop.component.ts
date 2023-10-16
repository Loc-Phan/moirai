import { Component, OnInit } from "@angular/core";
import { Product, secondData, viewedProductList } from "src/app/mockData/shopData";
import { ActivatedRoute } from "@angular/router";
import { firstUserComments } from "src/app/mockData/comments";

interface Comment {
	id: number;
	userImage: string;
	userName: string;
	content: string;
	date: string;
	link: string;
}

@Component({
	selector: "detail-shop-app",
	templateUrl: "./detail-shop.component.html",
})
export class DetailShopComponent implements OnInit {
	slug!: string | null;
	singleStore!: Product | undefined;
	quantity = 1;
	activeIndex = 1;
	userComments = firstUserComments;
	viewedProducts = viewedProductList;
	handleOnClick(i: number) {}
	constructor(private route: ActivatedRoute) {}
	ngOnInit() {
		this.slug = this.route.snapshot.paramMap.get("slug");
		this.singleStore = secondData.find(
			(item) => item?.id.toString() == this.slug
		);
	}
}
