import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CartComponent } from "./cart.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
	{
		path: "cart",
		component: CartComponent,
	},
];

@NgModule({
	imports: [CommonModule, RouterModule.forChild(routes)],
	declarations: [CartComponent],
	exports: [CartComponent],
})
export class CartModule {}
