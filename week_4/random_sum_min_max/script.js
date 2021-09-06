const rand = () => {
    let arr = new Array(3);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Math.floor(Math.random() * 100) + 1;
    }
    return arr;
}

const find = {
    "sumOf": (arr) => {
        let sum = 0;
        arr.forEach((item) => {
            sum += item;
        });
        return sum;
    },
    "minOf": (arr) => {
        let min = arr[0];
        arr.forEach((item) => {
            if (item < min) {
                min = item
            }
        });
        return min;
    },
    "maxOf": (arr) => {
        let max = arr[0];
        arr.forEach((item) => {
            if (item > max) {
                max = item;
            }
        });
        return max;
    }
}

let arr = rand();
const getArray = () => {
    document.getElementById("array").innerHTML = arr;
}

// 1: find summary
// 2: find minimum value
// 3: find maximum value

const getResult = (option) => {
    switch (option) {
        case 1:
            return find.sumOf(arr);
        case 2:
            return find.minOf(arr);
        case 3:
            return find.maxOf(arr);
        default:
            return "ERROR!";
    }
}

const getInputValue = () => {
    let input = parseInt(document.getElementById("option").value);
    document.getElementById("result").innerHTML = getResult(input);
}