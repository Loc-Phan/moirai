import { Injectable } from "@angular/core";
import { Product } from "../mock-data/shopData";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class WishListService {
	private wishProductSubject = new BehaviorSubject(
		JSON.parse(localStorage.getItem("wishlist") as string) || []
	);
	wishProduct$ = this.wishProductSubject.asObservable();

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
		this.wishProductSubject.next(productList as never);
	}
	removeWishProduct(product: Product) {
		let localItem = localStorage.getItem("wishlist");
		let productList: Product[];
		if (localItem) {
			productList = JSON.parse(localItem).filter(
				(item: Product) => product.id !== item.id
			);
			localStorage.setItem("wishlist", JSON.stringify(productList));
			this.wishProductSubject.next(productList as never);
		}
	}
}
