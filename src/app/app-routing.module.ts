import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "./shared/components/not-found/not-found.compoent";

const routes: Routes = [{ path: "404", component: NotFoundComponent }];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" }),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
