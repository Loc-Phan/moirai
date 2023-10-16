import { Component } from "@angular/core";
import { postsData } from "src/app/mockData/blogData";
import { Category, Product, categoryList, firstData, viewedProductList } from "src/app/mockData/shopData";
import { PostData } from "src/app/shared/components/posts/posts.component";

@Component({
	selector: "first-shop-app",
	templateUrl: "./first-shop.component.html",
})
export class FirstShopComponent {
	categoryList: Category[] = categoryList;
	data: Product[] = firstData;
	viewedProductList: Product[] = viewedProductList;
	postsData: PostData[] = postsData;
}
