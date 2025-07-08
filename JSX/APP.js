// // HTML

// <p id=”my-name”></p>

// // JavaScript


// let firstName = 'Will';
// let lastName = 'Smith';
// document.getElementById('my-name').innerHTML = firstName + ' ' + lastName;

// // JSX


// let firstName = "Will";
// let lastName = "Smith";

// return <p>{firstName + " " + lastName}</p>;
let user = { name: "John" };
function getName() {
    return user.name;
}
function App() {
    return (
        <div>
            <p>{getName}</p>
        </div>
    );
}
