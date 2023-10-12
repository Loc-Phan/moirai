import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DownloadBannerComponent } from "./download-banner.component";

@NgModule({
  imports: [CommonModule],
  declarations: [DownloadBannerComponent],
  exports: [DownloadBannerComponent]
})
export class DownloadBannerModule {}
