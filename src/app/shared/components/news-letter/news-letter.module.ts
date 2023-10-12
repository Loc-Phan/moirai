import { NgModule } from "@angular/core";
import { NewsLetterComponent } from "./news-letter.component";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [CommonModule],
  declarations: [NewsLetterComponent],
  exports: [NewsLetterComponent]
})
export class NewsLetterModule {}
