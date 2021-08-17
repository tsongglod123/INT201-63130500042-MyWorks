const arr = [2008, 2008, 2010, 2011, 2011, 2012, 2013, 2013, 2014, 2014, 2015, 2015, 2016, 2016,
    2017, 2017, 2017, 2017, 2018, 2018, 2019, 2019, 2019, 2021, 2021, 2021, 2021];

const findIndex = (arr, value) => {
    for (let i = 0; i < arr.length; i++) {
        if (value == arr[i]) {
            return i;
        }
    }
}

const sumArray = (arr) => {
    let ans = 0;
    for (let i = 0; i < arr.length; i++) {
        ans += arr[i];
    }
    return ans;
}
console.log(`summary of array: ${sumArray(arr)}`);

let numbers = JSON.stringify(arr);
console.log(numbers);

const maxFrequencyOfArray = (arr) => {
    let max_freq = 0;
    let max_temp = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                max_temp += 1;
            }
        }
        if (max_temp > max_freq) {
            max_freq = max_temp;
            max_temp = 0;
        } else {
            max_temp = 0;
        }
    }
    return max_freq;
}
console.log(`max frequency in this array: ${maxFrequencyOfArray(arr)}`);