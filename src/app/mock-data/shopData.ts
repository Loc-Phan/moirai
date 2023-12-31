export interface Product {
	id: number;
	img: string;
	brand: string;
	title: string;
	rating: number;
	oldPrice: number;
	newPrice: number;
	qty: number;
}

export interface WishProduct extends Product {
	wish: boolean;
}

export interface Category {
	id: number;
	title: string;
	imageUrl: string;
	detail: string;
	link: string;
}

export const secondData: WishProduct[] = [
	{
		id: 1,
		img: "img-7.png",
		brand: "Fashion",
		title: "Chanel Belts Metal Gold & Black",
		rating: 84,
		newPrice: 22.51,
		oldPrice: 28,
		wish: false,
		qty: 1,
	},
	{
		id: 2,
		img: "img-8.png",
		brand: "Fashion",
		title: "Argyle Cotton-blend Top",
		rating: 68,
		newPrice: 22.51,
		oldPrice: 28,
		wish: false,
		qty: 1,
	},

	{
		id: 3,
		img: "img-9.png",
		brand: "Fashion",
		title: "Check Panel Cotton Jogging Pants",
		rating: 76,
		newPrice: 22.51,
		oldPrice: 28,
		wish: false,
		qty: 1,
	},

	{
		id: 4,
		img: "img-10.png",
		brand: "Fashion",
		title: "Baby Ombré Cotton Dress",
		rating: 125,
		newPrice: 22.51,
		oldPrice: 28,
		wish: false,
		qty: 1,
	},

	{
		id: 5,
		img: "img-11.png",
		brand: "Fashion",
		title: "Clover Flip Floral Skirt",
		rating: 84,
		newPrice: 22.51,
		oldPrice: 28,
		wish: false,
		qty: 1,
	},

	{
		id: 6,
		img: "img-12.png",
		brand: "Fashion",
		title: "Dioriviera Shorts",
		rating: 68,
		newPrice: 22.51,
		oldPrice: 28,
		wish: false,
		qty: 1,
	},

	{
		id: 7,
		img: "img-13.png",
		brand: "Fashion",
		title: "Dioriviera Shorts",
		rating: 76,
		newPrice: 22.51,
		oldPrice: 28,
		wish: false,
		qty: 1,
	},

	{
		id: 8,
		img: "img-14.png",
		brand: "Fashion",
		title: "Disney 101 Dalmatians Cotton Jersey Dress",
		rating: 125,
		newPrice: 22.51,
		oldPrice: 28,
		wish: false,
		qty: 1,
	},

	{
		id: 9,
		img: "img-15.png",
		brand: "Fashion",
		title: "EKD Cotton Silk Jacquard Sweater",
		rating: 84,
		newPrice: 22.5105,
		oldPrice: 28,
		wish: false,
		qty: 1,
	},

	{
		id: 10,
		img: "img-16.png",
		brand: "Fashion",
		title: "Givenchy Mini Shorts In Cotton",
		rating: 68,
		newPrice: 22.51,
		oldPrice: 28,
		wish: false,
		qty: 1,
	},

	{
		id: 11,
		img: "img-17.png",
		brand: "Fashion",
		title: "Knit Sweater With Button Detail",
		rating: 76,
		newPrice: 22.51,
		oldPrice: 28,
		wish: false,
		qty: 1,
	},

	{
		id: 12,
		img: "img-18.png",
		brand: "Fashion",
		title: "Logo Cotton Jersey T-shirt",
		rating: 125,
		newPrice: 22.51,
		oldPrice: 28,
		wish: false,
		qty: 1,
	},

	{
		id: 13,
		img: "img-19.png",
		brand: "Fashion",
		title: "Logo Cotton Jersey T-shirt",
		rating: 125,
		newPrice: 22.51,
		oldPrice: 28,
		wish: false,
		qty: 1,
	},

	{
		id: 14,
		img: "img-20.png",
		brand: "Fashion",
		title: "Large Dior Book Tote",
		rating: 125,
		newPrice: 22.51,
		oldPrice: 28,
		wish: false,
		qty: 1,
	},

	{
		id: 15,
		img: "img-21.png",
		brand: "Fashion",
		title: "Beachview Bucket Hat",
		rating: 125,
		newPrice: 22.51,
		oldPrice: 28,
		wish: false,
		qty: 1,
	},

	{
		id: 16,
		img: "img-22.png",
		brand: "Fashion",
		title: "Eternal N°5 Necklace",
		rating: 125,
		newPrice: 22.51,
		oldPrice: 28,
		wish: false,
		qty: 1,
	},
];

export const popularProducts: Product[] = [
	{
		id: 1,
		img: "/assets/images/page/shop1/img-18.png",
		brand: "Fashion",
		title: "Logo Cotton Jersey T-shirt",
		rating: 84,
		newPrice: 22.51,
		oldPrice: 28,
		qty: 1,
	},
	{
		id: 2,
		img: "/assets/images/page/shop1/img-14.png",
		brand: "Fashion",
		title: " Jersey Dress",
		rating: 84,
		newPrice: 22.51,
		oldPrice: 28,
		qty: 1,
	},
	{
		id: 3,
		img: "/assets/images/page/shop1/img-16.png",
		brand: "Fashion",
		title: "Givenchy Mini Shorts",
		rating: 84,
		newPrice: 22.51,
		oldPrice: 28,
		qty: 1,
	},
	{
		id: 4,
		img: "/assets/images/page/shop1/img-17.png",
		brand: "Fashion",
		title: "Knit Sweater",
		rating: 84,
		newPrice: 22.51,
		oldPrice: 28,
		qty: 1,
	},
	{
		id: 5,
		img: "/assets/images/page/shop1/img-15.png",
		brand: "Fashion",
		title: "EKD Cotton",
		rating: 84,
		newPrice: 22.51,
		oldPrice: 28,
		qty: 1,
	},
	{
		id: 6,
		img: "/assets/images/page/shop1/img-21.png",
		brand: "Fashion",
		title: "Bucket Hat",
		rating: 84,
		newPrice: 22.51,
		oldPrice: 28,
		qty: 1,
	},
	{
		id: 7,
		img: "/assets/images/page/shop1/img-7.png",
		brand: "Fashion",
		title: "Chanel Belts",
		rating: 84,
		newPrice: 22.51,
		oldPrice: 28,
		qty: 1,
	},
];

export const categoryList: Category[] = [
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

export const viewedProductList: Product[] = [
	{
		id: 1,
		img: "/assets/images/page/shop1/img-21.png",
		brand: "Fashion",
		title: "Chanel Belts Metal Gold & Black",
		rating: 84,
		oldPrice: 28,
		qty: 1,
		newPrice: 22.51,
	},
	{
		id: 2,
		img: "/assets/images/page/shop1/img-21.png",
		brand: "Fashion",
		title: "Chanel Belts Metal Gold & Black",
		rating: 84,
		oldPrice: 28,
		qty: 1,
		newPrice: 22.51,
	},
	{
		id: 3,
		img: "/assets/images/page/shop1/img-21.png",
		brand: "Fashion",
		title: "Chanel Belts Metal Gold & Black",
		rating: 84,
		oldPrice: 28,
		qty: 1,
		newPrice: 22.51,
	},
	{
		id: 4,
		img: "/assets/images/page/shop1/img-22.png",
		brand: "Fashion",
		title: "Eternal N°5 Necklace",
		rating: 84,
		oldPrice: 28,
		qty: 1,
		newPrice: 22.51,
	},
	{
		id: 5,
		img: "/assets/images/page/shop1/img-20.png",
		brand: "Fashion",
		title: "Large Dior Book Tote",
		rating: 84,
		oldPrice: 28,
		qty: 1,
		newPrice: 22.51,
	},
	{
		id: 6,
		img: "/assets/images/page/shop1/img-11.png",
		brand: "Fashion",
		title: "Clover Flip Floral Skirt",
		rating: 84,
		oldPrice: 28,
		qty: 1,
		newPrice: 22.51,
	},
];
