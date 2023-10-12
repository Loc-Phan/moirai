import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FeedbackBoxComponent } from "./feedback-box.component";

@NgModule({
  imports: [CommonModule],
  declarations: [FeedbackBoxComponent],
  exports: [FeedbackBoxComponent]
})
export class FeedbackBoxModule {}
