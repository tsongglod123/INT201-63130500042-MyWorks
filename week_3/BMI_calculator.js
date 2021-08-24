const bmiMetric = (cm, kg) => {
    return (kg / Math.pow(cm / 100, 2)).toFixed(2);
}
const bmiImperial = (inch, pound) => {
    return bmiMetric(inch * 2.54, pound / 2.205)
}
console.log(`BMI (metric unit): ${bmiMetric(173, 50)}`);
console.log(`BMI (imperial unit): ${bmiImperial(39, 36.5)}`);
