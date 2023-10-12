import { Component } from "@angular/core";

interface Comment {
	id: number;
	userImage: string;
	userName: string;
	content: string;
	date: string;
	link: string;
}

@Component({
	selector: "single-blog-app",
	templateUrl: "./single-blog.component.html",
})
export class SingleBlogComponent {
	userComments: Comment[] = [
		{
			id: 1,
			userImage: "/assets/images/page/blog/single/user-1.png",
			userName: "Robert Fox",
			content:
				"From trend-spotting to outfit ideas, these blogs provide a wealth of valuable information to help readers navigate the ever-evolving world of fashion with confidence",
			date: "August 25, 2022",
			link: "#",
		},
		{
			id: 2,
			userImage: "/assets/images/page/blog/single/user-2.png",
			userName: "Jenny Wilson",
			content:
				"These blogs provide a wealth of valuable information to help readers navigate the ever-evolving world of fashion with confidence",
			date: "August 25, 2022",
			link: "#",
		},
		{
			id: 3,
			userImage: "/assets/images/page/blog/single/user-3.png",
			userName: "Eleanor Pena",
			content:
				"From trend-spotting to outfit ideas, these blogs provide a wealth of valuable information to help readers navigate the ever-evolving world of fashion with confidence",
			date: "August 25, 2022",
			link: "#",
		},
	];
}
