import { Component, inject } from "@angular/core";
import { CartService } from "../services/cart.service";
import { Product } from "../mock-data/shopData";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
	selector: "checkout-component",
	templateUrl: "checkout.component.html",
	styleUrls: ["./checkout.component.scss"],
})
export class CheckoutComponent {
	productList!: Product[];
	totalPrice = 0;
	hasSubmitted = false;
	cartService = inject(CartService);
	billingForm: FormGroup;
	constructor(
		private fb: FormBuilder,
		private router: Router,
		private toastr: ToastrService
	) {
		this.billingForm = this.fb.group({
			firstName: ["", Validators.required],
			lastName: ["", Validators.required],
			address: ["", Validators.required],
			phone: ["", Validators.required],
			email: ["", Validators.compose([Validators.required, Validators.email])],
			company: [""],
			note: [""],
		});
	}
	ngOnInit() {
		this.cartService.cart$.subscribe((cart) => {
			this.productList = cart;
			this.totalPrice = cart.reduce(
				(accumulator, currentValue) =>
					accumulator + currentValue.qty * currentValue.newPrice,
				0
			);
		});
	}
	get f() {
		return this.billingForm.controls;
	}
	onSubmit() {
		this.hasSubmitted = true;
		if (this.billingForm.valid) {
			this.cartService.updateCart([]);
			this.toastr.success("Place order successfully!");
			this.router.navigate(["/"]);
			this.hasSubmitted = false;
			return;
		}
	}
}
