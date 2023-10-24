import { Component, HostListener, Inject, OnInit } from "@angular/core";
import { Product } from "src/app/mock-data/shopData";
import { CartService } from "src/app/services/cart.service";
import { HeaderService } from "src/app/services/header.service";
import { WishListService } from "src/app/services/wishlist.service";

@Component({
	selector: "header-app",
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
	headerStyle = "";
	scroll: boolean = false;
	openClass: string = "";
	wishList!: Product[];
	cart!: Product[];
	headers = [
		{
			content: "Home",
			url: "/",
		},
		{
			content: "About",
			url: "/about",
		},
		{
			content: "Services",
			url: "/service",
		},
		{
			content: "Pricing",
			url: "/pricing",
		},
		{ content: "Career", url: "/career" },
		{
			content: "FAQ",
			url: "/faqs",
		},
		{
			content: "Blog",
		},
		{
			content: "Product",
			url: "/shop",
		},
		{
			content: "Contact",
			url: "/contact",
		},
	];
	constructor(
		@Inject(HeaderService) headerService: HeaderService,
		private wishListService: WishListService,
		private cartService: CartService
	) {
		headerService
			.getHeaderStyleObs()
			.subscribe((style) => (this.headerStyle = style));
	}
	@HostListener("window:scroll", ["$event"])
	onScroll() {
		let scrollCheck: boolean = window.scrollY > 100;
		if (scrollCheck !== this.scroll) {
			this.scroll = scrollCheck;
		}
	}
	handleOpen = () => {
		document.body.classList.add("mobile-menu-active");
		this.openClass = "sidebar-visible";
	};
	handleRemove() {
		if (this.openClass === "sidebar-visible") {
			this.openClass = "";
			document.body.classList.remove("mobile-menu-active");
		}
	}
	ngOnInit() {
		this.wishList = this.wishListService.getWishList();
		this.cart = this.cartService.getCartList();
	}
}
