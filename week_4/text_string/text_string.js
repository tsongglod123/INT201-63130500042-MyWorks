const reverseText = (text) => {
    let temp = new Array(text.length);
    for (let i = 0; i < temp.length; i++) {
        temp[i] = text[(text.length - 1) - i];
    }
    return temp.join("");
}

const textString = (option) => {
    let text = "Hello, World!"
    switch (option) {
        case 1:
            return reverseText(text);
        case 2:
            return text.replace(/[aeiou]/gi, "*");
        case 3:
            return text.match(/[aeiou]/gi).length;
        default:
            return "ERROR!";
    }
}

// 1: Reverse String 
// 2: Replace Vowels with ‘*’ 
// 3: Count Vowels in String

const getInputValue = () => {
    let input = parseInt(document.getElementById("option").value);
    document.getElementById("result").innerHTML = textString(input);
}
