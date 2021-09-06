const randomNumber = () => {
    return Math.floor(Math.random() * 10) + 1;
}

let number = randomNumber();
let attempts = 5;

while (true) {
    let input = prompt(`Input number (total attempts: ${attempts})`);
    if (input > 10 || input <= 0) break;
    if (input > number) {
        attempts--;
        alert(`Too hight! (attempt left: ${attempts})`);
        if (attempts == 0) {
            alert(`The number is: ${number}`);
            break;
        }
    } else if (input < number) {
        attempts--;
        alert(`Too low! (attempt left: ${attempts})`);
        if (attempts == 0) {
            alert(`The number is: ${number}`);
            break;
        }
    } else if (input == number) {
        alert("YOU WIN!");
        attempts = 5;
        break;
    }
}