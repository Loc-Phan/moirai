import { Component, OnInit, inject } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { postsData } from "src/app/mock-data/blogData";
import {
	Category,
	Product,
	WishProduct,
	categoryList,
	secondData,
	viewedProductList,
} from "src/app/mock-data/shopData";
import { CartService } from "src/app/services/cart.service";
import { WishListService } from "src/app/services/wishlist.service";
import { PostData } from "src/app/shared/components/posts/posts.component";

@Component({
	selector: "first-shop-app",
	templateUrl: "./shop.component.html",
})
export class ShopComponent implements OnInit {
	categoryList: Category[] = categoryList;
	data!: WishProduct[];
	viewedProductList: Product[] = viewedProductList;
	postsData: PostData[] = postsData;
	cartService = inject(CartService);
	wishListService = inject(WishListService);

	constructor(private router: Router, private toastr: ToastrService) {}

	ngOnInit() {
		const temp: WishProduct[] = [];
		this.wishListService.wishProduct$.subscribe((wishList) => {
			for (const wish of secondData) {
				let check = false;
				for (const data of wishList) {
					if (wish?.id === data.id) {
						check = true;
					}
				}
				if (check) {
					temp.push({ ...wish, wish: true });
				} else {
					temp.push(wish);
				}
			}
		});
		this.data = temp;
	}

	handleAddWishList(product: WishProduct) {
		if (product.wish) {
			this.router.navigate(["/wishlist"]);
			return;
		}
		this.wishListService.addWishList(product);
		// fake new viewedProductList
		const newList = this.data.map((item) => {
			if (item.id === product.id) {
				return { ...item, wish: true };
			}
			return item;
		});
    this.data = newList;
    this.toastr.success("Add to wishlist successfully!");
	}
	addToCart(item: Product) {
    this.cartService.addCartList(item);
    this.toastr.success("Add to cart successfully!");
	}
}
