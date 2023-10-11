import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { SecondHomeComponent } from "./second-home/second-home.component";
import { ThirdAboutComponent } from "../about/third-about/third-about.component";
import { FourthHomeComponent } from "./fourth-home/fourth-home.component";
import { FifthHomeComponent } from "./fifth-home/fifth-home.component";
import { SixthHomeComponent } from "./sixth-home/sixth-home.component";
import { SeventhHomeComponent } from "./seventh-home/seventh-home.component";
import { EighthHomeComponent } from "./eighth-home/eighth-home.component";

const routes: Routes = [
	{
		path: "",
		children: [
			{
				path: "",
				component: HomeComponent,
			},
			{
				path: "homepage/index-2",
				component: SecondHomeComponent,
			},
			{
				path: "homepage/index-3",
				component: ThirdAboutComponent,
			},
			{
				path: "homepage/index-4",
				component: FourthHomeComponent,
			},
			{
				path: "homepage/index-5",
				component: FifthHomeComponent,
			},
			{
				path: "homepage/index-6",
				component: SixthHomeComponent,
			},
			{
				path: "homepage/index-7",
				component: SeventhHomeComponent,
			},
			{
				path: "homepage/index-8",
				component: EighthHomeComponent,
			},
		],
	},
];

@NgModule({
	imports: [CommonModule, RouterModule.forChild(routes)],
	declarations: [HomeComponent],
  exports: [RouterModule],
  providers: []
})
export class HomeRoutingModule {}
