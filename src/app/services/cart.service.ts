import { Injectable } from "@angular/core";
import { Product } from "../mock-data/shopData";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class CartService {
	private cartSubject = new BehaviorSubject<Product[]>(
		JSON.parse(localStorage.getItem("cart") as string) || []
	);
	cart$ = this.cartSubject.asObservable();

	addCartList(product: Product) {
		let localItem = localStorage.getItem("cart");
		let productList: Product[];
		if (localItem == null) {
			productList = [product];
		} else {
			productList = JSON.parse(localItem);
			const temp: Product[] = [];
			let check = false;
			productList.forEach((item) => {
				if (item.id === product.id) {
					temp.push({ ...item, qty: item.qty + 1 });
					check = true;
				} else {
					temp.push(item);
				}
			});
			if (check) {
				productList = temp;
			} else {
				productList = [...temp, product];
			}
		}
		localStorage.setItem("cart", JSON.stringify(productList));
		this.cartSubject.next(productList);
	}
	removeProduct(product: Product) {
		let localItem = localStorage.getItem("cart");
		let productList: Product[];
		if (localItem) {
			productList = JSON.parse(localItem).filter(
				(item: Product) => product.id !== item.id
			);
			localStorage.setItem("cart", JSON.stringify(productList));
			this.cartSubject.next(productList);
		}
	}
	updateCart(productList: Product[]) {
		localStorage.setItem("cart", JSON.stringify(productList));
		this.cartSubject.next(productList);
	}
}
