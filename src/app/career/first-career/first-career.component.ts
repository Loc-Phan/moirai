import { Component } from "@angular/core";
import { AboutUsData } from "src/app/shared/components/about-us/about-us.component";
import { BlogData } from "src/app/shared/components/blogs/blogs.component";
import { FeedbackProp } from "src/app/shared/components/feedback/feedback.component";

@Component({
	selector: "first-career-app",
	templateUrl: "./first-career.component.html",
})
export class FirstCareerComponent {
	open = false;
	fBData: FeedbackProp[] = [
		{
			username: "John Cooper",
			avatarUrl: "user-img-1",
			job: "Sales Associate",
			title: "So good experience",
			content:
				"The dynamic and collaborative environment at Moirai Fashion makes each day enjoyable. The team spirit and support among colleagues create a positive atmosphere for interacting with customers and showcasing our stylish collections.",
		},
		{
			username: "Olivia Parker",
			avatarUrl: "user-img-2",
			job: "Customer Service Staff",
			title: "Highly Recommend",
			content:
				"At Moirai Fashion, the customer-centric and empowering environment values exceptional service. The supportive atmosphere and focus on professional growth make it a rewarding place to work.",
		},
		{
			username: "Ethan Reynolds",
			avatarUrl: "user-img-3",
			job: "Marketing Staff",
			title: "Wonderful",
			content:
				"Moirai Fashion's marketing department provides a vibrant and dynamic environment. Open communication, growth opportunities, and a recognition of contributions foster creativity and make it a place where ideas thrive",
		},
		{
			username: "Sophia Mitchell",
			avatarUrl: "user-img-4",
			job: "E-commerce Staff",
			title: "I can’t believe in",
			content:
				"I'm proud to be part of Moirai Fashion's innovative and fast-paced e-commerce team. The autonomy to implement creative ideas and strategies, along with a collaborative and passionate atmosphere, make it an exciting workplace.",
		},
	];
	aboutUsContent = {
		bigTitle:
			"Join a Workplace <br class='d-lg-block d-none' />That Gives You More",
		description: `Unlock your potential with abundant learning opportunities, flexible <br class='d-lg-block d-none' />work
  hours, and comprehensive benefits that prioritize the well- <br class='d-lg-block d-none' /> being and satisfaction of
  our valued employees.`,
	};
	aboutUsData: AboutUsData[] = [
		{
			title: "Learning",
			content:
				"Fuel your growth with diverse programs, workshops, and mentorship to reach new career heights.",
			image: "/assets/images/page/homepage1/icon_book.svg",
			bgImage: "bg-learning",
			bgColor: "bg-5",
		},
		{
			title: "Flexible",
			content:
				"Achieve work-life balance through our adaptable schedules, accommodating personal commitments for optimal effectiveness.",
			image: "/assets/images/page/homepage1/icons-clock.svg",
			bgImage: "bg-flexible",
			bgColor: "bg-9",
		},
		{
			title: "Overall Care",
			content:
				"Prioritize your well-being with an all-encompassing package, including medical insurance, wellness programs, retirement plans,...",
			image: "/assets/images/page/homepage1/icons-health.svg",
			bgImage: "bg-comprehendsive",
			bgColor: "bg-2",
		},
	];
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
}
