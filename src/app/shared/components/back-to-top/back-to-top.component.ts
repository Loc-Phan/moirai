import { Component, HostListener, Input } from "@angular/core";

@Component({
	selector: "back-to-top-component",
	templateUrl: "back-to-top.component.html",
})
export class BackToTopComponent {
	@Input() styles: string = "";
	hasScrolled: boolean = false;
	@HostListener("window:scroll", ["$event"])
	onScroll() {
		if (window.scrollY > 100 && !this.hasScrolled) {
			this.hasScrolled = true;
		} else if (window.scrollY < 100 && this.hasScrolled) {
			this.hasScrolled = false;
		}
	}
	onActivate() {
		window.scroll({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	}
}
