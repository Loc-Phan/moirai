import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FeedbackModule } from "../shared/components/feedback/feedback.module";
import { NewsLetterModule } from "../shared/components/news-letter/news-letter.module";
import { BlogsModule } from "../shared/components/blogs/blogs.module";
import { AboutUsModule } from "../shared/components/about-us/about-us.module";
import { CareerComponent } from "./career.component";

const routes: Routes = [
	{
		path: "career",
		component: CareerComponent,
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
	declarations: [CareerComponent],
	exports: [RouterModule],
})
export class CareerRoutingModule {}
