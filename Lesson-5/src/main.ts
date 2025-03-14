import { Car } from './models/Car';
import { Direction } from './models/Enum';
import { Obstacle } from './models/Obstacle';
import { Sensor } from './models/Sensor';
import { Engine } from './services/Engine';
import { Navigator } from './services/Navigator';

// Create instances of car, engine, sensor, and navigator
const car = new Car();
const engine = new Engine(car);
const sensor = new Sensor<Obstacle>();
const navigator = new Navigator();

// Start the engine
engine.start();

// Set the destination for navigation
navigator.setDestination('City Center');

(async () => {
  // Calculate the route to the destination
  const route = await navigator.calculateRoute();

  // Detect obstacles on the way
  const obstacles = sensor.detectObstacles();
  if (obstacles.length > 0) {
    obstacles.forEach((obstacle) => console.log(obstacle.getInfo()));
    console.log(`🚨 Obstacles Detected! Changing route`);

    // Modify the route to avoid obstacles
    route.unshift(Direction.RIGHT);
  }

  // Follow the calculated (or adjusted) route
  await navigator.followRoute(route);

  // Stop the engine after reaching the destination
  engine.stop();
})();
