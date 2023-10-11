import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FirstBlogComponent } from "./first-blog/first-blog.component";
import { SecondBlogComponent } from "./second-blog/second-blog.component";
import { SingleBlogComponent } from "./single-blog/single-blog.compoent";

const routes: Routes = [
	{
		path: "blog",
		children: [
			{
				path: "blog-1",
				component: FirstBlogComponent,
			},
			{
				path: "blog-2",
				component: SecondBlogComponent,
			},
			{
				path: "blog-single",
				component: SingleBlogComponent,
			},
		],
	},
];

@NgModule({
	imports: [CommonModule, RouterModule.forChild(routes)],
	declarations: [],
	exports: [RouterModule],
})
export class BlogRoutingModule {}
