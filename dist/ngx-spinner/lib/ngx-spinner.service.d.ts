import { Observable } from 'rxjs';
import { NgxSpinner, Spinner } from './ngx-spinner.enum';
import * as i0 from "@angular/core";
export declare class NgxSpinnerService {
    /**
     * Spinner observable
     *
     * @memberof NgxSpinnerService
     */
    private spinnerObservable;
    /**
     * Creates an instance of NgxSpinnerService.
     * @memberof NgxSpinnerService
     */
    constructor();
    /**
    * Get subscription of desired spinner
    * @memberof NgxSpinnerService
    **/
    getSpinner(name: string): Observable<NgxSpinner>;
    /**
     * To show spinner
     *
     * @memberof NgxSpinnerService
     */
    show(name?: string, spinner?: Spinner): Promise<boolean>;
    /**
    * To hide spinner
    *
    * @memberof NgxSpinnerService
    */
    hide(name?: string, debounce?: number): Promise<boolean>;
    static ɵfac: i0.ɵɵFactoryDef<NgxSpinnerService, never>;
    static ɵprov: i0.ɵɵInjectableDef<NgxSpinnerService>;
}
