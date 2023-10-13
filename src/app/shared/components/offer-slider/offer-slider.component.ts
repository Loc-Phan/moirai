import { Component } from "@angular/core";
import SwiperCore, { Autoplay, Navigation, SwiperOptions } from "swiper";

SwiperCore.use([Autoplay, Navigation]);

@Component({
	selector: "offer-slider-component",
	templateUrl: "./offer-slider.component.html",
})
export class OfferSliderComponent {
	swiperConfig: SwiperOptions = {
		slidesPerView: "auto",
		spaceBetween: 30,
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 30,
			},
			640: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
			1280: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
		},
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
	data = [
		{
			img: "quality.svg",
			title: "Unparalleled Quality",
			text: "We meticulously curate our collections to ensure that every garment we offer meets the highest standards of quality.",
		},
		{
			img: "trendsetting.svg",
			title: "Trendsetting Style",
			text: "Our team of experienced fashion experts keeps a pulse on the latest trends and emerging styles.",
		},
		{
			img: "community.svg",
			title: "Community Engagement",
			text: "We actively engage with our community through various initiatives.",
		},
	];
}
