Array.prototype.uniq = function() {
    let uniq_array = [];
    for (let i = 0; i < this.length; i++) {
        if (!uniq_array.includes(this[i])) {
            uniq_array.push(this[i]);
        }
        
    }
    return uniq_array;
}

Array.prototype.twoSum = function() {
    let outputArr = [];
    for (let i = 0; i < this.length - 1; i++) {
        for (let j = i+1; j < this.length; j++) {
            if (this[i] === -this[j]) {
                outputArr.push([i, j]);
            }
        }
    }
    return (outputArr);
}

// console.log([1, -1, -2, 2, 3, 4, 5].twoSum())

Array.prototype.transpose = function() {
    let num_rows = this.length;
    let num_columns = this[0].length;
    let outputArr = new Array(num_columns)
    for (let i = 0; i < num_columns; i++) {
        outputArr[i] = new Array(num_rows);
    }

    for (let i = 0; i < num_rows; i++) {
        for (let j = 0; j < num_columns; j++) {
            outputArr[j][i] = this[i][j];
        }
    }

    return outputArr;
}
// let arr = [[1, 2, 3, 4], [4, 5, 6, 7]];
// console.log(arr.transpose());

