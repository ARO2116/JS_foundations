// write a function login(username, password) that returns "Access Granted" if the username is "admin" and the password is "1234" otherwise returns access denied

function login(username, password){
    if (username == "admin" && password == "12345"){
        return "Access Granted";
    } else{
        return "Access Denied";
    }
}


console.log(login("admin", "12345"));
console.log(login("user", "12345"));
console.log(login("admin" , "123456"));

