import { Component } from "@angular/core";
import SwiperCore, { Autoplay, Navigation, SwiperOptions } from "swiper";

SwiperCore.use([Autoplay, Navigation]);

@Component({
	selector: "testimonial-slider-component",
	templateUrl: "./testimonial-slider.component.html",
})
export class TestimonialSliderComponent {
	swiperConfig: SwiperOptions = {
		slidesPerView: "auto",
		spaceBetween: 30,
		navigation: {
			prevEl: ".swiper-button-prev-4",
			nextEl: ".swiper-button-next-4",
		},
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		loop: true,
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 30,
			},
			640: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			1280: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
			1440: {
				slidesPerView: 4,
				spaceBetween: 30,
			},
		},
	};
	data = [
		{
			avatar: "1.png",
			name: "Wade Warren",
			job: "Student",
			quote:
				"The best purchase I've made in recent years. I didn't think I could pull off that color so well!",
			bg: "bd-bg-4",
		},
		{
			avatar: "2.png",
			name: "Brooklyn Simmons",
			job: "Designer",
			quote:
				"The price is a little higher than I expected, but the quality is god-tier. You get what you pay for at its finest.",
			bg: "bd-bg-6",
		},
		{
			avatar: "3.png",
			name: "John Wilson",
			job: "Content Creator",
			quote:
				"The service couldn't be better. I really couldn't have expected more. From item suggestions to final delivery.",
			bg: "bd-bg-10",
		},
		{
			avatar: "4.png",
			name: "Albert Flores",
			job: "Software Engineer",
			quote:
				"The sense of style is elegant and classy. The way outfits are put together is fashionable and trendy.",
			bg: "bd-bg-9",
		},
	];
}
