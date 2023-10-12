import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TeamComponent } from "./team.component";
import { SwiperModule } from "swiper/angular";
import { RouterModule } from "@angular/router";

@NgModule({
	imports: [CommonModule, RouterModule, SwiperModule],
	declarations: [TeamComponent],
	exports: [TeamComponent],
})
export class TeamModule {}
