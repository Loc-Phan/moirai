import { Component } from "@angular/core";
import { BlogData } from "src/app/shared/blogs/blogs.component";
import { FeedbackProp } from "src/app/shared/feedback/feedback.component";

@Component({
	selector: "third-about-app",
	templateUrl: "./third-about.component.html",
})
export class ThirdAboutComponent {
	blogsData: BlogData[] = [
		{
			tag: "Lastest trend",
			title: "Unveiling the Latest Fashion Trends of this Season",
			imageUrl: "/assets/images/page/homepage1/img-news-1.png",
			link: "/blog-single",
			bgColor: "color-bg-9",
		},
		{
			tag: "How to Dress Nice & Look Stylisht",
			title: "Mastering the Art of Looking Cool Style",
			imageUrl: "/assets/images/page/homepage1/img-news-2.png",
			link: "/blog-single",
			bgColor: "color-bg-6",
		},
		{
			tag: "How to Dress Nice Every Day",
			title: "Dressing Nice: Dressing Nice Every Day",
			imageUrl: "/assets/images/page/homepage1/img-news-3.png",
			link: "/blog-single",
			bgColor: "color-bg-4",
		},
		{
			tag: "Dress Nice",
			title: "Dressing Nice: Dressing Nice Every Day",
			imageUrl: "/assets/images/page/homepage1/img-news-10.png",
			link: "/blog-single",
			bgColor: "color-bg-9",
		},
		{
			tag: "Dress Nice",
			title: "Dressing Nice and Looking Cool: Your Style Guide",
			imageUrl: "/assets/images/page/homepage1/img-news-11.png",
			link: "/blog-single",
			bgColor: "color-bg-6",
		},
		{
			tag: "Dress Nice",
			title: "Dressing Nice: A Guide to Effortless Style",
			imageUrl: "/assets/images/page/homepage1/img-news-12.png",
			link: "/blog-single",
			bgColor: "color-bg-4",
		},
	];
	bestSellerData = {
		tag: "Fashion as unique as you are",
		title: "Best Seller",
		description:
			"Welcome to our Best Sellers collection, where you can discover our most sought-after fashion pieces that are loved by our customers.",
		images: ["/assets/images/page/about/3/img-4.png"],
		content: [
			{
				id: 1,
				title: "Stay on-trend",
				text: "Explore our Best Sellers collection for the latest fashion trends that are making waves in the industry.",
			},
			{
				id: 2,
				title: "Customer Favorites",
				text: "Discover our most-loved fashion pieces, as recommended by our valued customers.",
			},
			{
				id: 3,
				title: "Uncompromising Quality",
				text: "Shop from our Best Sellers collection, where fashion meets exceptional craftsmanship and high-quality materials.",
			},
			{
				id: 4,
				title: "Versatile Style",
				text: "Find versatile fashion pieces that effortlessly elevate your wardrobe for any occasion.",
			},
		],
	};
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
