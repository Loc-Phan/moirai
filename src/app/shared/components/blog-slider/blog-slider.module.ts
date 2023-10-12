import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BlogSliderComponent } from "./blog-slider.component";
import { SwiperModule } from "swiper/angular";

@NgModule({
	imports: [CommonModule, SwiperModule],
	declarations: [BlogSliderComponent],
	exports: [BlogSliderComponent],
})
export class BlogSliderModule {}
