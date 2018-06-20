// interface CanTalk {
//     talk: () => void;
// }

// class Person implements CanTalk {
//     constructor(private name: string, public age: number) {}

//     talk() { console.log('I am talking about Angular.'); }
// }

// const teo = new Person('Teo Nguyen', 10);
// console.log(teo.age);

class Util<T> {
    copy(value: T): T {
        return value;
    }

    duplicate(value: T): T[] {
        return [value, value];
    }
}

const util = new Util<string>();
let u: Util<number>;
