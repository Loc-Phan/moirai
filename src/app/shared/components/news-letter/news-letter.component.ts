import { Component, Input, OnInit } from "@angular/core";

@Component({
	selector: "news-letter-component",
	templateUrl: "news-letter.component.html",
})
export class NewsLetterComponent implements OnInit {
	@Input() newsletterStyle = "";
	styles = {
		tag: "color-gray-500",
		title: "",
		content: "color-gray-500",
		terms: "",
		button: "btn-send",
		bgColor: "bg-2",
		chartImgUrl: "/assets/images/template/chart.png",
	};
	ngOnInit() {
		switch (this.newsletterStyle) {
			case "style-1":
				this.styles = {
					tag: "color-gray-500",
					title: "",
					content: "color-gray-500",
					terms: "",
					button: "btn-send",
					bgColor: "bg-6",
					chartImgUrl: "/assets/images/template/chart.png",
				};
				break;
			case "style-2":
				this.styles = {
					tag: "color-white",
					title: "",
					content: "color-white",
					terms: "text-white hover-black",
					button: "btn-send-red",
					bgColor: "bg-red",
					chartImgUrl: "/assets/images/template/chart-2.png",
				};
				break;
			case "style-3":
				this.styles = {
					tag: "color-white",
					title: "color-white",
					content: "color-white",
					terms: "color-white hover-light-pink",
					button: "btn-send-pink",
					bgColor: "bg-gray-1000",
					chartImgUrl: "/assets/images/template/chart-3.png",
				};
				break;
			case "style-4":
				this.styles = {
					tag: "color-gray-500",
					title: "",
					content: "color-gray-500",
					terms: "color-purple hover-dark-red",
					button: "btn-send-deep-red",
					bgColor: "bg-light-green",
					chartImgUrl: "/assets/images/page/homepage7/chart-2.png",
				};
				break;
			case "style-5":
				this.styles = {
					tag: "color-gray-500",
					title: "",
					content: "color-gray-500",
					terms: "color-blue",
					button: "btn-send-blue",
					bgColor: "bg-2",
					chartImgUrl: "/assets/images/template/chart-4.png",
				};
				break;
			case "style-6":
				this.styles = {
					tag: "color-gray-500",
					title: "",
					content: "color-gray-500",
					terms: "",
					button: "btn-send",
					bgColor: "bg-8",
					chartImgUrl: "/assets/images/template/chart.png",
				};
				break;
			default:
				this.styles = {
					tag: "color-gray-500",
					title: "",
					content: "color-gray-500",
					terms: "",
					button: "btn-send",
					bgColor: "bg-2",
					chartImgUrl: "/assets/images/template/chart.png",
				};
		}
	}
}
