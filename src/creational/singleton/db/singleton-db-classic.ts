interface User {
    name: string
    age: number
}


export class MyDBClassic {
    private static _instance: MyDBClassic | null = null;
    private users: User[] = []

    private constructor() { }

    public static get instance(): MyDBClassic {
        if (MyDBClassic._instance === null) {
            MyDBClassic._instance = new MyDBClassic();
        }

        return MyDBClassic._instance;
    }

    add(user: User): void {
        this.users.push(user);
    }

    remove(index: number): void {
        this.users.splice(index, 1)
    }

    show(): void {
        for (const user of this.users) {
            console.log(user)
        }
    }
}

const myDataBaseClassic = MyDBClassic.instance
myDataBaseClassic.add({ name: 'Victor', age: 28 })
myDataBaseClassic.add({ name: 'Maria', age: 1111 })
myDataBaseClassic.add({ name: 'Vasco', age: 2023 - 1898 })
myDataBaseClassic.remove(1) // deve remover Maria

myDataBaseClassic.show()