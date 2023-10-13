interface Comment {
	id: number;
	userImage: string;
	userName: string;
	content: string;
	date: string;
	link: string;
}

export const firstUserComments: Comment[] = [
	{
		id: 1,
		userImage: "/assets/images/page/single-product/author-2.png",
		userName: "Sienna",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt?",
		date: "December 4, 2022 at 3:12 pm",
		link: "#",
	},
	{
		id: 2,
		userImage: "/assets/images/page/single-product/author-3.png",
		userName: "Brenna",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt?",
		date: "December 4, 2022 at 3:12 pm",
		link: "#",
	},
	{
		id: 3,
		userImage: "/assets/images/page/single-product/author-4.png",
		userName: "Gemma",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt?",
		date: "December 4, 2022 at 3:12 pm",
		link: "#",
	},
];

export const secondUserComments: Comment[] = [
	{
		id: 1,
		userImage: "/assets/images/page/blog/single/user-1.png",
		userName: "Robert Fox",
		content:
			"From trend-spotting to outfit ideas, these blogs provide a wealth of valuable information to help readers navigate the ever-evolving world of fashion with confidence",
		date: "August 25, 2022",
		link: "#",
	},
	{
		id: 2,
		userImage: "/assets/images/page/blog/single/user-2.png",
		userName: "Jenny Wilson",
		content:
			"These blogs provide a wealth of valuable information to help readers navigate the ever-evolving world of fashion with confidence",
		date: "August 25, 2022",
		link: "#",
	},
	{
		id: 3,
		userImage: "/assets/images/page/blog/single/user-3.png",
		userName: "Eleanor Pena",
		content:
			"From trend-spotting to outfit ideas, these blogs provide a wealth of valuable information to help readers navigate the ever-evolving world of fashion with confidence",
		date: "August 25, 2022",
		link: "#",
	},
];
