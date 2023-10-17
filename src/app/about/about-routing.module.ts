import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactUsComponent } from "../shared/components/contact-us/contact-us.component";
import { BestSellerModule } from "../shared/components/best-seller/best-seller.module";
import { AccordionModule } from "../shared/components/accordion/accordion.module";
import { TestimonialSliderModule } from "../shared/components/testimonial-slider/testimonial-slider.module";
import { TeamModule } from "../shared/components/team/team.module";
import { FeedbackModule } from "../shared/components/feedback/feedback.module";
import { BlogsModule } from "../shared/components/blogs/blogs.module";
import { AboutComponent } from "./about.component";

const routes: Routes = [
	{
    path: "about",
    component: AboutComponent
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
    AboutComponent,
		ContactUsComponent,
	],
	exports: [RouterModule],
})
export class AboutRoutingModule {}
