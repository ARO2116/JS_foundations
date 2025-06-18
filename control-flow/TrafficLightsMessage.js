// Write a function trafficLight(color) that returns
//..."Go"  for "green" 
// ..."Slow down" for "yellow"
// ... "Stop" for "red"
// "Invalid color" for any other input

function trafficLight(Color) {
    switch (Color.toLowerCase()) {
    case "red":
        return "STOP!";
    case "yellow":
        return "CAUTION: Slow down!";
    case "green":
        return "GO!";
    default:
        return "Invalid light color!";
    }
}

// Examples
console.log(trafficLight("RED"));
console.log(trafficLight("YeLLoW"));
console.log(trafficLight("Green"));
console.log(trafficLight("purple"));