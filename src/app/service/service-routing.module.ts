import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FirstServiceComponent } from "./first-service/first-service.component";
import { SecondServiceComponent } from "./second-service/second-service.component";

const routes: Routes = [
	{
		path: "service",
		children: [
			{
				path: "page-service-1",
				component: FirstServiceComponent,
			},
			{
				path: "page-service-2",
				component: SecondServiceComponent,
			},
		],
	},
];

@NgModule({
	imports: [CommonModule, RouterModule.forChild(routes)],
	declarations: [],
	exports: [RouterModule],
})
export class ServiceRoutingModule {}
