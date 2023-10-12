import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AboutUsComponent } from "./about-us.component";

@NgModule({
  imports: [CommonModule],
  declarations: [AboutUsComponent],
  exports: [AboutUsComponent]
})
export class AboutUsModule {}
