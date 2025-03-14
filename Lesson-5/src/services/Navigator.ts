import { INavigator } from '../interfaces/INavigator';
import { Direction } from '../models/Enum';

// Class representing a navigation system for a vehicle
export class Navigator implements INavigator {
  private destination: string = ''; // Stores the destination

  // Method to set the destination
  setDestination(destination: string): void {
    this.destination = destination;
    console.log(`📍 Destination set to ${destination}`);
  }

  // Method to simulate route calculation
  async calculateRoute(): Promise<Direction[]> {
    console.log('🧭 Calculating route');
    return new Promise((resolve) => {
      setTimeout(() => {
        // Simulated route with predefined directions
        const route = [Direction.STRAIGHT, Direction.LEFT, Direction.RIGHT];
        console.log(`✅ Route calculated: ${route.join(' -> ')}`);
        resolve(route);
      }, 2000); // Simulating a delay of 2 seconds
    });
  }

  // Method to simulate following a calculated route
  async followRoute(route: Direction[]): Promise<void> {
    console.log('🚗 Following route');
    for (const step of route) {
      console.log(`➡️ Turning ${step}`);
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulating a delay between turns
    }
    console.log('🏁 Destination reached');
  }
}
