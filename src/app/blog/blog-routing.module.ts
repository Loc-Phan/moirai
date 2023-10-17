import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FirstBlogComponent } from "./first-blog/first-blog.component";
import { BlogsModule } from "../shared/components/blogs/blogs.module";
import { NewsLetterModule } from "../shared/components/news-letter/news-letter.module";
import { BlogSliderModule } from "../shared/components/blog-slider/blog-slider.module";
import { PostsModule } from "../shared/components/posts/posts.module";

const routes: Routes = [
	{
		path: "blog",
		component: FirstBlogComponent,
	},
];

@NgModule({
	imports: [
		CommonModule,
		BlogsModule,
		NewsLetterModule,
		BlogSliderModule,
		PostsModule,
		RouterModule.forChild(routes),
	],
	declarations: [FirstBlogComponent],
	exports: [RouterModule],
})
export class BlogRoutingModule {}
