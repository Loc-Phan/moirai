import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FirstAboutComponent } from "./first-about/first-about.component";
import { SecondAboutComponent } from "./second-about/second-about.component";
import { ThirdAboutComponent } from "./third-about/third-about.component";
import { ContactUsComponent } from "../shared/components/contact-us/contact-us.component";
import { BestSellerModule } from "../shared/components/best-seller/best-seller.module";
import { AccordionModule } from "../shared/components/accordion/accordion.module";
import { TestimonialSliderModule } from "../shared/components/testimonial-slider/testimonial-slider.module";
import { TeamModule } from "../shared/components/team/team.module";
import { FeedbackModule } from "../shared/components/feedback/feedback.module";
import { BlogsModule } from "../shared/components/blogs/blogs.module";

const routes: Routes = [
	{
		path: "about",
		children: [
			{
				path: "page-about-1",
				component: FirstAboutComponent,
			},
			{
				path: "page-about-2",
				component: SecondAboutComponent,
			},
			{
				path: "page-about-3",
				component: ThirdAboutComponent,
			},
		],
	},
];

@NgModule({
	imports: [
		CommonModule,
		BestSellerModule,
    AccordionModule,
    TestimonialSliderModule,
    FeedbackModule,
    BlogsModule,
    TeamModule,
		RouterModule.forChild(routes),
	],
	declarations: [
		FirstAboutComponent,
		SecondAboutComponent,
		ThirdAboutComponent,
		ContactUsComponent,
	],
	exports: [RouterModule],
})
export class AboutRoutingModule {}
