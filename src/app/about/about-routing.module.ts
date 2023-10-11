import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FirstAboutComponent } from "./first-about/first-about.component";
import { SecondAboutComponent } from "./second-about/second-about.component";
import { ThirdAboutComponent } from "./third-about/third-about.component";
import { BlogsComponent } from "../shared/blogs/blogs.component";
import { TestimonialSliderComponent } from "../shared/testimonial-slider/testimonial-slider.component";
import { SwiperModule } from "swiper/angular";
import { TeamComponent } from "../shared/team/team.component";
import { ContactUsComponent } from "../shared/contact-us/contact-us.component";
import { AccordionComponent } from "../shared/accordion/accordion.compoent";
import { BestsellerComponent } from "../shared/best-seller/best-seller.component";
import { FeedbackComponent } from "../shared/feedback/feedback.component";

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
	imports: [CommonModule, SwiperModule, RouterModule.forChild(routes)],
	declarations: [
		BlogsComponent,
		FirstAboutComponent,
		SecondAboutComponent,
		ThirdAboutComponent,
		TestimonialSliderComponent,
		TeamComponent,
		ContactUsComponent,
		AccordionComponent,
		BestsellerComponent,
		FeedbackComponent,
	],
	exports: [RouterModule],
})
export class AboutRoutingModule {}
