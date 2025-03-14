import { Direction } from '../models/Enum';

export interface INavigator {
  setDestination(destination: string): void;
  calculateRoute(): Promise<Direction[]>;
  followRoute(route: Direction[]): Promise<void>;
}
