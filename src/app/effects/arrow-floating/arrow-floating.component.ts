import { Component, Input, OnInit } from '@angular/core';
import { DirectionsEnum } from '../../../app/models/enums/direction.enum';
import { EnumsConverter } from '../../../app/models/enums/enums-converter/enums-converter';

@Component({
    selector: 'arrow-floating',
    templateUrl: '../../app/effects/arrow-floating/arrow-floating.component.html',
    styleUrls: ['../../app/effects/arrow-floating/arrow-floating.less'],
    providers: [EnumsConverter]
})

export class ArrowFloatingComponent implements OnInit {

    constructor(private enumsConverter: EnumsConverter) { }

    defaultDirection: DirectionsEnum = DirectionsEnum['up'];
    animationDirection: string;

    @Input() floatingDirection: string;
    @Input() imageUrl: string;
    @Input() message: string;
    @Input() moveText: boolean;
    @Input() spaceWidth: string;
    @Input() spaceHeight: string;

    ngOnInit(): void {
        this.arrowDirectionChecker(this.floatingDirection);
        this.animationDirectionSetter(this.floatingDirection);
    }

    // checks if direction is available
    arrowDirectionChecker(direction: string) {
        let good = this.enumsConverter.directionToNumber(this.floatingDirection);
        if (!good)
            throw new TypeError('not a vaild direction');
    }

    // checks if direction from Input or default
    animationDirectionSetter(inputDirection: string) {
        this.animationDirection = inputDirection ? inputDirection : this.enumsConverter.numberToDirectionString(this.defaultDirection);
    }
}