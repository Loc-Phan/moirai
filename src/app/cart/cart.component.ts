import { Component, OnInit, inject } from "@angular/core";
import { Product } from "../mock-data/shopData";
import { CartService } from "../services/cart.service";
import { ToastrService } from "ngx-toastr";

@Component({
	selector: "cart-component",
	templateUrl: "cart.component.html",
})
export class CartComponent implements OnInit {
	productList!: Product[];
	totalPrice = 0;
	cartService = inject(CartService);
	disableUpdateCart = true;
	constructor(private toastr: ToastrService) {}
	ngOnInit() {
		this.cartService.cart$.subscribe((cart) => {
			this.productList = cart;
			this.totalPrice = cart.reduce(
				(accumulator, currentValue) =>
					accumulator + currentValue.qty * currentValue.newPrice,
				0
			);
		});
	}
	removeProduct(product: Product): void {
    this.cartService.removeProduct(product);
		this.toastr.success("Remove to cart successfully!");
	}
	onDescreaseQty(item: Product) {
		this.disableUpdateCart = false;
		if (item.qty > 0) {
			const newCart = this.productList.map((cartItem) => {
				if (cartItem.id === item.id) {
					return { ...cartItem, qty: item.qty - 1 };
				}
				return cartItem;
			});
			this.productList = newCart;
		}
	}
	onInscreaseQty(item: Product) {
		this.disableUpdateCart = false;
		const newCart = this.productList.map((cartItem) => {
			if (cartItem.id === item.id) {
				return { ...cartItem, qty: item.qty + 1 };
			}
			return cartItem;
		});
		this.productList = newCart;
	}
	onUpdateCart() {
		this.cartService.updateCart(this.productList);
		this.toastr.success("Update cart successfully!");
	}
}
