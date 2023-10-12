import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SignInComponent } from "./sign-in/sign-in.compoent";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";
import { SignUpComponent } from "./sign-up/sign-up.compoent";

const routes: Routes = [
	{
		path: "auth",
		children: [
			{
				path: "page-login",
				component: SignInComponent,
			},
			{
				path: "page-reset",
				component: ResetPasswordComponent,
			},
			{
				path: "page-signup",
				component: SignUpComponent,
			},
		],
	},
];

@NgModule({
	imports: [CommonModule, RouterModule.forChild(routes)],
	declarations: [SignUpComponent, SignInComponent, ResetPasswordComponent],
	exports: [RouterModule],
})
export class AuthRoutingModule {}
