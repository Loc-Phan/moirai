import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from "./shared/components/header/header.component";
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomeRoutingModule } from "./home/home-routing.module";
import { AboutRoutingModule } from './about/about-routing.module';
import { FaqRoutingModule } from './faqs/faqs-routing.module';
import { PricingRoutingModule } from "./pricing/pricing-routing.module";
import { ServiceRoutingModule } from './service/service-routing.module';
import { CareerRoutingModule } from './career/career-routing.module';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { BlogRoutingModule } from './blog/blog-routing.module';
import { ShopRoutingModule } from './shop/shop-routing.module';
import { ContactRoutingModule } from './contact/contact-routing.module';
import { BackToTopModule } from './shared/components/back-to-top/back-to-top.module';

@NgModule({
	declarations: [AppComponent, HeaderComponent, FooterComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HomeRoutingModule,
		AboutRoutingModule,
		FaqRoutingModule,
		PricingRoutingModule,
		ServiceRoutingModule,
		CareerRoutingModule,
		AuthRoutingModule,
		BlogRoutingModule,
		ShopRoutingModule,
		ContactRoutingModule,
		BackToTopModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
