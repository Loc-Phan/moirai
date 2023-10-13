import { CommonModule } from "@angular/common";
import { ThumbSliderComponent } from "./thumb-slider.component";
import { NgModule } from "@angular/core";
import { SwiperModule } from "swiper/angular";

@NgModule({
	imports: [CommonModule, SwiperModule],
	declarations: [ThumbSliderComponent],
	exports: [ThumbSliderComponent],
})
export class ThumbSliderModule {}
