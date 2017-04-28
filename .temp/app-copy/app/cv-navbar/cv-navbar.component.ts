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
                top: '0'
            })),
            transition('void => open', animate('1s linear', keyframes([
                style({ top: '-70px', offset: 0 }),
                style({ top: '0', offset: 1 })
            ]))),
            transition('open => void', animate('1s linear', style({
                top: '-70px'
            })))
        ]),
        trigger('fixedNavOpen', [
            state('open', style({
                top: '70px'
            })),
            state('close', style({
                top: '0px'
            })),
            transition('close => open', animate('1s linear', style({
                top: '70px'
            }))),
            transition('open => close', animate('1s linear', style({
                top: '0px'
            }))),
            transition('void => close', animate('1s linear', keyframes([
                style({ top: '-70px', offset: 0 }),
                style({ top: '0px', offset: 1 })
            ]))),
            transition('close => void', animate('1s linear', keyframes([
                style({ top: '0px', offset: 0 }),
                style({ top: '-70px', offset: 1 })
            ])))
        ])
    ],
    providers: [WindowRef]
})

export class CvNavbarComponent implements OnInit {

    public btnForNavbar: boolean = false;
    public openNavLeft: string = 'close';
    public isMobile: boolean;
    private window: WindowRef;

    constructor(private windowRef: WindowRef, @Inject(DOCUMENT) private document: Document) {
        this.window = windowRef;
    }

    ngOnInit() {
        this.isMobile = this.window.isMobile;
    }

    openNavbar(): void {
        if (this.openNavLeft == 'open') {
            this.openNavLeft = 'close';
        }
        else {
            this.openNavLeft = 'open';
        }
    }

    @HostListener("window:scroll", [])
    onWindowScroll() {
        let offset = this.document.body.scrollTop;
        if (offset > 100 && !this.isMobile) {
            if (!this.btnForNavbar) {
                this.btnForNavbar = true;
            }
        }
        else if (this.btnForNavbar && offset < 100) {
            if (this.btnForNavbar) {
                this.btnForNavbar = false;
                this.openNavLeft = 'close';
            }
        }
    }
}