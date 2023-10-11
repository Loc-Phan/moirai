import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FirstCareerComponent } from "./first-career/first-career.component";
import { DetailCareerComponent } from "./detail-career/detail-career.component";

const routes: Routes = [
	{
		path: "career",
		children: [
			{
				path: "page-career",
				component: FirstCareerComponent,
			},
			{
				path: "page-career-detail",
				component: DetailCareerComponent,
			},
		],
	},
];

@NgModule({
	imports: [CommonModule, RouterModule.forChild(routes)],
	declarations: [],
	exports: [RouterModule],
})
export class CareerRoutingModule {}
