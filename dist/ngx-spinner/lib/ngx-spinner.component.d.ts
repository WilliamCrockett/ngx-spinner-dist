import { OnDestroy, OnInit, OnChanges, SimpleChange, ChangeDetectorRef } from '@angular/core';
import { NgxSpinnerService } from './ngx-spinner.service';
import { Subject } from 'rxjs';
import { Size, NgxSpinner } from './ngx-spinner.enum';
import * as i0 from "@angular/core";
export declare class NgxSpinnerComponent implements OnDestroy, OnInit, OnChanges {
    private spinnerService;
    private changeDetector;
    /**
     * To set backdrop color
     * Only supports RGBA color format
     * @memberof NgxSpinnerComponent
     */
    bdColor: string;
    /**
     * To set spinner size
     *
     * @memberof NgxSpinnerComponent
     */
    size: Size;
    /**
     * To set spinner color(DEFAULTS.SPINNER_COLOR)
     *
     * @memberof NgxSpinnerComponent
     */
    color: string;
    /**
     * To set type of spinner
     *
     * @memberof NgxSpinnerComponent
     */
    type: string;
    /**
     * To toggle fullscreen mode
     *
     * @memberof NgxSpinnerComponent
     */
    fullScreen: boolean;
    /**
     * Spinner name
     *
     * @memberof NgxSpinnerComponent
     */
    name: string;
    /**
     * z-index value
     *
     * @memberof NgxSpinnerComponent
     */
    zIndex: number;
    /**
     * Custom template for spinner/loader
     *
     * @memberof NgxSpinnerComponent
     */
    template: string;
    /**
     * Spinner Object
     *
     * @memberof NgxSpinnerComponent
     */
    spinner: NgxSpinner;
    /**
     * Array for spinner's divs
     *
     * @memberof NgxSpinnerComponent
     */
    divArray: Array<number>;
    /**
     * Counter for div
     *
     * @memberof NgxSpinnerComponent
     *
     */
    divCount: number;
    /**
     * Show spinner
     *
     * @memberof NgxSpinnerComponent
    **/
    show: boolean;
    /**
     * Unsubscribe from spinner's observable
     *
     * @memberof NgxSpinnerComponent
    **/
    ngUnsubscribe: Subject<void>;
    /**
     * Creates an instance of NgxSpinnerComponent.
     *
     * @memberof NgxSpinnerComponent
     */
    constructor(spinnerService: NgxSpinnerService, changeDetector: ChangeDetectorRef);
    /**
     * Initialization method
     *
     * @memberof NgxSpinnerComponent
     */
    ngOnInit(): void;
    /**
     * To set default ngx-spinner options
     *
     * @memberof NgxSpinnerComponent
     */
    setDefaultOptions: () => void;
    /**
     * On changes event for input variables
     *
     * @memberof NgxSpinnerComponent
     */
    ngOnChanges(changes: {
        [propKey: string]: SimpleChange;
    }): void;
    /**
     * To get class for spinner
     *
     * @memberof NgxSpinnerComponent
     */
    getClass(type: string, size: Size): string;
    /**
     * Check if input variables have changed
     *
     * @memberof NgxSpinnerComponent
     */
    onInputChange(): void;
    /**
     * Component destroy event
     *
     * @memberof NgxSpinnerComponent
     */
    ngOnDestroy(): void;
    static ??fac: i0.????FactoryDef<NgxSpinnerComponent, never>;
    static ??cmp: i0.????ComponentDefWithMeta<NgxSpinnerComponent, "ngx-spinner", never, { "bdColor": "bdColor"; "size": "size"; "color": "color"; "type": "type"; "fullScreen": "fullScreen"; "name": "name"; "zIndex": "zIndex"; "template": "template"; }, {}, never, ["*"]>;
}
