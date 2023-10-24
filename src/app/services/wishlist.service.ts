import { Injectable } from "@angular/core";
import { Product } from "../mock-data/shopData";

@Injectable({
	providedIn: "root",
})
export class WishListService {
	constructor() {}
	getWishList(): Product[] {
		let localItem = localStorage.getItem("wishlist");
		if (localItem == null) {
			return [];
		} else {
			return JSON.parse(localStorage.getItem("wishlist") as string);
		}
	}
	addWishList(product: Product) {
		let localItem = localStorage.getItem("wishlist");
		let productList: Product[];
		if (localItem == null) {
			productList = [];
		} else {
			productList = JSON.parse(localItem);
		}
		productList.push(product);
		localStorage.setItem("wishlist", JSON.stringify(productList));
	}
	removeWishProduct(product: Product) {
		let localItem = localStorage.getItem("wishlist");
		let productList: Product[];
		if (localItem) {
			productList = JSON.parse(localItem).filter(
				(item: Product) => product.id !== item.id
			);
			localStorage.setItem("wishlist", JSON.stringify(productList));
		}
	}
}
