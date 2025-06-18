
//1.Number(Any p=ve or -ve intiger including floats/decimal)
let num = 7;
num = 7.0;
num = 7;
console.log(typeof num);

//addition
//substraction
//multiplication
//division
//remainder

//2. Strings(is sequence of alphanumeric characters and/or symbols used to store and manipulate data always placed  id double quotes)
//double quotation("")
//single quotation ('')
//back ticks (``)
let str = `hdbjhdfkjkjfu387894737943`
console.log(typeof str)

//3. Boleans(represent values that are either true or false)
let bool = true;
bool = false;
console.log(typeof bool);
console.log(7+ "7");
console.log(7-3);
console.log(7-"4");
console.log(8/"2");

//4.null (intentional emptyness)
let n = null;
console.log(typeof n);

//5. Undefined(A variable that was declared but never assigned)
let m = undefined;
console.log(typeof m);

let a = ["one", "two", "three"].find(elm=>elm=="four")
console.log(a)
// ["one", "two", "three"].forEach(elm=>alert(elm))
let result = [1, 2, 3].filter((a,index)=>index>2)

const newArray = [1,2,3].map(_=>true)
