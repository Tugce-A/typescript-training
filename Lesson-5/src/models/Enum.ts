// Enum to define possible directions a car can take
export enum Direction {
  STRAIGHT = 'straight', // Moving forward
  LEFT = 'left',         // Turning left
  RIGHT = 'right',       // Turning right
}

// Enum to define different statuses of a car
export enum CarStatus {
  STOPPED = 'stopped',                    // The car is not moving
  MOVING = 'moving',                      // The car is in motion
  AVODING_OBSTACLE = 'avoiding_obstacle', // The car is maneuvering to avoid an obstacle
}
