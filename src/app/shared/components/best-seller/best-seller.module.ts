import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BestsellerComponent } from "./best-seller.component";

@NgModule({
	imports: [CommonModule],
	declarations: [BestsellerComponent],
	exports: [BestsellerComponent],
})
export class BestSellerModule {}
