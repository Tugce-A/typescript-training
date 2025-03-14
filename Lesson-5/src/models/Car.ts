import { Vehicle } from "./Vehicle";

export class Car extends Vehicle {
    constructor() {
        super();
        console.log('🚗 A new car is crated');
    }
}