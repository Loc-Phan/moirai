import { Component } from "@angular/core";
import { FeedbackProp } from "src/app/shared/components/feedback/feedback.component";
import { PricingData } from "src/app/shared/components/price-table/price-table.component";

interface FAQsData {
	id: number;
	question: string;
	answer: string;
}

@Component({
	selector: "first-pricing-app",
	templateUrl: "./first-pricing.component.html",
})
export class FirstPricingComponent {
	pricingData: PricingData[] = [
		{
			title: "Standard",
			decription:
				"All the basics for businesses that are just getting started.",
			features: [
				"Unlimited updates",
				"Custom permissions",
				"Custom designs & features",
			],
			pricingMonth: 35,
			pricingYear: 50,
		},
		{
			title: "Essentials",
			decription:
				"All the basics for businesses that are just getting started.",
			features: [
				"Unlimited updates",
				"Custom permissions",
				"Custom instructors",
			],
			pricingMonth: 35,
			pricingYear: 50,
		},
		{
			title: "Premium",
			decription: "Avvanced features for pros who need more customization.",
			features: [
				"Unlimited updates",
				"Custom designs & features",
				"Custom permissions",
				"Custom instructors",
			],
			pricingMonth: 35,
			pricingYear: 50,
		},
		{
			title: "Unlimited",
			decription: "Avvanced features for pros who need more customization.",
			features: [
				"Unlimited updates & Support",
				"Custom designs & features",
				"Custom permissions",
				"Custom instructors",
			],
			pricingMonth: 35,
			pricingYear: 50,
		},
	];
	faqsInfo: FAQsData[] = [
		{
			id: 1,
			question: "How do I determine my correct size?",
			answer:
				"Please refer to our size guide, which provides detailed measurements and instructions on how to measure yourself accurately for the best fit.",
		},
		{
			id: 2,
			question: "What if I receive a damaged or defective item?",
			answer:
				"If you receive a damaged or defective item, please contact our customer support immediately. We will gladly assist you in resolving the issue by providing a replacement.",
		},
		{
			id: 3,
			question: "What is your return policy?",
			answer:
				"We offer a hassle-free return policy. If you are not satisfied with your purchase, you can return the item within 30 days of delivery for a full refund or exchange. Please ensure the item is unused and in its original packaging with all tags attached.",
		},
		{
			id: 4,
			question: "Do you offer international shipping?",
			answer:
				"Yes, we offer international shipping to select countries. Shipping fees and delivery times may vary based on the destination.",
		},
		{
			id: 5,
			question: "How long does shipping take?",
			answer:
				"Shipping times may vary depending on your location and the shipping method chosen.",
		},
		{
			id: 6,
			question: "Can I modify or cancel my order after it has been placed?",
			answer:
				"We aim to process orders quickly. If you need to modify or cancel your order, please reach out to our customer support as soon as possible.",
		},
		{
			id: 7,
			question: "Can I track my order?",
			answer:
				"Yes, once your order is shipped, you will receive a confirmation email with a tracking number.",
		},
		{
			id: 8,
			question: "Are the colors of the products accurate in the photos?",
			answer:
				"We strive to provide accurate representations of our products. However, please note that colors may appear slightly different due to variations in lighting, monitor settings, and individual perception.",
		},
		{
			id: 9,
			question: "What payment methods do you accept?",
			answer:
				"We accept major credit cards, including Visa, Mastercard, and American Express. Additionally, we offer payment options through popular digital wallets like Apple Pay and Google Pay for convenient and secure transactions.",
		},
		{
			id: 10,
			question: "How can I contact your customer support?",
			answer:
				"We are here to assist you with any inquiries, concerns, or assistance you may need.",
		},
	];
	fBData: FeedbackProp[] = [
		{
			username: "Wade Warren",
			avatarUrl: "user-img-1",
			job: "Student",
			title: "So good experience",
			content:
				"Wow, those jeans look amazing on you! The fit is perfect and they really accentuate your figure.",
		},
		{
			username: "Brooklyn Simmons",
			avatarUrl: "user-img-2",
			job: "Designer",
			title: "Highly Recommend",
			content:
				"You have a great sense of style. The way you’ve put together that outfit is so fashionable and trendy.",
		},
		{
			username: "John Wilson",
			avatarUrl: "user-img-3",
			job: "Content Creator",
			title: "Wonderful",
			content:
				"I love the color of that shirt on you. It brings out your eyes and complements your skin tone beautifully.",
		},
		{
			username: "Albert Flores",
			avatarUrl: "user-img-4",
			job: "Software Engineer",
			title: "I can’t believe in",
			content:
				"You always have such impeccable taste in clothes. I’m constantly impressed by how effortlessly stylish you look.",
		},
	];
}
