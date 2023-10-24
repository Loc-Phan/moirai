import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header.component";
import { RouterModule } from "@angular/router";
import { CartIconComponent } from "./cart-icon/cart-icon.component";
import { HeartIconComponent } from "./heart-icon/heart-icon.component";
@NgModule({
	imports: [CommonModule, RouterModule],
	declarations: [HeaderComponent, CartIconComponent, HeartIconComponent],
	exports: [HeaderComponent],
})
export class HeaderModule {}
