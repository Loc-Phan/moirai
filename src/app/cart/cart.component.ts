import { Component, OnInit, inject } from "@angular/core";
import { Product } from "../mock-data/shopData";
import { CartService } from "../services/cart.service";

@Component({
	selector: "cart-component",
	templateUrl: "cart.component.html",
})
export class CartComponent implements OnInit {
	productList!: Product[];
	cartService = inject(CartService);
	ngOnInit() {
		this.cartService
      .cart$
			.subscribe((cart) => (this.productList = cart));
	}
	removeProduct(product: Product): void {
		this.cartService.removeProduct(product);
	}
}
