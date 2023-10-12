import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PostsComponent } from "./posts.component";
import { RouterModule } from "@angular/router";

@NgModule({
	imports: [CommonModule, RouterModule],
	declarations: [PostsComponent],
	exports: [PostsComponent],
})
export class PostsModule {}
