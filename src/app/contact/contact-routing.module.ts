import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactComponent } from "./contact.component";
import { ContactBoxComponent } from "../shared/components/contact-box/contact-box.component";

const routes: Routes = [
	{
		path: "",
		children: [
			{
				path: "page-contact",
				component: ContactComponent,
			},
		],
	},
];

@NgModule({
	imports: [CommonModule, RouterModule.forChild(routes)],
	declarations: [ContactComponent,ContactBoxComponent],
	exports: [RouterModule],
})
export class ContactRoutingModule {}
