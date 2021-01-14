Array.prototype.myEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
}

let arr = [1, 2, 3];
arr.myEach((num => {
    console.log(num * 2);
}));
// console.log(arr.myEach((num) => {
//     num * 2
// }))

Array.prototype.myMap = function(callback) {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
        newArr.push(callback(this[i]));
    }

    return newArr;
}

let doubler = function (num) {
    return num * 2; 
}

console.log(arr.myMap(doubler))

Array.prototype.myReduce = function(callback, acc) {
    let myArray = this;
    if (acc === undefined) {
        acc = myArray[0];
        myArray = myArray.slice(1);
    }

    myArray.myEach(ele => acc = callback(acc, ele));
    return acc;
}

// console.log(arr.myReduce(a, b) => a + b );

console.log([1, 2, 3].myReduce(function (acc, el) {
    return acc + el;
}));

console.log([1, 2, 3].myReduce(function (acc, el) {
    return acc + el;
}, 25));
