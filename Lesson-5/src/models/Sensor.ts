import { Obstacle } from './Obstacle';

// Generic class representing a sensor that detects obstacles
export class Sensor<T extends Obstacle> {
  private detectedObstacles: T[] = []; // List to store detected obstacles

  // Method to simulate obstacle detection
  detectObstacles(): T[] {
    this.detectedObstacles = []; // Reset detected obstacles

    // Randomly detect a rock with a 50% probability
    if (Math.random() > 0.5) {
      this.detectedObstacles.push(
        new Obstacle('Rock', Math.floor(Math.random() * 10) + 1) as T
      );
    }

    // Randomly detect a human with a 20% probability
    if (Math.random() > 0.8) {
      this.detectedObstacles.push(
        new Obstacle('Human', Math.floor(Math.random() * 10) + 1) as T
      );
    }

    return this.detectedObstacles; // Return the list of detected obstacles
  }
}
