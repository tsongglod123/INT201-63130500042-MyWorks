const reverseText = (text) => {
    let temp = new Array(text.length);
    for (let i = 0; i < temp.length; i++) {
        temp[i] = text[(text.length - 1) - i];
    }
    return temp.join("");
}

let text = "SHIJkljasdAIUPIOmkdv";
const getText = () => {
    document.getElementById("text").innerHTML = text;
}

// 1: Reverse String 
// 2: Replace Vowels with ‘*’ 
// 3: Count Vowels in String

const textString = (option) => {
    switch (option) {
        case 1:
            return reverseText(text);
        case 2:
            return text.replace(/[aeiouAEIOU]/gi, "*");
        case 3:
            return text.match(/[aeiouAEIOU]/gi).length;
        default:
            return "ERROR!";
    }
}

const getInputValue = () => {
    let input = parseInt(document.getElementById("option").value);
    document.getElementById("result").innerHTML = textString(input);
}
