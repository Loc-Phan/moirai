import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FirstFaqComponent } from "./first-faq/first-faq.component";
import { SecondFaqComponent } from "./second-faq/second-faq.component";
import { AccordionModule } from "../shared/components/accordion/accordion.module";
import { TestimonialSliderModule } from "../shared/components/testimonial-slider/testimonial-slider.module";

const routes: Routes = [
	{
		path: "faqs",
		children: [
			{
				path: "page-faqs-1",
				component: FirstFaqComponent,
			},
			{
				path: "page-faqs-2",
				component: SecondFaqComponent,
			},
		],
	},
];

@NgModule({
	imports: [
		CommonModule,
		AccordionModule,
		TestimonialSliderModule,
		RouterModule.forChild(routes),
	],
	declarations: [FirstFaqComponent, SecondFaqComponent],
	exports: [RouterModule],
})
export class FaqRoutingModule {}
