import { Component } from "@angular/core";
import { BlogData, fifthBlogsData } from "src/app/mockData/blogData";

@Component({
	selector: "first-blog-app",
	templateUrl: "./first-blog.component.html",
})
export class FirstBlogComponent {
	blogsData: BlogData[] = fifthBlogsData;
}
