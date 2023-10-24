import { Component } from "@angular/core";
import { Product } from "../mock-data/shopData";
import { WishListService } from "../services/wishlist.service";
import { CartService } from "../services/cart.service";

@Component({
	selector: "wishlist-component",
	templateUrl: "wishlist.component.html",
})
export class WishListComponent {
	wishList: Product[] = [];
	constructor(
		private wishListService: WishListService,
		private cartService: CartService
	) {
		this.wishList = this.wishListService.getWishList();
	}
	addToCart(item: Product) {
		this.cartService.addCartList(item);
		this.wishListService.removeWishProduct(item);
		this.wishList = this.wishListService.getWishList();
	}
	removeWishProduct(item: Product) {
		this.wishListService.removeWishProduct(item);
		this.wishList = this.wishListService.getWishList();
	}
}
