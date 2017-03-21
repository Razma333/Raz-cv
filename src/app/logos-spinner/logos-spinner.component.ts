import { Component, OnInit, trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'logos-spinner',
    templateUrl: '../app/logos-spinner/logos-spinner.component.html',
    styleUrls: ['../app/logos-spinner/logos-spinner.less'],
    animations: [
        trigger('spinnerShow', [
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

export class LogosSpinnerComponent implements OnInit {

    public show: boolean = true;
    public active: string = 'active';

    timerInit(): void {
        let timer = Observable.timer(500000, 0);
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