import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CheckoutComponent } from "./checkout.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
	{
		path: "checkout",
		component: CheckoutComponent,
	},
];

@NgModule({
	imports: [CommonModule, RouterModule.forChild(routes)],
	declarations: [CheckoutComponent],
	exports: [CheckoutComponent],
})
export class CheckoutModule {}
