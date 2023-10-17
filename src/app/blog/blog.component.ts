import { Component } from "@angular/core";
import { BlogData, fifthBlogsData } from "src/app/mock-data/blogData";

@Component({
	selector: "first-blog-app",
	templateUrl: "./blog.component.html",
})
export class BlogComponent {
	blogsData: BlogData[] = fifthBlogsData;
}
