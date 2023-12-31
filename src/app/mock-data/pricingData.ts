export interface PricingData {
	title: string;
	decription: string;
	features: string[];
	pricing?: number;
	pricingMonth?: number;
	pricingYear?: number;
}

export const pricingData: PricingData[] = [
	{
		title: "Standard",
		decription: "All the basics for businesses that are just getting started.",
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
		decription: "All the basics for businesses that are just getting started.",
		features: ["Unlimited updates", "Custom permissions", "Custom instructors"],
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

export const secondPricingData: PricingData[] = [
	{
		title: "Hemming Trousers",
		decription:
			"Make your perfect trousers the ideal length with our hemming service.",
		features: [
			"Precise Hemming",
			"Customizable Fit",
			"Length Adjustment",
			"Professional Finishing",
		],
		pricing: 10,
	},
	{
		title: "Replacing Buttons",
		decription:
			"Refresh and rejuvenate your clothing with our button replacement service.",
		features: [
			"Use Suitable Button Styles",
			"Improved Functionality",
			"Quality Selection",
			"Attention to Detail",
		],
		pricing: 5,
	},
	{
		title: "Replacing Zipper",
		decription: "Enhance the your clothing with zipper replacement service.",
		features: [
			"Renewed Functionality",
			"Extended Garment Lifespan",
			"Customizable Options",
			"Attention to Detail",
		],
		pricing: 5,
	},
	{
		title: "Waist cinching",
		decription: "Transform your clothing with our waist cinching service.",
		features: [
			"Flattering Silhouette",
			"Tailored Adjustments",
			"Personalized Style",
			"Versatile Options",
		],
		pricing: 10,
	},
];
