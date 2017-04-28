import { Directive, Input, ElementRef, OnInit, Renderer } from '@angular/core';

@Directive({
    selector: '[arrow-floating-style]'
})

export class ArrowFloatingDirective implements OnInit {
    @Input() containerWidth: string;
    @Input() containerHeight: string;

    constructor(private elementRef: ElementRef, private renderer: Renderer) { }

    ngOnInit(): void {
        this.renderer.setElementStyle(this.elementRef.nativeElement, 'width', this.containerWidth);
        this.renderer.setElementStyle(this.elementRef.nativeElement, 'height', this.containerHeight);
    }

}