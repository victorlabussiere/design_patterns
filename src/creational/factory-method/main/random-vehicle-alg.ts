import { CarFactory } from "../factories/car-factory";
import { BicycleFactory } from '../factories/bicycke-factory'
import { Vehicle } from "../vehicles/vehicle";
import { randomNumbers } from "../utils/random-numbers";

export function randomCarAlg(): Vehicle {
    const carFactory = new CarFactory()
    const car1 = carFactory.getVehicle('Fusca')
    const car2 = carFactory.getVehicle('Celta')

    const bike = new BicycleFactory()
    const bike1 = bike.getVehicle('Bicycle')

    const cars = [car1, car2, bike1]

    return cars[randomNumbers(cars.length)]
}