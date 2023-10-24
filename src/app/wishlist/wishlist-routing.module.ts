import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { WishListComponent } from "./wishlist.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
	{
		path: "wishlist",
		component: WishListComponent,
	},
];

@NgModule({
	imports: [CommonModule, RouterModule.forChild(routes)],
	declarations: [WishListComponent],
	exports: [WishListComponent],
})
export class WishListModule {}
