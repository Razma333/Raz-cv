import { Component, OnInit, trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'bomb',
    templateUrl: '../app/bomb/bomb.component.html',
    styleUrls: ['../app/bomb/bomb.less'],
    animations: [
        trigger('bombShow', [
            state('active', style({
                background: 'rgba(0, 0, 0, 0.8)'
            })),
            transition('active => void', animate('1s linear',
                style({
                    background: 'rgba(255, 255, 255, 0.6)'
                })))
        ])
    ]
})

export class BombComponent implements OnInit {

    public show: boolean = true;
    public active: string = 'active';

    timerInit(): void {
        let timer = Observable.timer(5000, 0);
        let timerSubscribe = timer.subscribe((time) => {
            this.show = false;
            this.active = 'null';
            timerSubscribe.unsubscribe();
        });
    }
    ngOnInit() {
        this.timerInit();
    }
}