import { Component, OnInit, inject } from "@angular/core";
import { Product } from "../mock-data/shopData";
import { WishListService } from "../services/wishlist.service";
import { CartService } from "../services/cart.service";
import { ToastrService } from "ngx-toastr";

@Component({
	selector: "wishlist-component",
	templateUrl: "wishlist.component.html",
})
export class WishListComponent implements OnInit {
	wishList: Product[] = [];
	cartService = inject(CartService);
	wishListService = inject(WishListService);
	constructor(private toastr: ToastrService) {}
	ngOnInit() {
		this.wishListService.wishProduct$.subscribe(
			(wish) => (this.wishList = wish)
		);
	}
	addToCart(item: Product) {
		this.cartService.addCartList(item);
		this.wishListService.removeWishProduct(item);
		this.toastr.success("Add to cart successfully!");
	}
	removeWishProduct(item: Product) {
		this.wishListService.removeWishProduct(item);
		this.toastr.success("Remove to wishlist successfully!");
	}
}
