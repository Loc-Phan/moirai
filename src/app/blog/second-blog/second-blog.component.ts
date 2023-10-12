import { Component } from "@angular/core";
import { BlogData } from "src/app/shared/components/blogs/blogs.component";
import { PostData } from "src/app/shared/components/posts/posts.component";

@Component({
	selector: "second-blog-app",
	templateUrl: "./second-blog.component.html",
})
export class SecondBlogComponent {
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
	postsData: PostData[] = [
		{
			title: "The Hottest Fashion Trends of the Season",
			imageUrl: "/assets/images/page/blog/2/img-news-2.png",
			author: "Jenny Wilson",
			authorAvatar: "/assets/images/page/blog/2/user-1.png",
			date: "August 25, 2022",
			link: "/blog-single",
			bgColor: "",
			decription:
				"Dressing Nice: Dressing Nice Every Day doesn't have to be a daunting task or reserved for special occasions. With a few simple tips and a little planning, you can elevate your daily style and feel confident in your appearance",
		},
		{
			title: "Dressing Nice: Unleashing Your Style Now",
			imageUrl: "/assets/images/page/blog/2/img-news-3.png",
			author: "Jenny Wilson",
			authorAvatar: "/assets/images/page/blog/2/user-2.png",
			date: "August 25, 2022",
			link: "/blog-single",
			bgColor: "color-bg-2",
			decription:
				"In this blog post, we'll explore some timeless tips and tricks to help you dress nice effortlessly, regardless of the occasion",
		},
		{
			title: "The Art of Dressing",
			imageUrl: "/assets/images/page/homepage1/img-news-11.png",
			author: "Jane Cooper",
			authorAvatar: "/assets/images/page/blog/2/user-3.png",
			date: "August 25, 2022",
			link: "/blog-single",
			bgColor: "color-bg-10",
			decription:
				"Fashion is an ever-evolving phenomenon that shapes our sense of style and self-expression. As we delve into the latest fashion trends, we embark on a captivating journey through the world of apparel.",
		},
		{
			title: "The Art of Dressing",
			imageUrl: "/assets/images/page/homepage1/img-news-11.png",
			author: "Wade Warren",
			authorAvatar: "/assets/images/page/blog/2/user-4.png",
			date: "August 25, 2022",
			link: "/blog-single",
			bgColor: "color-bg-2",
			decription:
				"Fashion is an ever-evolving phenomenon that shapes our sense of style and self-expression. As we delve into the latest fashion trends, we embark on a captivating journey through the world of apparel.",
		},
		{
			title: "Dressing Nice: A Guide to Effortless Style",
			imageUrl: "/assets/images/page/homepage1/img-news-11.png",
			author: "Jenny Wilson",
			authorAvatar: "/assets/images/page/blog/2/user-5.png",
			date: "August 25, 2022",
			link: "/blog-single",
			bgColor: "color-bg-5",
			decription:
				"Fashion is an ever-evolving phenomenon that shapes our sense of style and self-expression. As we delve into the latest fashion trends, we embark on a captivating journey through the world of apparel.",
		},
		{
			title: "Dressing Nice: Unleashing Your Style Now",
			imageUrl: "/assets/images/page/homepage1/img-news-11.png",
			author: "Jenny Wilson",
			authorAvatar: "/assets/images/page/blog/2/user-6.png",
			date: "August 25, 2022",
			link: "/blog-single",
			bgColor: "color-bg-9",
			decription:
				"Fashion is an ever-evolving phenomenon that shapes our sense of style and self-expression. As we delve into the latest fashion trends, we embark on a captivating journey through the world of apparel.",
		},
	];
}
