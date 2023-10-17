import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FirstFaqComponent } from "./first-faq/first-faq.component";
import { AccordionModule } from "../shared/components/accordion/accordion.module";
import { TestimonialSliderModule } from "../shared/components/testimonial-slider/testimonial-slider.module";

const routes: Routes = [
	{
		path: "faqs",
		component: FirstFaqComponent,
	},
];

@NgModule({
	imports: [
		CommonModule,
		AccordionModule,
		TestimonialSliderModule,
		RouterModule.forChild(routes),
	],
	declarations: [FirstFaqComponent],
	exports: [RouterModule],
})
export class FaqRoutingModule {}
