import { Component } from "@angular/core";
import SwiperCore, { Autoplay, Navigation, SwiperOptions } from "swiper";

SwiperCore.use([Autoplay, Navigation]);

@Component({
	selector: "team-component",
	templateUrl: "./team.component.html",
})
export class TeamComponent {
	swiperConfig: SwiperOptions = {
		slidesPerView: 1,
		spaceBetween: 30,
		navigation: {
			prevEl: ".team-swiper-button-prev-4",
			nextEl: ".team-swiper-button-next-4",
		},
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		loop: true,
	};
	teams = [
		{
			avatar: "/assets/images/page/about/1/team-1.png",
			title: "Marketing CEO",
			name: "Theresa Webb",
			description:
				"Captivated and inspired by the ingenuity and artistry of our extraordinary fashion designer",
			social: [
				{ url: "#", icon: "icon-socials icon-facebook" },
				{ url: "#", icon: "icon-socials icon-twitter" },
				{ url: "#", icon: "icon-socials icon-instagram" },
				{ url: "#", icon: "icon-socials icon-linkedin" },
			],
		},
		{
			avatar: "/assets/images/page/about/1/team-2.png",
			title: "Designer",
			name: "Darlene Robertson",
			description:
				"Captivated and inspired by the ingenuity and artistry of our extraordinary fashion designer",
			social: [
				{ url: "#", icon: "icon-socials icon-facebook" },
				{ url: "#", icon: "icon-socials icon-twitter" },
				{ url: "#", icon: "icon-socials icon-instagram" },
				{ url: "#", icon: "icon-socials icon-linkedin" },
			],
		},
		{
			avatar: "/assets/images/page/about/1/team-3.png",
			title: "Marketing",
			name: "Annette Black",
			description:
				"Captivated and inspired by the ingenuity and artistry of our extraordinary fashion designer",
			social: [
				{ url: "#", icon: "icon-socials icon-facebook" },
				{ url: "#", icon: "icon-socials icon-twitter" },
				{ url: "#", icon: "icon-socials icon-instagram" },
				{ url: "#", icon: "icon-socials icon-linkedin" },
			],
		},
		{
			avatar: "/assets/images/page/about/1/team-4.png",
			title: "Marketing",
			name: "Esther Howard",
			description:
				"Captivated and inspired by the ingenuity and artistry of our extraordinary fashion designer",
			social: [
				{ url: "#", icon: "icon-socials icon-facebook" },
				{ url: "#", icon: "icon-socials icon-twitter" },
				{ url: "#", icon: "icon-socials icon-instagram" },
				{ url: "#", icon: "icon-socials icon-linkedin" },
			],
		},
		{
			avatar: "/assets/images/page/about/1/team-5.png",
			title: "Marketing",
			name: "Courtney Henry",
			description:
				"Captivated and inspired by the ingenuity and artistry of our extraordinary fashion designer",
			social: [
				{ url: "#", icon: "icon-socials icon-facebook" },
				{ url: "#", icon: "icon-socials icon-twitter" },
				{ url: "#", icon: "icon-socials icon-instagram" },
				{ url: "#", icon: "icon-socials icon-linkedin" },
			],
		},
		{
			avatar: "/assets/images/page/about/1/team-6.png",
			title: "Marketing",
			name: "Jacob Jones",
			description:
				"Captivated and inspired by the ingenuity and artistry of our extraordinary fashion designer",
			social: [
				{ url: "#", icon: "icon-socials icon-facebook" },
				{ url: "#", icon: "icon-socials icon-twitter" },
				{ url: "#", icon: "icon-socials icon-instagram" },
				{ url: "#", icon: "icon-socials icon-linkedin" },
			],
		},
		{
			avatar: "/assets/images/page/about/1/team-7.png",
			title: "Marketing",
			name: "Courtney Henry",
			description:
				"Captivated and inspired by the ingenuity and artistry of our extraordinary fashion designer",
			social: [
				{ url: "#", icon: "icon-socials icon-facebook" },
				{ url: "#", icon: "icon-socials icon-twitter" },
				{ url: "#", icon: "icon-socials icon-instagram" },
				{ url: "#", icon: "icon-socials icon-linkedin" },
			],
		},
		{
			avatar: "/assets/images/page/about/1/team-8.png",
			title: "Marketing",
			name: "Jacob Jones",
			description:
				"Captivated and inspired by the ingenuity and artistry of our extraordinary fashion designer",
			social: [
				{ url: "#", icon: "icon-socials icon-facebook" },
				{ url: "#", icon: "icon-socials icon-twitter" },
				{ url: "#", icon: "icon-socials icon-instagram" },
				{ url: "#", icon: "icon-socials icon-linkedin" },
			],
		},
	];
}
