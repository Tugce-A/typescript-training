// Class representing an obstacle on the road
export class Obstacle {
  constructor(public type: string, public distance: number) {}

  // Method to get obstacle information as a formatted string
  getInfo(): string {
    return `🚧 Obstacle: ${this.type} is ${this.distance} meters away`;
  }
}
