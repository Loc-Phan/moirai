import { Component } from "@angular/core";
import { AboutUsData, secondAboutData } from "src/app/mock-data/aboutUsData";
import { BlogData, sixthBlogsData } from "src/app/mock-data/blogData";
import { FeedbackProp, feedbackData } from "src/app/mock-data/feedbackData";

@Component({
	selector: "first-career-app",
	templateUrl: "./career.component.html",
})
export class CareerComponent {
	open = false;
	fBData: FeedbackProp[] = feedbackData;
	aboutUsContent = {
		bigTitle:
			"Join a Workplace <br class='d-lg-block d-none' />That Gives You More",
		description: `Unlock your potential with abundant learning opportunities, flexible <br class='d-lg-block d-none' />work
  hours, and comprehensive benefits that prioritize the well- <br class='d-lg-block d-none' /> being and satisfaction of
  our valued employees.`,
	};
	aboutUsData: AboutUsData[] = secondAboutData;
	blogsData: BlogData[] = sixthBlogsData;
}
