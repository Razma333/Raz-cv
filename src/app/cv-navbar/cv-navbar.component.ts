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
                width: '10%'
            })),
            transition('void => open', animate('1s linear', keyframes([
                style({ width: '0%', offset: 0 }),
                style({ width: '3%', offset: .25 }),
                style({ width: '6%', offset: .5 }),
                style({ width: '9%', offset: .75 }),
                style({ width: '10%', offset: 1 }),
            ]))),
            transition('open => void', animate('1s linear', style({
                width: '0%'
            })))
        ]),
        trigger('leftNavopen', [
            state('open', style({
                left: '8%'
            })),
            state('close', style({
                left: '-2%'
            })),
            transition('close => open', animate('1s linear', keyframes([
                style({ left: '-2%', offset: 0 }),
                style({ left: '1%', offset: .25 }),
                style({ left: '4%', offset: .5 }),
                style({ left: '7%', offset: .75 }),
                style({ left: '8%', offset: 1 }),
            ]))),
            transition('open => close', animate('1s linear', style({
                left: '-2%'
            }))),
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

    openNavbar(): void{
        if(this.openNavLeft == 'open'){
            this.openNavLeft = 'close';
        }
        else{
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