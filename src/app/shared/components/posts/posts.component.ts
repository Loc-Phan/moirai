import { Component, Input, OnInit } from "@angular/core";

export interface PostData {
	title: string;
	imageUrl: string;
	author: string;
	authorAvatar: string;
	date: string;
	link: string;
	bgColor: string;
	decription?: string;
}

@Component({
	selector: "posts-component",
	templateUrl: "./posts.component.html",
})
export class PostsComponent implements OnInit {
	@Input() bigTitle!: string;
	@Input() description!: string;
	@Input() postsStyle!: string;
	@Input() postsData!: PostData[];
	mainPosts: PostData[] = [];
	subPosts: PostData[] = [];
	ngOnInit() {
		this.mainPosts = this.postsData.slice(0, 2);
		this.subPosts = this.postsData.slice(2, 6);
	}
}
