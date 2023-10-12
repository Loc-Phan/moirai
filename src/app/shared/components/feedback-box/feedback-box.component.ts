import { Component, Input } from "@angular/core";
import { FeedbackProp } from "../feedback/feedback.component";

@Component({
	selector: "feedback-box-component",
	templateUrl: "./feedback-box.component.html",
})
export class FeedbackBoxComponent {
	@Input() feedbackStyle = "";
	@Input() feedbackData!: FeedbackProp[];
}
