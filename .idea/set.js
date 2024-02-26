let rei = {
    name: "Rei",
    sayHello: () => console.log("Hellaur!"),
    "is cool": true // multiword property (has to be enclosed in quotation marks)
}

let reiObjectTest = () => rei.sayHello();
reiObjectTest();

let sum = (a, c) => a + c;

/*
let sum = (a, b) => {
    let result = a + b;
    return result;
};
*/

// console.log(sum(1, 2));
let specialStringAppend = () => {
    console.log( '1' + 2 ); // '12', string
    console.log( 1 + '2' ); // '12', string
}

const x = '';
const hold = x ?? 'default'

const arr = ['hey', 'hi', 'hello']

//const [,, c] = arr
//const c = arr[2]

specialStringAppend();


//Spread operator

const object1 = {
    first: 'a',
    second: 'b',
    third: 'c'
}

const object2 = {
    third: 'd',
    fouth: 'e',
}

//const full = Object.assign({}, object1, object2)
const full = {...object1, ...object2}

// expressions for local code
let sayHello = (message) =>  'Hey! ' + message;

function sayHello (message) {
    return 'Hey! ' + message;
}

// Take note! Functions can be anonymous

const array = Array(50).fill(1);
//Creates an array of 50 1