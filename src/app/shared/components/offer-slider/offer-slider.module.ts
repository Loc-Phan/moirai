import { CommonModule } from "@angular/common";
import { OfferSliderComponent } from "./offer-slider.component";
import { NgModule } from "@angular/core";
import { SwiperModule } from "swiper/angular";

@NgModule({
  imports: [CommonModule,SwiperModule],
  declarations: [OfferSliderComponent],
  exports: [OfferSliderComponent]
})
export class OfferSliderModule {}
