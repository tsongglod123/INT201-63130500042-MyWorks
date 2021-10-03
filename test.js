// // 1.
// function helloSomeone(name) {
// 	return `Hello, ${name}`;
// }

// // 2.
// function area(width, height) {
// 	return width * height;
// }

// // 3.
// function evenNum(num) {
// 	if (num % 2 === 0) return true;
// 	else return false;
// }

// convert to arrow function

const helloSomeone = (name) => `Hello, ${name}`;

const area = (w, h) => w * h;

const evenNum = (num) => ((num % 2) === 0);

console.log(helloSomeone("test"));
console.log(area(2, 3));
console.log(evenNum(654655));

function test(...values) {
    let result = "";
    if (arguments.length >= 1) {
        for (let i = 0; i < arguments.length; i++) {
            if (i == (arguments.length - 1)) {
                result += arguments[i];
            } else {
                result += arguments[i] + "/";
            }
        }
        return result;
    } else {
        return -1;
    }
}

console.log(test('asd','asdasd','dddd'));