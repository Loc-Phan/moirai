import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { HeaderModule } from './shared/components/header/header.module';
import { WishListModule } from './wishlist/wishlist-routing.module';
import { CartModule } from './cart/cart-routing.module';
import { CheckoutModule } from './checkout/checkout-routing.module';

@NgModule({
	declarations: [AppComponent, FooterComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HeaderModule,
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
		WishListModule,
		CartModule,
		CheckoutModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
