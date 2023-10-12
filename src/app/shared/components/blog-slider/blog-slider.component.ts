import { Component } from "@angular/core";
import SwiperCore, { Autoplay, Navigation, SwiperOptions } from "swiper";

SwiperCore.use([Autoplay, Navigation]);


@Component({
	selector: "blog-slider-component",
	templateUrl: "./blog-slider.component.html",
})
export class BlogSliderComponent {
	swiperConfig: SwiperOptions = {
		slidesPerView: 1,
		spaceBetween: 30,
		navigation: {
			prevEl: ".swiper-button-prev-5",
			nextEl: ".swiper-button-next-5",
		},
		autoplay: {
			delay: 25000,
			disableOnInteraction: false,
		},
		loop: true,
	};
	data = [
		{
			img: "9.jpg",
			avatar: "1.jpg",
			title: "Liguid Wave",
			author: "Sound Box",
		},
		{
			img: "10.jpg",
			avatar: "2.jpg",
			title: "Liguid Wave",
			author: "Sound Box",
		},
	];
}
