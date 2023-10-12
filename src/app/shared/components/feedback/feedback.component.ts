import { Component, Input } from "@angular/core";

export interface FeedbackProp {
	username: string;
	avatarUrl: string;
	job: string;
	title: string;
	content: string;
}

@Component({
	selector: "feedback-component",
	templateUrl: "./feedback.component.html",
})
export class FeedbackComponent {
	@Input() tag!: string;
	@Input() title!: string;
	@Input() description!: string;
	@Input() feedbackStyle!: string;
	@Input() feedbackData!: FeedbackProp[];
}
