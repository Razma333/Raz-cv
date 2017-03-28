import { Component, OnInit, trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'bomb',
    templateUrl: '../app/effects/bomb/bomb.component.html',
    styleUrls: ['../app/effects/bomb/bomb.less'],
    animations: [
        trigger('bombShow', [
            state('active', style({
                background: 'rgba(0, 0, 0, 0.8)'
            })),
            transition('active => void', animate('1s linear',
                style({
                    background: 'rgba(255, 255, 255, 0.6)'
                })))
        ]),
        trigger('closeLogosBomb', [
            state('close', style({
                transform: 'scale(0.2)'
            })),
            transition('close => void', animate('0.5s linear',
                style({
                    transform: 'scale(0)'
                })))
        ]),
        trigger('rowShow', [
            state('active', style({
                transform: 'translate(-50%, -50%) scale(1)'
            })),
            transition('void => active', animate('2s ease-in-out', keyframes([
                style({ transform: 'translate(-50%, -50%) scale(1)', offset: 0 }),
                style({ transform: 'translate(-50%, -50%) scale(1)', offset: 0.25 }),
                style({ transform: 'translate(-50%, -50%) scale(1.3)', offset: 0.5 }),
                style({ transform: 'translate(-50%, -50%) scale(1)', offset: 1 }),
            ])))
        ])
    ]
})

export class BombComponent implements OnInit {

    public show: boolean = true;
    public bombFinish = false;
    public activeBomb: string = 'active';
    public activeRow: string = 'inactive';
    public closeLogosBomb: string = 'active';

    // making timers
    timerInit(timeDelay: number, tickInterval: number): Observable<number> {
        let timer = Observable.timer(timeDelay, tickInterval);
        return timer;
    }

    // animations handler
    animationStarter(timeDelay: number, tickInterval: number): void {
        let timer = this.timerInit(timeDelay, tickInterval);
        let timerSubscribe = timer.subscribe((time) => {
            if (time == 5) {
                this.bombFinish = true;
                this.closeLogosBomb = 'close';
                this.activeRow = 'active';
            }
            else if (time == 10) {
                this.show = false;
                this.activeBomb = 'close';
                timerSubscribe.unsubscribe();
            }
        });
    }
    ngOnInit() {
        this.animationStarter(0, 1000);
    }
}