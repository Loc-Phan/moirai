import { Component, inject } from "@angular/core";
import { AccordionData } from "src/app/shared/components/accordion/accordion.compoent";
import { BlogData } from "src/app/shared/components/blogs/blogs.component";
import { HeaderService } from "../services/header.service";

@Component({
	selector: "second-about-app",
	templateUrl: "./about.component.html",
})
export class AboutComponent {
	blogsData: BlogData[] = [
		{
			tag: "Lastest trend",
			title: "Unveiling the Latest Fashion Trends of this Season",
			imageUrl: "/assets/images/page/homepage6/img-news-1.png",
			link: "/blog-single",
			bgColor: "color-bg-9",
		},
		{
			tag: "How to Dress Nice & Look Stylisht",
			title: "Mastering the Art of Looking Cool Style",
			imageUrl: "/assets/images/page/homepage6/img-news-2.png",
			link: "/blog-single",
			bgColor: "color-bg-6",
		},
		{
			tag: "How to Dress Nice Every Day",
			title: "Dressing Nice: Dressing Nice Every Day",
			imageUrl: "/assets/images/page/homepage6/img-news-3.png",
			link: "/blog-single",
			bgColor: "color-bg-4",
		},
		{
			tag: "Lastest trend",
			title: "The Hottest Fashion Trends of the Season",
			imageUrl: "/assets/images/page/homepage6/img-news-4.png",
			link: "/blog-single",
			bgColor: "color-bg-2",
		},
		{
			tag: "How to Dress Nice & Look Stylisht",
			title: "Dressing Nice: A Guide to Effortless Style",
			imageUrl: "/assets/images/page/homepage6/img-news-5.png",
			link: "/blog-single",
			bgColor: "color-bg-8",
		},
		{
			tag: "How to Dress Nice Every Day",
			title: "Dressing Nice: Unleashing Your Style Now",
			imageUrl: "/assets/images/page/homepage6/img-news-6.png",
			link: "/blog-single",
			bgColor: "color-bg-1",
		},
	];
	accordionData: AccordionData[] = [
		{
			title: "Where is my order?",
			content:
				"Once your order has been shipped, you will receive a confirmation email with a tracking number. You can use this tracking number to check the status and location of your package. Simply click on the provided tracking link or visit our website's Order Tracking page and enter your tracking number to get real-time updates on the whereabouts of your order.",
		},
		{
			title: "How can I return an item purchased online?",
			content:
				"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature Id pro doctus mediocrem erroribus, diam nostro sed cu. Ea pri graeco tritani partiendo. Omittantur No tale choro fastidii his, pri cu epicuri perpetua. Enim dictas omittantur et duo, vocent lucilius quaestio mea ex. Ex illum officiis id.",
		},
		{
			title: "Can I cancel or change my order?",
			content:
				"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature Id pro doctus mediocrem erroribus, diam nostro sed cu. Ea pri graeco tritani partiendo. Omittantur No tale choro fastidii his, pri cu epicuri perpetua. Enim dictas omittantur et duo, vocent lucilius quaestio mea ex. Ex illum officiis id.",
		},
		{
			title: "I have promotional or discount code?",
			content:
				"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature Id pro doctus mediocrem erroribus, diam nostro sed cu. Ea pri graeco tritani partiendo. Omittantur No tale choro fastidii his, pri cu epicuri perpetua. Enim dictas omittantur et duo, vocent lucilius quaestio mea ex. Ex illum officiis id.",
		},
		{
			title: "What are the delivery types you use?",
			content:
				"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature Id pro doctus mediocrem erroribus, diam nostro sed cu. Ea pri graeco tritani partiendo. Omittantur No tale choro fastidii his, pri cu epicuri perpetua. Enim dictas omittantur et duo, vocent lucilius quaestio mea ex. Ex illum officiis id.",
		},
		{
			title: "How can I pay for my purchases?",
			content:
				"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature Id pro doctus mediocrem erroribus, diam nostro sed cu. Ea pri graeco tritani partiendo. Omittantur No tale choro fastidii his, pri cu epicuri perpetua. Enim dictas omittantur et duo, vocent lucilius quaestio mea ex. Ex illum officiis id.",
		},
		{
			title: "Can I cancel my order?",
			content:
				"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature Id pro doctus mediocrem erroribus, diam nostro sed cu. Ea pri graeco tritani partiendo. Omittantur No tale choro fastidii his, pri cu epicuri perpetua. Enim dictas omittantur et duo, vocent lucilius quaestio mea ex. Ex illum officiis id.",
		},
	];
	headerService = inject(HeaderService);
	constructor() {
		this.headerService.setHeaderStyleObs("header-style-6 normal-logo");
	}
	ngOnDestroy() {
		this.headerService.setHeaderStyleObs("");
	}
}
