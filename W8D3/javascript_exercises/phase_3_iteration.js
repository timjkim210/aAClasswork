Array.prototype.bubbleSort = function() {

    let sorted = false;

    while (sorted === false) {

        sorted = true;

        for (let i = 0; i < this.length - 1; i++) {
            if (this[i] > this[i+1]) {
                let temp = this[i];
                this[i] = this[i + 1];
                this[i + 1] = temp;
                sorted = false;
            }
        }
    }
    return this;
}

// let arr1 = [3, 1, 6, 2, 3, 8]
// console.log(arr1.bubbleSort())

String.prototype.substrings = function() {
    let output = [];
    for (let i = 0; i < this.length; i++) {
        for (let j = i + 1; j <= this.length; j++) {
            output.push(this.slice(i, j));
        }
    }
    return output;
}

console.log('abcde'.substrings());

