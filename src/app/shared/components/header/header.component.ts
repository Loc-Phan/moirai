import { Component, HostListener, Inject } from "@angular/core";
import { HeaderService } from "src/app/services/header.service";

@Component({
	selector: "header-app",
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
	headerStyle = "";
	scroll: boolean = false;
	openClass: string = "";
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
	constructor(@Inject(HeaderService) headerService: HeaderService) {
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
}
