import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BlogsComponent } from "./blogs.component";
import { RouterModule } from "@angular/router";

@NgModule({
	imports: [CommonModule, RouterModule],
	declarations: [BlogsComponent],
	exports: [BlogsComponent],
})
export class BlogsModule {}
