import { MealCompositeProtocol } from "../interfaces/meal-composite-protocol";

export abstract class AbstractMeal implements MealCompositeProtocol {
    constructor(private name: string, private price: number) { }

    getPrice(): number {

        if (!this.price) throw new Error("Method not implemented.");

        return this.price
    }

}