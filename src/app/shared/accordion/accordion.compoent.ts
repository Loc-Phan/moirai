import { Component, Input } from "@angular/core";

export interface AccordionData {
	title: string;
	content?: string;
	listContent?: string[];
}

@Component({
	selector: "accordion-component",
	templateUrl: "./accordion.component.html",
})
export class AccordionComponent {
	@Input() accordionData: AccordionData[] = [];
	accordionStyle = "";
  isActive: number | undefined = undefined;
	handleToggle(i:number) {}
}
