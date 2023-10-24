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
		let productList: Product[] = [];
		if (localItem) {
			let tempProductList: Product[] = JSON.parse(localItem);
      if (tempProductList.length === 0) {
        productList.push(product);
			}
			tempProductList.forEach((item) => {
				if (item.id == product.id) {
					productList.push({ ...item, qty: item?.qty + 1 });
				} else {
					productList.push(product);
				}
			});
		}
		localStorage.setItem("cart", JSON.stringify(productList));
	}
	removeProduct(product: Product) {
		let localItem = localStorage.getItem("cart");
		let productList: Product[];
		if (localItem) {
			productList = JSON.parse(localItem).filter(
				(item: Product) => product.id !== item.id
			);
			localStorage.setItem("cart", JSON.stringify(productList));
		}
	}
}
