import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
	private headerStyleObs$: BehaviorSubject<string> = new BehaviorSubject("");

	getHeaderStyleObs(): Observable<string> {
		return this.headerStyleObs$.asObservable();
	}

	setHeaderStyleObs(style: string) {
		this.headerStyleObs$.next(style);
	}
}
