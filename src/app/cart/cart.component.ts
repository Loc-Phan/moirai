import { Component, OnInit } from "@angular/core";
import { Product } from "../mock-data/shopData";
import { CartService } from "../services/cart.service";

@Component({
	selector: "cart-component",
	templateUrl: "cart.component.html",
})
export class CartComponent implements OnInit {
	productList!: Product[];
	constructor(private cartService: CartService) {}
	ngOnInit(): void {
		this.productList = this.cartService.getCartList();
	}
	removeProduct(product: Product): void {
		this.cartService.removeProduct(product);
		this.productList = this.cartService.getCartList();
	}
}
