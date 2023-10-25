import { Injectable } from "@angular/core";
import { Product } from "../mock-data/shopData";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class CartService {
	private cartObs: BehaviorSubject<never[]> = new BehaviorSubject([]);
	getCartList(): Observable<Product[]> {
		let localItem = localStorage.getItem("cart");
		if (localItem) {
			this.cartObs = new BehaviorSubject(
				JSON.parse(localStorage.getItem("cart") as string)
			);
		}
		return this.cartObs.asObservable();
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
		this.cartObs.next(productList as never);
	}
	removeProduct(product: Product) {
		let localItem = localStorage.getItem("cart");
		let productList: Product[];
		if (localItem) {
			productList = JSON.parse(localItem).filter(
				(item: Product) => product.id !== item.id
			);
      localStorage.setItem("cart", JSON.stringify(productList));
      this.cartObs.next(productList as never);
		}
	}
}
