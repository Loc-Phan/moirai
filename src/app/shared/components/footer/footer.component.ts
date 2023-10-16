import { Component } from "@angular/core";

@Component({
	selector: "footer-app",
	templateUrl: "./footer.component.html",
})
export class FooterComponent {
	footerStyles = "";
	footers = [
		{
			title: "About Us",
			children: [
				{
					content: "Mission & Vision",
					url: "/",
				},
				{
					content: "Our Product",
					url: "/",
				},
				{
					content: "Our Story",
					url: "/career",
				},
				{
					content: "Our Commitment",
					url: "/",
				},
				{
					content: "Advertising",
					url: "/",
				},
			],
		},
		{
			title: "Discover",
			children: [
				{
					content: "Our Blog",
					url: "//blog",
				},
				{
					content: "Cookie Policy",
					url: "/pricing",
				},
				{
					content: "Office Center",
					url: "/",
				},
				{
					content: "News & Events",
					url: "",
				},
			],
		},
		{
			title: "Support",
			children: [
				{
					content: "FAQs",
					url: "/faqs",
				},
				{
					content: "Editor Help",
					url: "/",
				},
				{
					content: "Community",
					url: "/",
				},
				{
					content: "Live Chatting",
					url: "/",
				},
				{
					content: "Contact Us",
					url: "/contact",
				},
				{
					content: "Support Center",
					url: "/",
				},
			],
		},
		{
			title: "Useful links",
			children: [
				{
					content: "Request an offer",
					url: "/",
				},
				{
					content: "How it works",
					url: "/",
				},
				{
					content: "Pricing",
					url: "//pricing",
				},
				{
					content: "Reviews",
					url: "/",
				},
				{
					content: "Stories",
					url: "/",
				},
			],
		},
	];
	subFooter = [
		{ content: "Privacy policy", url: "/" },
		{ content: "Cookies", url: "/" },
		{ content: "Terms of service", url: "/" },
	];
	socials = [
		{ icon: "icon-facebook", url: "https://facebook.com" },
		{ icon: "icon-twitter", url: "https://twitter.com" },
		{ icon: "icon-instagram", url: "https://www.instagram.com" },
		{ icon: "icon-linkedin", url: "https://www.linkedin.com" },
	];
}
