import { Injectable } from "@angular/core";
import { Product } from "../mock-data/shopData";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class WishListService {
	private wishProductObs: BehaviorSubject<never[]> = new BehaviorSubject([]);
	getWishList(): Observable<Product[]> {
		let localItem = localStorage.getItem("wishlist");
		if (localItem) {
			this.wishProductObs = new BehaviorSubject(
				JSON.parse(localStorage.getItem("wishlist") as string)
			);
		}
		return this.wishProductObs.asObservable();
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
		this.wishProductObs.next(productList as never);
	}
	removeWishProduct(product: Product) {
		let localItem = localStorage.getItem("wishlist");
		let productList: Product[];
		if (localItem) {
			productList = JSON.parse(localItem).filter(
				(item: Product) => product.id !== item.id
			);
			localStorage.setItem("wishlist", JSON.stringify(productList));
			this.wishProductObs.next(productList as never);
		}
	}
}
