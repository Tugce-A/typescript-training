import { IEngine } from '../interfaces/IEngine';
import { Car } from '../models/Car';

// Class representing a car engine
export class Engine implements IEngine {
  private car: Car; // Reference to the car that the engine controls

  constructor(car: Car) {
    this.car = car;
  }

  // Method to start the engine and accelerate the car
  start(): void {
    this.car.accelerate(10); // Increase speed by 10 km/h when starting
    console.log('🔑 Engine started');
  }

  // Method to stop the engine and stop the car
  stop(): void {
    this.car.brake(); // Call the correct 'brake' method
    console.log('🛑 Engine stopped');
  }
}
