import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactComponent } from "./contact.component";
import { ContactBoxModule } from "../shared/components/contact-box/contact-box.module";

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
	imports: [CommonModule, ContactBoxModule, RouterModule.forChild(routes)],
	declarations: [ContactComponent],
	exports: [RouterModule],
})
export class ContactRoutingModule {}
