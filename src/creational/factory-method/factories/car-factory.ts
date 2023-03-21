import { Car } from "../vehicles/cars";
import { Vehicle } from "../vehicles/vehicle";
import { VehicleFactory } from "./vahicle-factory";

export class CarFactory extends VehicleFactory {
    getVehicle(vehicleName: string): Vehicle {
        return new Car(vehicleName)
    }
}