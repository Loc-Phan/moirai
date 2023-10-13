import { Component, Input } from "@angular/core";

@Component({
	selector: "logo-slider-component",
	templateUrl: "./logo-slider.component.html",
})
export class LogoSliderComponent {
	@Input() title!: string;
	data = [
		"/assets/images/slider/logo/dg.svg",
		"/assets/images/slider/logo/givenchy.svg",
		"/assets/images/slider/logo/prada.svg",
		"/assets/images/slider/logo/ysl.svg",
		"/assets/images/slider/logo/versace.svg",
		"/assets/images/slider/logo/burberry.svg",
	];
}

