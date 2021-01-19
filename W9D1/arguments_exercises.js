// function add() {
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }
//     return sum;
// }

function add(...args) {
    return args.reduce((acc, el) => {
        return acc + el;
    })
}

console.log(add(1, 2, 3, 4, 5))



