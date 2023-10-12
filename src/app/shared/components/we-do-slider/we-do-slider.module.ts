import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { WeDoSliderComponent } from "./we-do-slider.component";
import { SwiperModule } from "swiper/angular";

@NgModule({
	imports: [CommonModule, SwiperModule],
	declarations: [WeDoSliderComponent],
	exports: [WeDoSliderComponent],
})
export class WeDoSliderModule {}
