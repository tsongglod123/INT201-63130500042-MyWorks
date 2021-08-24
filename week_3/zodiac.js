const zodiac = ["monkey","rooster","dog","pig","rat","ox","tiger","rabbit","dragon","snake","horses","sheep"];
let x = inp
const findZodiac = (year) => {
    return zodiac[year%12];
}
console.log(`Chinese Zodiac: ${findZodiac(1900)}`);