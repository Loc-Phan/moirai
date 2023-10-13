import { Component, HostListener } from "@angular/core";

@Component({
	selector: "header-app",
	templateUrl: "./header.component.html",
})
export class HeaderComponent {
	headerStyle = "normal-logo";
	scroll: boolean = false;
	headers = [
		{
			content: "Home",
			twoCol: true,
			url: "/",
		},
		{
			content: "About",
			url: "/about/page-about-2",
		},
		{
			content: "Services",
			url: "/service/page-service-1",
		},
		{
			content: "Pricing",
			url: "/pricing/page-pricing-1",
		},
		{ content: "Career", url: "/career/page-career" },
		{
			content: "FAQ",
			url: "/faqs/page-faqs-1",
		},
		{
			content: "Blog",
		},
		{
			content: "Product",
			url: "/shopping/page-shop-grid-1",
		},
		{
			content: "Contact",
			url: "/page-contact",
		},
	];
	@HostListener("window:scroll", ["$event"])
	onScroll() {
		let scrollCheck: boolean = window.scrollY > 100;
		if (scrollCheck !== this.scroll) {
			this.scroll = scrollCheck;
		}
	}
}
