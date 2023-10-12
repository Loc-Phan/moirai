import { Component } from "@angular/core";

@Component({
	selector: "header-app",
	templateUrl: "./header.component.html",
})
export class HeaderComponent {
	headerStyle = "header-style-6 normal-logo";
	scroll = false;
	headers = [
		{
      content: "Home",
      twoCol: true,
			children: [
				{ content: "Homepage - 1", icon: "fi fi-rr-home", url: "/" },
				{
					content: "Homepage - 2",
					icon: "fi fi-rr-home",
					url: "/homepage/index-2",
				},
				{
					content: "Homepage - 3",
					icon: "fi fi-rr-home",
					url: "/homepage/index-3",
				},
				{
					content: "Homepage - 4",
					icon: "fi fi-rr-home",
					url: "/homepage/index-4",
				},
				{
					content: "Homepage - 5",
					icon: "fi fi-rr-home",
					url: "/homepage/index-5",
				},
				{
					content: "Homepage - 6",
					icon: "fi fi-rr-home",
					url: "/homepage/index-6",
				},
				{
					content: "Homepage - 7",
					icon: "fi fi-rr-home",
					url: "/homepage/index-7",
				},
				{
					content: "Homepage - 8",
					icon: "fi fi-rr-home",
					url: "/homepage/index-8",
				},
			],
		},
		{
			content: "About",
			children: [
				{
					content: "About Us - 1",
					icon: "fi fi-rr-star",
					url: "/about/page-about-1",
				},
				{
					content: "About Us - 2",
					icon: "fi fi-rr-star",
					url: "/about/page-about-2",
				},
				{
					content: "About Us - 3",
					icon: "fi fi-rr-star",
					url: "/about/page-about-3",
				},
			],
		},
		{
			content: "Services",
			children: [
				{
					content: "Services - 1",
					icon: "fi fi-rr-gem",
					url: "/service/page-service-1",
				},
				{
					content: "Services - 2",
					icon: "fi fi-rr-gem",
					url: "/service/page-service-2",
				},
				{
					content: "Pricing - 1",
					icon: "fi fi-rr-database",
					url: "/pricing/page-pricing-1",
				},
				{
					content: "Pricing - 2",
					icon: "fi fi-rr-database",
					url: "/pricing/page-pricing-2",
				},
				{
					content: "FAQs - 1",
					icon: "fi fi-rr-headset",
					url: "/faqs/page-faqs-1",
				},
				{
					content: "FAQs - 2",
					icon: "fi fi-rr-headset",
					url: "/faqs/page-faqs-2",
				},
				{
					content: "Career",
					icon: "fi fi-rr-briefcase",
					url: "/career/page-career",
				},
				{
					content: "Career Detail",
					icon: "fi fi-rr-briefcase",
					url: "/career/page-career-detail",
				},
			],
		},
		{
			content: "Page",
			children: [
				{
					content: "Sign Up",
					icon: "fi fi-rr-edit",
					url: "/auth/page-signup",
				},
				{
					content: "Log In",
					icon: "fi fi-rr-edit",
					url: "/auth/page-login",
				},
				{
					content: "Reset Password",
					icon: "fi fi-rr-edit",
					url: "/auth/page-reset",
				},
				{
					content: "Error 404",
					icon: "fi fi-rr-edit",
					url: "/404",
				},
			],
		},
		{
			content: "Blog",
			children: [
				{
					content: "Blog Archive - 1",
					icon: "fi fi-rr-edit",
					url: "/blog/blog-1",
				},
				{
					content: "Blog Archive - 2",
					icon: "fi fi-rr-edit",
					url: "/blog/blog-2",
				},
				{
					content: "Blog Single",
					icon: "fi fi-rr-edit",
					url: "/blog/blog-single",
				},
			],
		},
		{
			content: "Product",
			children: [
				{
					content: "Shop Grid - 1",
					icon: "fi fi-rr-edit",
					url: "/shopping/page-shop-grid-1",
				},
				{
					content: "Shop Grid - 2",
					icon: "fi fi-rr-edit",
					url: "/shopping/page-shop-grid-2",
				},
				{
					content: "Product Details",
					icon: "fi fi-rr-edit",
					url: "/shop/1",
				},
			],
		},
		{
			content: "Contact",
			url: "/page-contact",
		},
	];
}
