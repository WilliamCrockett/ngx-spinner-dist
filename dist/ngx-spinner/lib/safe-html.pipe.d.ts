import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class SafeHtmlPipe implements PipeTransform {
    private _sanitizer;
    constructor(_sanitizer: DomSanitizer);
    transform(v: string): SafeHtml;
    static ɵfac: i0.ɵɵFactoryDef<SafeHtmlPipe, never>;
    static ɵpipe: i0.ɵɵPipeDefWithMeta<SafeHtmlPipe, "safeHtml">;
}
