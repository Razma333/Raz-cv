import { Component, Inject, HostListener, OnInit, trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { WindowRef } from '../../app/shared/window';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
    selector: 'cv-navbar',
    templateUrl: '../app/cv-navbar/cv-navbar.component.html',
    styleUrls: ['../app/cv-navbar/cv-navbar.component.less'],
    animations: [
        trigger('navbarLeft', [
            state('open', style({
                height: '100%'
            })),
            transition('void => open', animate('1s linear', keyframes([
                style({height: '0%', offset: 0}),
                style({height: '25%', offset: .25}),
                style({height: '50%', offset: .5}),
                style({height: '75%', offset: .75}),
                style({height: '100%', offset: 1}),
            ]))),
            transition('open => void', animate('1s linear', style({
                height: '10%'
            })))
        ])
    ],
    providers: [WindowRef]
})

export class CvNavbarComponent implements OnInit {

    public navbarfixed: boolean = false;
    public openNavLeft: string = 'close';
    public isMobile: boolean;
    private window: WindowRef;

    constructor(private windowRef: WindowRef, @Inject(DOCUMENT) private document: Document) {
        this.window = windowRef;
    }

    ngOnInit() {
        this.isMobile = this.window.isMobile;
     }

    @HostListener("window:scroll", [])
    onWindowScroll() {
        let offset = this.document.body.scrollTop;
        if (offset > 100 && !this.isMobile) {
            if (!this.navbarfixed) {
                this.navbarfixed = true;
                this.openNavLeft = 'open';
            }
        }
        else if (this.navbarfixed && offset < 100) {
            if (this.navbarfixed){
                this.navbarfixed = false;
                this.openNavLeft = 'close';
            }
        }
    }
}