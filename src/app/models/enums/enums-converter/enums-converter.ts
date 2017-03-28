import { DirectionsEnum } from '../direction.enum';

export class EnumsConverter {

    directionToNumber(direction: string): number {
        if (direction) {
            return DirectionsEnum[direction];
        }
    }
    numberToDirectionString(directionNumber: number): string {
        return DirectionsEnum[directionNumber];
    }
}