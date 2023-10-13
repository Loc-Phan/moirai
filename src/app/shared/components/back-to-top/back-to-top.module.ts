import { CommonModule } from "@angular/common";
import { BackToTopComponent } from "./back-to-top.component";
import { NgModule } from "@angular/core";

@NgModule({
	imports: [CommonModule],
	declarations: [BackToTopComponent],
	exports: [BackToTopComponent],
})
export class BackToTopModule {}
