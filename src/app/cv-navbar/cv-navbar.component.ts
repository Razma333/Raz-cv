import { Component, Inject, HostListener, OnInit } from '@angular/core';
import { WindowRef } from '../../app/shared/window';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
    selector: 'cv-navbar',
    templateUrl: '../app/cv-navbar/cv-navbar.component.html',
    styleUrls: ['../app/cv-navbar/cv-navbar.component.less'],
    providers: [WindowRef]
})

export class CvNavbarComponent implements OnInit {

    public navIsFixed: boolean = false;

    constructor(private windowRef: WindowRef, @Inject(DOCUMENT) private document: Document) {
        console.log('window object', windowRef.nativeWindow);
    }

    ngOnInit() { }

    @HostListener("window:scroll", [])
    onWindowScroll() {
        let offset = this.document.body.scrollTop;
        if (offset > 100) {
            this.navIsFixed = true;
        }
        else if (this.navIsFixed && offset < 10){
            this.navIsFixed = false;
        }
    }
}