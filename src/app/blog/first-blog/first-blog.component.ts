import { Component } from "@angular/core";
import { BlogData } from "src/app/shared/components/blogs/blogs.component";

@Component({
	selector: "first-blog-app",
	templateUrl: "./first-blog.component.html",
})
export class FirstBlogComponent {
	blogsData: BlogData[] = [
		{
			tag: "Trending",
			title: "Unveiling the Hottest Fashion Trends of the Season",
			imageUrl: "/assets/images/page/homepage1/img-news-3.png",
			link: "/blog-single",
			bgColor: "color-bg-9",
		},
		{
			tag: "Trending",
			title: "Unveiling the Latest Fashion Trends of this Season",
			imageUrl: "/assets/images/page/homepage1/img-news-1.png",
			link: "/blog-single",
			bgColor: "color-bg-6",
		},
		{
			tag: "Trending",
			title: "Dressing Nice: Unleashing Your Style Now",
			imageUrl: "/assets/images/page/homepage1/img-news-2.png",
			link: "/blog-single",
			bgColor: "color-bg-4",
		},
		{
			tag: "Dress Nice",
			title: "Dressing Nice: Dressing Nice Every Day",
			imageUrl: "/assets/images/page/homepage1/img-news-10.png",
			link: "/blog-single",
			bgColor: "color-bg-2",
		},
		{
			tag: "Dress Nice",
			title: "Dressing Nice and Looking Cool: Your Style Guide",
			imageUrl: "/assets/images/page/homepage1/img-news-11.png",
			link: "/blog-single",
			bgColor: "color-bg-8",
		},
		{
			tag: "Dress Nice",
			title: "Dressing Nice: A Guide to Effortless Style",
			imageUrl: "/assets/images/page/homepage1/img-news-12.png",
			link: "/blog-single",
			bgColor: "color-bg-1",
		},
	];
}
