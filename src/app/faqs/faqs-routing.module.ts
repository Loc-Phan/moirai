import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FirstFaqComponent } from "./first-faq/first-faq.component";
import { SecondFaqComponent } from "./second-faq/second-faq.component";

const routes: Routes = [
	{
		path: "faqs",
		children: [
			{
				path: "page-faqs-1",
				component: FirstFaqComponent,
			},
			{
				path: "page-faqs-2",
				component: SecondFaqComponent,
			},
		],
	},
];

@NgModule({
	imports: [CommonModule, RouterModule.forChild(routes)],
	declarations: [],
	exports: [RouterModule],
})
export class FaqRoutingModule {}
