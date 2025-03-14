import { Direction, CarStatus } from './Enum';

// Type defining the return structure for vehicle status
type VehicleStatusReturn = {
  speed: number;
  direction: Direction;
  status: CarStatus;
};

// Abstract class representing a generic vehicle
export abstract class Vehicle {
  protected speed: number; // Current speed of the vehicle
  protected direction: Direction; // Current direction of the vehicle
  protected status: CarStatus; // Current status of the vehicle

  constructor() {
    this.speed = 0; // Initialize speed to 0
    this.direction = Direction.STRAIGHT; // Default direction is straight
    this.status = CarStatus.STOPPED; // Default status is stopped
  }

  // Method to increase speed and set status to moving
  accelerate(amount: number): void {
    this.speed += amount;
    this.status = CarStatus.MOVING;
    console.log(`🚗 Speed increased to: ${this.speed} km/h`);
  }

  // Method to stop the vehicle
  brake(): void {
    this.speed = 0;
    this.status = CarStatus.STOPPED;
    console.log(`🚗 Vehicle has stopped`);
  }

  // Method to change the vehicle's direction
  turn(direction: Direction): void {
    this.direction = direction;
    console.log(`🚗 Vehicle is turning ${direction}`);
  }

  // Method to get the current status of the vehicle
  getStatus(): VehicleStatusReturn {
    return {
      speed: this.speed,
      direction: this.direction,
      status: this.status,
    };
  }
}
