import { randomCarAlg } from "./main/random-vehicle-alg";
import { randomNumbers } from "./utils/random-numbers";

const customers = ['Victor', 'Ana Julia', 'Kricia', 'Micheli']

for (let i = 0; i < 10; i++) {
    const vehicle = randomCarAlg()
    const name = customers[randomNumbers(customers.length)]

    vehicle.pickUp(name)
    vehicle.stop()

    console.log('---')
}