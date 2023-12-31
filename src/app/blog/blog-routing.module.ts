import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BlogsModule } from "../shared/components/blogs/blogs.module";
import { NewsLetterModule } from "../shared/components/news-letter/news-letter.module";
import { BlogSliderModule } from "../shared/components/blog-slider/blog-slider.module";
import { PostsModule } from "../shared/components/posts/posts.module";
import { BlogComponent } from "./blog.component";

const routes: Routes = [
	{
		path: "blog",
		component: BlogComponent,
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
	declarations: [BlogComponent],
	exports: [RouterModule],
})
export class BlogRoutingModule {}
