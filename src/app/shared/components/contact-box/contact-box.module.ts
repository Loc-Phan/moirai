import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ContactBoxComponent } from "./contact-box.component";

@NgModule({
  imports: [CommonModule],
  declarations: [ContactBoxComponent],
  exports: [ContactBoxComponent]
})
export class ContactBoxModule {}
