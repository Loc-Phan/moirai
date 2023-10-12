import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PriceTableComponent } from "./price-table.component";

@NgModule({
  imports: [CommonModule],
  declarations: [PriceTableComponent],
  exports: [PriceTableComponent],
})
export class PriceTableModule {}
