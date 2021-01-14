function range(start, end) {
    if (start === end) {
        return [];
    }

    let prev = range(start, end - 1);
    prev.push(end-1);
    return prev;
}

// console.log(range(1, 5))

function sumRec(arr) {
    if (arr.length === 0) {
        return 0;
    }

    let lastElement = arr[arr.length - 1];
    let subArr = arr.slice(0, arr.length - 1);

    return sumRec(subArr) + lastElement;
}

console.log(sumRec([1, 2, 3]))

function exponent(base, exp) {
    if (exp === 0) {
        return 1;
    }

    if (exp < 0) {
        return 1 / (exponent(base, -exp));
    }

    return base * exponent(base, exp-1);
}

console.log(exponent(2, 5));
console.log(exponent(2, -5));

function fibonacci(n) {
    if (n === 1) {
        return [1];
    }

    if (n === 2) {
        return [1, 1];
    }

    let fibLast = fibonacci(n-1);
    let last = fibLast[fibLast.length - 1] + fibLast[fibLast.length - 2];

    fibLast.push(last);
    return fibLast
}

console.log(fibonacci(5))




