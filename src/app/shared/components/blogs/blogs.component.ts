import { Component, Input } from "@angular/core";

export interface BlogData {
	tag: string;
	title: string;
	imageUrl: string;
	link: string;
	bgColor: string;
}

@Component({
	selector: "blogs-component",
	templateUrl: "./blogs.component.html",
})
export class BlogsComponent {
	@Input() blogsData: BlogData[] = [];
	@Input() titleColor = "";
	@Input() title = "";
	@Input() description = "";
}
