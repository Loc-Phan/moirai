import { Component } from "@angular/core";
import SwiperCore, { Autoplay, Navigation, SwiperOptions } from "swiper";

SwiperCore.use([Autoplay, Navigation]);

@Component({
	selector: "we-do-slider-component",
	templateUrl: "we-do-slider.component.html",
})
export class WeDoSliderComponent {
	swiperConfig: SwiperOptions = {
		slidesPerView: 1,
		spaceBetween: 30,
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
			1024: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
		},
		navigation: {
			prevEl: ".team-swiper-button-prev-5",
			nextEl: ".team-swiper-button-next-5",
		},
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		loop: true,
	};
	data = [
		{
			img: "checking.svg",
			title: "Inspection and Evaluation",
			text: "Our expert team conducts a thorough inspection to assess the garments requiring alteration. We identify specific adjustments needed for the desired fit.",
		},
		{
			img: "confirm.svg",
			title: "Size Confirmation",
			text: "Upon receiving customer-provided size information, we verify the measurements and cross-reference them with garment specifications for accurate alterations.",
		},
		{
			img: "sewing.svg",
			title: "Alteration and Tailoring",
			text: "Our experienced tailors meticulously adjust the garments, including hemming, seam adjustments, and more, ensuring a perfect fit based on customer requirements.",
		},
		{
			img: "check-all.svg",
			title: "Quality Assurance",
			text: "After alterations, our quality assurance team rigorously inspects each garment, checking fit, stitching, and craftsmanship to ensure high standards and customer satisfaction.",
		},
		{
			img: "iron.svg",
			title: "Final Touches and Pressing",
			text: "Before delivery, we add final touches, such as pressing or steaming, to ensure impeccable appearance, eliminating wrinkles and presenting garments in their best condition.",
		},
		{
			img: "delivery.svg",
			title: "Packaging and Delivery",
			text: "After completing alterations and final touches, we securely package the garments for transit. Prompt delivery to the customer's specified address ensures a seamless experience.",
		},
	];
}
