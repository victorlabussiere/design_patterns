import { Bicycle } from "../vehicles/bicycle";
import { Vehicle } from "../vehicles/vehicle";
import { VehicleFactory } from "./vahicle-factory";

export class BicycleFactory extends VehicleFactory {
    getVehicle(vehicleName: string): Vehicle {
        return new Bicycle(vehicleName)
    }
}