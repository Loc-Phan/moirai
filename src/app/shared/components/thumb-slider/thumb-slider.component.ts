import { Component } from "@angular/core";
import SwiperCore, { Autoplay, FreeMode, Navigation, SwiperOptions, Thumbs } from "swiper";

SwiperCore.use([Autoplay, Navigation, FreeMode, Thumbs]);

@Component({
	selector: "thumb-slider-component",
	templateUrl: "./thumb-slider.component.html",
})
export class ThumbSliderComponent {
	swiperConfig: SwiperOptions = {
		slidesPerView: 3,
		spaceBetween: 10,
		navigation: {
			prevEl: ".swiper-button-prev-5",
			nextEl: ".swiper-button-next-5",
		},
		autoplay: {
			delay: 25000,
			disableOnInteraction: false,
		},
		freeMode: true,
		watchSlidesProgress: true
	};
	secondSwiperConfig: SwiperOptions = {
		slidesPerView: 3,
		spaceBetween: 10,
		navigation: {
			prevEl: ".swiper-button-prev-5",
			nextEl: ".swiper-button-next-5",
		},
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		loop: true,
	};
}
