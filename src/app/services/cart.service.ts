import { Injectable } from "@angular/core";
import { Product } from "../mock-data/shopData";

@Injectable({
	providedIn: "root",
})
export class CartService {
	constructor() {}
	getCartList(): Product[] {
		let localItem = localStorage.getItem("cart");
		if (localItem == null) {
			return [];
		} else {
			return JSON.parse(localStorage.getItem("cart") as string);
		}
	}
	addCartList(product: Product) {
		let localItem = localStorage.getItem("cart");
		let productList: Product[];
		if (localItem == null) {
			productList = [];
		} else {
			productList = JSON.parse(localItem);
		}
		productList.push(product);
		localStorage.setItem("cart", JSON.stringify(productList));
	}
}
