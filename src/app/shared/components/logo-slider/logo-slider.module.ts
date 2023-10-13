import { CommonModule } from "@angular/common";
import { LogoSliderComponent } from "./logo-slider.component";
import { NgModule } from "@angular/core";

@NgModule({
  imports: [CommonModule],
  declarations: [LogoSliderComponent],
  exports: [LogoSliderComponent]
})
export class LogoSliderModule {}
