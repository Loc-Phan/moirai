import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FirstAboutComponent } from "./first-about/first-about.component";
import { SecondAboutComponent } from "./second-about/second-about.component";
import { ThirdAboutComponent } from "./third-about/third-about.component";
import { BlogsComponent } from "../shared/components/blogs/blogs.component";
import { TestimonialSliderComponent } from "../shared/components/testimonial-slider/testimonial-slider.component";
import { SwiperModule } from "swiper/angular";
import { TeamComponent } from "../shared/components/team/team.component";
import { ContactUsComponent } from "../shared/components/contact-us/contact-us.component";
import { FeedbackComponent } from "../shared/components/feedback/feedback.component";
import { BestSellerModule } from "../shared/components/best-seller/best-seller.module";
import { AccordionModule } from "../shared/components/accordion/accordion.module";

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
		SwiperModule,
		BestSellerModule,
		AccordionModule,
		RouterModule.forChild(routes),
	],
	declarations: [
		BlogsComponent,
		FirstAboutComponent,
		SecondAboutComponent,
		ThirdAboutComponent,
		TestimonialSliderComponent,
		TeamComponent,
		ContactUsComponent,
		FeedbackComponent,
	],
	exports: [RouterModule],
})
export class AboutRoutingModule {}
