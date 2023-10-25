import { Component, OnInit, inject } from "@angular/core";
import { Product } from "../mock-data/shopData";
import { WishListService } from "../services/wishlist.service";
import { CartService } from "../services/cart.service";

@Component({
	selector: "wishlist-component",
	templateUrl: "wishlist.component.html",
})
export class WishListComponent implements OnInit {
	wishList: Product[] = [];
	cartService = inject(CartService);
	wishListService = inject(WishListService);
	ngOnInit() {
		this.wishListService
			.getWishList()
			.subscribe((wish) => (this.wishList = wish));
	}
	addToCart(item: Product) {
		this.cartService.addCartList(item);
		this.wishListService.removeWishProduct(item);
		this.wishListService
			.getWishList()
			.subscribe((wish) => (this.wishList = wish));
	}
	removeWishProduct(item: Product) {
		this.wishListService.removeWishProduct(item);
		// this.wishListService
		// 	.getWishList()
		// 	.subscribe((wish) => (this.wishList = wish));
	}
}
