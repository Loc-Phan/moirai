import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FaqComponent } from "./faq.component";
import { AccordionModule } from "../shared/components/accordion/accordion.module";
import { TestimonialSliderModule } from "../shared/components/testimonial-slider/testimonial-slider.module";

const routes: Routes = [
	{
		path: "faqs",
		component: FaqComponent,
	},
];

@NgModule({
	imports: [
		CommonModule,
		AccordionModule,
		TestimonialSliderModule,
		RouterModule.forChild(routes),
	],
	declarations: [FaqComponent],
	exports: [RouterModule],
})
export class FaqRoutingModule {}
