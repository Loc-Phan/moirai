import { Component, Input, OnInit } from "@angular/core";

interface ContentData {
	id: number;
	title: string;
	text?: string;
}

export interface BestSellerData {
	tag?: string;
	title: string;
	description: string;
	content: ContentData[];
	images: string[];
}

@Component({
	selector: "best-seller-component",
	templateUrl: "best-seller.component.html",
})
export class BestsellerComponent implements OnInit {
	@Input() imagesRight = false;
	@Input() smallImgTop = false;
	@Input() bestSellerStyle = "";
	@Input() bestSellerData!: BestSellerData;
	style = {
		tagColor: "",
		title: "",
		letterIcon: "icon-leaf",
		dashLine: "line-bd-green",
	};
	ngOnInit() {
		switch (this.bestSellerStyle) {
			case "style-1":
				this.style = {
					tagColor: "bg-9 color-blue",
					title: "",
					letterIcon: "icon-leaf",
					dashLine: "line-bd-green",
				};
				break;
			case "style-2":
				this.style = {
					tagColor: "bg-red color-white",
					title: "color-red text-center",
					letterIcon: "icon-leaf-red",
					dashLine: "line-bd-red",
				};
				break;
			case "style-3":
				this.style = {
					tagColor: "bg-2",
					title: "text-center",
					letterIcon: "icon-leaf",
					dashLine: "line-bd-green",
				};
				break;
			case "style-4":
				this.style = {
					tagColor: "bg-6 color-green-900",
					title: "text-center",
					letterIcon: "icon-leaf",
					dashLine: "line-bd-green",
				};
				break;
			case "style-5":
				this.style = {
					tagColor: "bg-9 color-blue",
					title: "",
					letterIcon: "icon-leaf-blue",
					dashLine: "line-bd-green",
				};
				break;
			default:
				this.style = {
					tagColor: "",
					title: "",
					letterIcon: "icon-leaf",
					dashLine: "line-bd-green",
				};
		}
	}
}
