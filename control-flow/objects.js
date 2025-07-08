// const fruit = {
//     name: = "Apple",
//     color: = "Red",
//     taste: = "Sweet",

//     describe: function () {
//         console.log(fruit.color);
        
//     }
// }
const cookieJar = {
    cookies: 10,
    takeCookie: function() {
        if (this.cookies > 0) {
        this.cookies--;
        console.log("🍪 Yum! Cookies left: " + this.cookies);
            } else {
        console.log("😢 No more cookies!");
        }
    }
};

cookieJar.takeCookie();
cookieJar.takeCookie(); 