import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FirstCareerComponent } from "./first-career/first-career.component";
import { FeedbackModule } from "../shared/components/feedback/feedback.module";
import { NewsLetterModule } from "../shared/components/news-letter/news-letter.module";
import { BlogsModule } from "../shared/components/blogs/blogs.module";
import { AboutUsModule } from "../shared/components/about-us/about-us.module";

const routes: Routes = [
	{
		path: "career",
		component: FirstCareerComponent,
	},
];

@NgModule({
	imports: [
		CommonModule,
		FeedbackModule,
		NewsLetterModule,
		BlogsModule,
		AboutUsModule,
		RouterModule.forChild(routes),
	],
	declarations: [FirstCareerComponent],
	exports: [RouterModule],
})
export class CareerRoutingModule {}
