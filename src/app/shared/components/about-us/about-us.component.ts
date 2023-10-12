import { Component, Input } from "@angular/core";

export interface AboutUsData {
	title: string;
	content: string;
	image: string;
	bgImage: string;
	bgColor: string;
}

@Component({
	selector: "about-us-component",
	templateUrl: "./about-us.component.html",
})
export class AboutUsComponent {
	@Input() aboutUsData!: AboutUsData[];
	@Input() bigTitle = "";
	@Input() description = "";
}
