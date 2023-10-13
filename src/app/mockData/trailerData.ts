interface TrailerTag {
	id: number;
	linkTag: string;
	title: string;
}

interface TrailerContent {
	id: number;
	title: string;
	description: string;
	thumbUrl: string;
	bgColor: string;
	link: string;
}

export interface TrailerData {
	tag: TrailerTag[];
	content: TrailerContent[];
}

export const trailerData: TrailerData = {
	tag: [
		{
			id: 1,
			linkTag: "/#tab-1",
			title: "New product",
		},
		{
			id: 2,
			linkTag: "/#tab-2",
			title: "Special",
		},
		{
			id: 3,
			linkTag: "/#tab-3",
			title: "Women",
		},
		{
			id: 4,
			linkTag: "/#tab-4",
			title: "Men",
		},
		{
			id: 5,
			linkTag: "/#tab-5",
			title: "Kids",
		},
		{
			id: 6,
			linkTag: "/#tab-6",
			title: "Accessories",
		},
	],
	content: [
		{
			id: 1,
			title: "New product",
			description:
				"Embrace sustainable fashion with our new line of clothing made from ethically sourced organic cotton and recycled materials, ensuring both style and environmental consciousness go hand in hand.",
			thumbUrl: "/assets/images/page/homepage1/img-product-1.png",
			bgColor: "bg-2",
			link: "/service/page-service-1",
		},
		{
			id: 2,
			title: "Design Studios That Everyone Should Know",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
			thumbUrl: "/assets/images/page/homepage1/img-1-2.jpg",
			bgColor: "bg-1",
			link: "/service/page-service-1",
		},
		{
			id: 3,
			title: "We can blend colors multiple ways",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
			thumbUrl: "/assets/images/page/homepage1/img-1-3.jpg",
			bgColor: "bg-3",
			link: "/service/page-service-1",
		},
		{
			id: 4,
			title: "Choose The Best Plan That's For You",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
			thumbUrl: "/assets/images/page/homepage1/img-1-4.jpg",
			bgColor: "bg-4",
			link: "/service/page-service-1",
		},
		{
			id: 5,
			title: "Subscribe our newsletter to get gift",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
			thumbUrl: "/assets/images/page/homepage1/img-1-5.jpg",
			bgColor: "bg-5",
			link: "/service/page-service-1",
		},
		{
			id: 6,
			title: "Ready to get started? Create an Account",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
			thumbUrl: "/assets/images/page/homepage1/img-1-6.jpg",
			bgColor: "bg-6",
			link: "/service/page-service-1",
		},
	],
};
