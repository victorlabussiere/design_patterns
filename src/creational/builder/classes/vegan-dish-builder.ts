import { MealBuilderProtocol } from "../interfaces/meal-builder-protocol";
import { MealBox } from "./meal-box";
import { Beans, Rice } from "./meals";

export class VeganDishBuilder implements MealBuilderProtocol {
    makeBeverage(): this {
        throw new Error("Method not implemented.");
    }
    makeDessert(): this {
        throw new Error("Method not implemented.");
    }
    private _meal: MealBox = new MealBox()

    reset(): this {
        this._meal = new MealBox()
        return this
    }

    makeMeal(): this {
        const rice = new Rice('Arroz', 5)
        const beans = new Beans('Feijão', 5)
        this._meal.add(rice, beans)
        return this
    }

    getMeal(): MealBox {
        return this._meal
    }

    getPrice(): number {
        return this._meal.getPrice()
    }

}