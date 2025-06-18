// write a function isLeapYear(year)that returns true if the year is a leap year.
// Aleap year is divisible by 4, not by 100 unless divisible by 400

function isLeapYear(year) {
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
} else {
    return false;
}
}
console.log(isLeapYear(2025));
console.log(isLeapYear(2023));
console.log(isLeapYear(2024));
console.log(isLeapYear(2020));





