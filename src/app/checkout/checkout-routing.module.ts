import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CheckoutComponent } from "./checkout.component";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

const routes: Routes = [
	{
		path: "checkout",
		component: CheckoutComponent,
	},
];

@NgModule({
	imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes)],
	declarations: [CheckoutComponent],
	exports: [CheckoutComponent],
})
export class CheckoutModule {}
