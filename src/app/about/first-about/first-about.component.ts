import { Component } from "@angular/core";
import { BlogData } from "src/app/shared/blogs/blogs.component";

@Component({
	selector: "first-about-app",
	templateUrl: "./first-about.component.html",
})
export class FirstAboutComponent {
	openVideo = false;
	blogsData: BlogData[] = [
		{
			tag: "Lastest trend",
			title: "Unveiling the Latest Fashion Trends of this Season",
			imageUrl: "/assets/images/page/homepage1/img-news-1.png",
			link: "/blog-single",
			bgColor: "color-bg-9",
		},
		{
			tag: "How to Dress Nice & Look Stylisht",
			title: "Mastering the Art of Looking Cool Style",
			imageUrl: "/assets/images/page/homepage1/img-news-2.png",
			link: "/blog-single",
			bgColor: "color-bg-6",
		},
		{
			tag: "How to Dress Nice Every Day",
			title: "Dressing Nice: Dressing Nice Every Day",
			imageUrl: "/assets/images/page/homepage1/img-news-3.png",
			link: "/blog-single",
			bgColor: "color-bg-4",
		},
		{
			tag: "Dress Nice",
			title: "Dressing Nice: Dressing Nice Every Day",
			imageUrl: "/assets/images/page/homepage1/img-news-10.png",
			link: "/blog-single",
			bgColor: "color-bg-9",
		},
		{
			tag: "Dress Nice",
			title: "Dressing Nice and Looking Cool: Your Style Guide",
			imageUrl: "/assets/images/page/homepage1/img-news-11.png",
			link: "/blog-single",
			bgColor: "color-bg-6",
		},
		{
			tag: "Dress Nice",
			title: "Dressing Nice: A Guide to Effortless Style",
			imageUrl: "/assets/images/page/homepage1/img-news-12.png",
			link: "/blog-single",
			bgColor: "color-bg-4",
		},
	];
}
