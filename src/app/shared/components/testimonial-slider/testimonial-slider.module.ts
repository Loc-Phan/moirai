import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TestimonialSliderComponent } from "./testimonial-slider.component";
import { SwiperModule } from "swiper/angular";

@NgModule({
	imports: [CommonModule, SwiperModule],
	declarations: [TestimonialSliderComponent],
	exports: [TestimonialSliderComponent],
})
export class TestimonialSliderModule {}
