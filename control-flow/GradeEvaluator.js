// Create a function getGrade(score) that returns a grade based on this scale
function getGrade(score) {
    if (score >= 97) return "A+";
    if (score >= 93) return "A";
    if (score >= 90) return "A-";
    if (score >= 87) return "B+";
    if (score >= 83) return "B";
    if (score >= 80) return "B-";
    if (score >= 77) return "C+";
    if (score >= 73) return "C";
    if (score >= 70) return "C-";
    if (score >= 67) return "D+";
    if (score >= 63) return "D";
    if (score >= 60) return "D-";
    return "F";
}

console.log(getGrade(97));
console.log(getGrade(89));
console.log(getGrade(69));
console.log(getGrade(59));





