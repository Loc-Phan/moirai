import { Component } from "@angular/core";
import { postsData } from "src/app/mock-data/blogData";
import {
	Category,
	Product,
	categoryList,
	secondData,
	viewedProductList,
} from "src/app/mock-data/shopData";
import { PostData } from "src/app/shared/components/posts/posts.component";

@Component({
	selector: "first-shop-app",
	templateUrl: "./first-shop.component.html",
})
export class FirstShopComponent {
	categoryList: Category[] = categoryList;
	data: Product[] = secondData;
	viewedProductList: Product[] = viewedProductList;
	postsData: PostData[] = postsData;
}
