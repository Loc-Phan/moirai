import { Component } from "@angular/core";
import { PostData } from "src/app/shared/components/posts/posts.component";

export interface Category {
	id: number;
	title: string;
	imageUrl: string;
	detail: string;
	link: string;
}

export interface Product {
	id: number;
	img: string;
	brand: string;
	title: string;
	rating: number;
	oldPrice: number;
	newPrice: number;
}

@Component({
	selector: "first-shop-app",
	templateUrl: "./first-shop.component.html",
})
export class FirstShopComponent {
	categoryList: Category[] = [
		{
			id: 1,
			title: "Man",
			imageUrl: "/assets/images/page/shop1/man.svg",
			detail: "1253 products",
			link: "#",
		},
		{
			id: 2,
			title: "Women",
			imageUrl: "/assets/images/page/shop1/woman.svg",
			detail: "1253 products",
			link: "#",
		},
		{
			id: 3,
			title: "Kids",
			imageUrl: "/assets/images/page/shop1/kids.svg",
			detail: "1253 products",
			link: "#",
		},
		{
			id: 4,
			title: "Accessories",
			imageUrl: "/assets/images/page/shop1/accessories.svg",
			detail: "1253 products",
			link: "#",
		},
		{
			id: 5,
			title: "Bags",
			imageUrl: "/assets/images/page/shop1/bags.svg",
			detail: "1253 products",
			link: "#",
		},
		{
			id: 6,
			title: "Jackets & Coats",
			imageUrl: "/assets/images/page/shop1/jackets.svg",
			detail: "1253 products",
			link: "#",
		},
		{
			id: 7,
			title: "Trending",
			imageUrl: "/assets/images/page/shop1/trending.svg",
			detail: "1253 products",
			link: "#",
		},
		{
			id: 8,
			title: "New",
			imageUrl: "/assets/images/page/shop1/new.svg",
			detail: "1253 products",
			link: "#",
		},
		{
			id: 9,
			title: "Belts",
			imageUrl: "/assets/images/page/shop1/belts.svg",
			detail: "1253 products",
			link: "#",
		},
		{
			id: 10,
			title: "Shoes & Sandals",
			imageUrl: "/assets/images/page/shop1/shoes.svg",
			detail: "1253 products",
			link: "#",
		},
		{
			id: 11,
			title: "Cardigans",
			imageUrl: "/assets/images/page/shop1/cardigans.svg",
			detail: "1253 products",
			link: "#",
		},
		{
			id: 12,
			title: "Others",
			imageUrl: "/assets/images/page/shop1/others.svg",
			detail: "1253 products",
			link: "#",
		},
	];
	data: Product[] = [
		{
			id: 1,
			img: "img-7.png",
			brand: "Fashion",
			title: "Chanel Belts Metal Gold & Black",
			rating: 84,
			newPrice: 2.8,
			oldPrice: 22.51,
		},
		{
			id: 2,
			img: "img-8.png",
			brand: "Fashion",
			title: "Argyle Cotton-blend Top",
			rating: 68,
			newPrice: 2.8,
			oldPrice: 22.51,
		},

		{
			id: 3,
			img: "img-9.png",
			brand: "Fashion",
			title: "Check Panel Cotton Jogging Pants",
			rating: 76,
			newPrice: 2.8,
			oldPrice: 22.51,
		},

		{
			id: 4,
			img: "img-10.png",
			brand: "Fashion",
			title: "Baby Ombré Cotton Dress",
			rating: 125,
			newPrice: 2.8,
			oldPrice: 22.51,
		},

		{
			id: 5,
			img: "img-11.png",
			brand: "Fashion",
			title: "Clover Flip Floral Skirt",
			rating: 84,
			newPrice: 2.8,
			oldPrice: 22.51,
		},

		{
			id: 6,
			img: "img-12.png",
			brand: "Fashion",
			title: "Dioriviera Shorts",
			rating: 68,
			newPrice: 2.8,
			oldPrice: 22.51,
		},

		{
			id: 7,
			img: "img-13.png",
			brand: "Fashion",
			title: "Dioriviera Shorts",
			rating: 76,
			newPrice: 2.8,
			oldPrice: 22.51,
		},

		{
			id: 8,
			img: "img-14.png",
			brand: "Fashion",
			title: "Disney 101 Dalmatians Cotton Jersey Dress",
			rating: 125,
			newPrice: 2.8,
			oldPrice: 22.51,
		},

		{
			id: 9,
			img: "img-15.png",
			brand: "Fashion",
			title: "EKD Cotton Silk Jacquard Sweater",
			rating: 84,
			newPrice: 2.805,
			oldPrice: 22.51,
		},

		{
			id: 10,
			img: "img-16.png",
			brand: "Fashion",
			title: "Givenchy Mini Shorts In Cotton",
			rating: 68,
			newPrice: 2.8,
			oldPrice: 22.51,
		},

		{
			id: 11,
			img: "img-17.png",
			brand: "Fashion",
			title: "Knit Sweater With Button Detail",
			rating: 76,
			newPrice: 2.8,
			oldPrice: 22.51,
		},

		{
			id: 12,
			img: "img-18.png",
			brand: "Fashion",
			title: "Logo Cotton Jersey T-shirt",
			rating: 125,
			newPrice: 2.8,
			oldPrice: 22.51,
		},

		{
			id: 13,
			img: "img-19.png",
			brand: "Fashion",
			title: "Logo Cotton Jersey T-shirt",
			rating: 125,
			newPrice: 2.8,
			oldPrice: 22.51,
		},

		{
			id: 14,
			img: "img-20.png",
			brand: "Fashion",
			title: "Large Dior Book Tote",
			rating: 125,
			newPrice: 2.8,
			oldPrice: 22.51,
		},

		{
			id: 15,
			img: "img-21.png",
			brand: "Fashion",
			title: "Beachview Bucket Hat",
			rating: 125,
			newPrice: 2.8,
			oldPrice: 22.51,
		},

		{
			id: 16,
			img: "img-22.png",
			brand: "Fashion",
			title: "Eternal N°5 Necklace",
			rating: 125,
			newPrice: 2.8,
			oldPrice: 22.51,
		},
	];
	viewedProductList: Product[] = [
		{
			id: 1,
			img: "/assets/images/page/shop1/img-21.png",
			brand: "Fashion",
			title: "Chanel Belts Metal Gold & Black",
			rating: 84,
			oldPrice: 29.8,
			newPrice: 29.8,
		},
		{
			id: 2,
			img: "/assets/images/page/shop1/img-21.png",
			brand: "Fashion",
			title: "Chanel Belts Metal Gold & Black",
			rating: 84,
			oldPrice: 29.8,
			newPrice: 29.8,
		},
		{
			id: 3,
			img: "/assets/images/page/shop1/img-21.png",
			brand: "Fashion",
			title: "Chanel Belts Metal Gold & Black",
			rating: 84,
			oldPrice: 29.8,
			newPrice: 29.8,
		},
		{
			id: 4,
			img: "/assets/images/page/shop1/img-22.png",
			brand: "Fashion",
			title: "Eternal N°5 Necklace",
			rating: 84,
			oldPrice: 29.8,
			newPrice: 29.8,
		},
		{
			id: 5,
			img: "/assets/images/page/shop1/img-20.png",
			brand: "Fashion",
			title: "Large Dior Book Tote",
			rating: 84,
			oldPrice: 29.8,
			newPrice: 29.8,
		},
		{
			id: 6,
			img: "/assets/images/page/shop1/img-11.png",
			brand: "Fashion",
			title: "Clover Flip Floral Skirt",
			rating: 84,
			oldPrice: 29.8,
			newPrice: 29.8,
		},
	];
	postsData: PostData[] = [
		{
			title: "The Hottest Fashion Trends of the Season",
			imageUrl: "/assets/images/page/blog/2/img-news-2.png",
			author: "Jenny Wilson",
			authorAvatar: "/assets/images/page/blog/2/user-1.png",
			date: "August 25, 2022",
			link: "/blog-single",
			bgColor: "",
			decription:
				"Dressing Nice: Dressing Nice Every Day doesn't have to be a daunting task or reserved for special occasions. With a few simple tips and a little planning, you can elevate your daily style and feel confident in your appearance",
		},
		{
			title: "Dressing Nice: Unleashing Your Style Now",
			imageUrl: "/assets/images/page/blog/2/img-news-3.png",
			author: "Jenny Wilson",
			authorAvatar: "/assets/images/page/blog/2/user-2.png",
			date: "August 25, 2022",
			link: "/blog-single",
			bgColor: "color-bg-2",
			decription:
				"In this blog post, we'll explore some timeless tips and tricks to help you dress nice effortlessly, regardless of the occasion",
		},
		{
			title: "The Art of Dressing",
			imageUrl: "/assets/images/page/homepage1/img-news-11.png",
			author: "Jane Cooper",
			authorAvatar: "/assets/images/page/blog/2/user-3.png",
			date: "August 25, 2022",
			link: "/blog-single",
			bgColor: "color-bg-10",
			decription:
				"Fashion is an ever-evolving phenomenon that shapes our sense of style and self-expression. As we delve into the latest fashion trends, we embark on a captivating journey through the world of apparel.",
		},
		{
			title: "The Art of Dressing",
			imageUrl: "/assets/images/page/homepage1/img-news-11.png",
			author: "Wade Warren",
			authorAvatar: "/assets/images/page/blog/2/user-4.png",
			date: "August 25, 2022",
			link: "/blog-single",
			bgColor: "color-bg-2",
			decription:
				"Fashion is an ever-evolving phenomenon that shapes our sense of style and self-expression. As we delve into the latest fashion trends, we embark on a captivating journey through the world of apparel.",
		},
		{
			title: "Dressing Nice: A Guide to Effortless Style",
			imageUrl: "/assets/images/page/homepage1/img-news-11.png",
			author: "Jenny Wilson",
			authorAvatar: "/assets/images/page/blog/2/user-5.png",
			date: "August 25, 2022",
			link: "/blog-single",
			bgColor: "color-bg-5",
			decription:
				"Fashion is an ever-evolving phenomenon that shapes our sense of style and self-expression. As we delve into the latest fashion trends, we embark on a captivating journey through the world of apparel.",
		},
		{
			title: "Dressing Nice: Unleashing Your Style Now",
			imageUrl: "/assets/images/page/homepage1/img-news-11.png",
			author: "Jenny Wilson",
			authorAvatar: "/assets/images/page/blog/2/user-6.png",
			date: "August 25, 2022",
			link: "/blog-single",
			bgColor: "color-bg-9",
			decription:
				"Fashion is an ever-evolving phenomenon that shapes our sense of style and self-expression. As we delve into the latest fashion trends, we embark on a captivating journey through the world of apparel.",
		},
	];
}
