import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { NgxSpinner, PRIMARY_SPINNER } from './ngx-spinner.enum';
import * as i0 from "@angular/core";
export class NgxSpinnerService {
    /**
     * Creates an instance of NgxSpinnerService.
     * @memberof NgxSpinnerService
     */
    constructor() {
        /**
         * Spinner observable
         *
         * @memberof NgxSpinnerService
         */
        // private spinnerObservable = new ReplaySubject<NgxSpinner>(1);
        this.spinnerObservable = new BehaviorSubject(null);
    }
    /**
    * Get subscription of desired spinner
    * @memberof NgxSpinnerService
    **/
    getSpinner(name) {
        return this.spinnerObservable.asObservable().pipe(filter((x) => x && x.name === name));
    }
    /**
     * To show spinner
     *
     * @memberof NgxSpinnerService
     */
    show(name = PRIMARY_SPINNER, spinner) {
        return new Promise((resolve, _reject) => {
            setTimeout(() => {
                if (spinner && Object.keys(spinner).length) {
                    spinner['name'] = name;
                    this.spinnerObservable.next(new NgxSpinner(Object.assign(Object.assign({}, spinner), { show: true })));
                    resolve(true);
                }
                else {
                    this.spinnerObservable.next(new NgxSpinner({ name, show: true }));
                    resolve(true);
                }
            }, 10);
        });
    }
    /**
    * To hide spinner
    *
    * @memberof NgxSpinnerService
    */
    hide(name = PRIMARY_SPINNER, debounce = 10) {
        return new Promise((resolve, _reject) => {
            setTimeout(() => {
                this.spinnerObservable.next(new NgxSpinner({ name, show: false }));
                resolve(true);
            }, debounce);
        });
    }
}
NgxSpinnerService.ɵfac = function NgxSpinnerService_Factory(t) { return new (t || NgxSpinnerService)(); };
NgxSpinnerService.ɵprov = i0.ɵɵdefineInjectable({ token: NgxSpinnerService, factory: NgxSpinnerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NgxSpinnerService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXNwaW5uZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1zcGlubmVyL3NyYy9saWIvbmd4LXNwaW5uZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hDLE9BQU8sRUFBRSxVQUFVLEVBQUUsZUFBZSxFQUFXLE1BQU0sb0JBQW9CLENBQUM7O0FBSzFFLE1BQU0sT0FBTyxpQkFBaUI7SUFRNUI7OztPQUdHO0lBQ0g7UUFYQTs7OztXQUlHO1FBQ0gsZ0VBQWdFO1FBQ3hELHNCQUFpQixHQUFHLElBQUksZUFBZSxDQUFhLElBQUksQ0FBQyxDQUFDO0lBS2xELENBQUM7SUFDakI7OztPQUdHO0lBQ0gsVUFBVSxDQUFDLElBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNyRyxDQUFDO0lBQ0Q7Ozs7T0FJRztJQUNILElBQUksQ0FBQyxPQUFlLGVBQWUsRUFBRSxPQUFpQjtRQUNwRCxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxFQUFFO1lBQ3RDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2QsSUFBSSxPQUFPLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUU7b0JBQzFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxVQUFVLGlDQUFNLE9BQU8sS0FBRSxJQUFJLEVBQUUsSUFBSSxJQUFHLENBQUMsQ0FBQztvQkFDeEUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNmO3FCQUFNO29CQUNMLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxVQUFVLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDbEUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNmO1lBQ0gsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ1QsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7Ozs7TUFJRTtJQUNGLElBQUksQ0FBQyxPQUFlLGVBQWUsRUFBRSxXQUFtQixFQUFFO1FBQ3hELE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLEVBQUU7WUFDdEMsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFDZCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksVUFBVSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ25FLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoQixDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDZixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7O2tGQXBEVSxpQkFBaUI7eURBQWpCLGlCQUFpQixXQUFqQixpQkFBaUIsbUJBRmhCLE1BQU07a0RBRVAsaUJBQWlCO2NBSDdCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgTmd4U3Bpbm5lciwgUFJJTUFSWV9TUElOTkVSLCBTcGlubmVyIH0gZnJvbSAnLi9uZ3gtc3Bpbm5lci5lbnVtJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE5neFNwaW5uZXJTZXJ2aWNlIHtcclxuICAvKipcclxuICAgKiBTcGlubmVyIG9ic2VydmFibGVcclxuICAgKlxyXG4gICAqIEBtZW1iZXJvZiBOZ3hTcGlubmVyU2VydmljZVxyXG4gICAqL1xyXG4gIC8vIHByaXZhdGUgc3Bpbm5lck9ic2VydmFibGUgPSBuZXcgUmVwbGF5U3ViamVjdDxOZ3hTcGlubmVyPigxKTtcclxuICBwcml2YXRlIHNwaW5uZXJPYnNlcnZhYmxlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxOZ3hTcGlubmVyPihudWxsKTtcclxuICAvKipcclxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIE5neFNwaW5uZXJTZXJ2aWNlLlxyXG4gICAqIEBtZW1iZXJvZiBOZ3hTcGlubmVyU2VydmljZVxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcbiAgLyoqXHJcbiAgKiBHZXQgc3Vic2NyaXB0aW9uIG9mIGRlc2lyZWQgc3Bpbm5lclxyXG4gICogQG1lbWJlcm9mIE5neFNwaW5uZXJTZXJ2aWNlXHJcbiAgKiovXHJcbiAgZ2V0U3Bpbm5lcihuYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPE5neFNwaW5uZXI+IHtcclxuICAgIHJldHVybiB0aGlzLnNwaW5uZXJPYnNlcnZhYmxlLmFzT2JzZXJ2YWJsZSgpLnBpcGUoZmlsdGVyKCh4OiBOZ3hTcGlubmVyKSA9PiB4ICYmIHgubmFtZSA9PT0gbmFtZSkpO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBUbyBzaG93IHNwaW5uZXJcclxuICAgKlxyXG4gICAqIEBtZW1iZXJvZiBOZ3hTcGlubmVyU2VydmljZVxyXG4gICAqL1xyXG4gIHNob3cobmFtZTogc3RyaW5nID0gUFJJTUFSWV9TUElOTkVSLCBzcGlubmVyPzogU3Bpbm5lcik6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCBfcmVqZWN0KSA9PiB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGlmIChzcGlubmVyICYmIE9iamVjdC5rZXlzKHNwaW5uZXIpLmxlbmd0aCkge1xyXG4gICAgICAgICAgc3Bpbm5lclsnbmFtZSddID0gbmFtZTtcclxuICAgICAgICAgIHRoaXMuc3Bpbm5lck9ic2VydmFibGUubmV4dChuZXcgTmd4U3Bpbm5lcih7IC4uLnNwaW5uZXIsIHNob3c6IHRydWUgfSkpO1xyXG4gICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5zcGlubmVyT2JzZXJ2YWJsZS5uZXh0KG5ldyBOZ3hTcGlubmVyKHsgbmFtZSwgc2hvdzogdHJ1ZSB9KSk7XHJcbiAgICAgICAgICByZXNvbHZlKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgMTApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIFRvIGhpZGUgc3Bpbm5lclxyXG4gICpcclxuICAqIEBtZW1iZXJvZiBOZ3hTcGlubmVyU2VydmljZVxyXG4gICovXHJcbiAgaGlkZShuYW1lOiBzdHJpbmcgPSBQUklNQVJZX1NQSU5ORVIsIGRlYm91bmNlOiBudW1iZXIgPSAxMCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCBfcmVqZWN0KSA9PiB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc3Bpbm5lck9ic2VydmFibGUubmV4dChuZXcgTmd4U3Bpbm5lcih7IG5hbWUsIHNob3c6IGZhbHNlIH0pKTtcclxuICAgICAgICByZXNvbHZlKHRydWUpO1xyXG4gICAgICB9LCBkZWJvdW5jZSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG59Il19