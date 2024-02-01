// let screen = document.getElementById('screen');
// function myFunction() {
//     // Get the value of the input element by its ID
//     var inputValue = document.getElementById("textInput").value;
    
//     // Pass the value as an argument to another function
//     anotherFunction(inputValue);
// }

// function anotherFunction(arg) {

//     screen.innerText = "The value entered is: " + arg
//     // You can do more with the argument here
// }

let screen = document.getElementById('screen');
const books = [
    {name: "The old nice guy", color: "blue", pages: 248},
    {name: "shattered dream", color: "green", pages: 300},
    {name: "College days of John Ojo", color: "orange", pages: 108},
    {name: "The god must be crazy", color: "black", pages: 1248},
    {name: "Choosen ones", color: "purple", pages: 89},
    {name: "Choosen Desciples", color: "brown", pages: 8110}
]

function myFunction() {
    let inputValue = document.getElementById('textInput').value;
    bookCheck(inputValue);
}

/* Writing a function to perform the actual search. */
function bookCheck(bookName) {
    let availableBook = false; // Initialize as false

    // Looping over the books array to find a match for the given book name.
    for (let i = 0; i < books.length; i++) {
        if (books[i].name.toLowerCase() === bookName.toLowerCase()) {
            availableBook = true;
            break;
        }
    }

    /* Outputting the result of the search. */
    if (availableBook) {
        // console.log(`${bookName.toLowerCase()} is available`)
        screen.innerText = `"${bookName}" is available`;
    } else {
        //  console.log(`${bookName.toLowerCase()} is not in our list of books`)
        screen.innerText = `"${bookName}" is not in our list of books`;
    }

    return;
}

    // bookCheck("The god must be crazy");