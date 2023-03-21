import { MainDishBuilder } from './classes/main-dish-builder'
import { VeganDishBuilder } from './classes/vegan-dish-builder'
const prato = new MainDishBuilder().makeMeal().makeBeverage()

console.log('Itens no prato', prato.getMeal())
console.log('Valor total', prato.getPrice())

const pratoVegano = new VeganDishBuilder().makeMeal()
console.log('Itens no prato vegano', pratoVegano.getMeal())
console.log('Valor total vegano', pratoVegano.getPrice())