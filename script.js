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

function bookCheck(bookName) {
    if (bookName === "") {
        screen.innerText = "Please enter a book name";
        return;
    }

    let availableBook = false;

    for (let i = 0; i < books.length; i++) {
        if (books[i].name.toLowerCase() === bookName.toLowerCase()) {
            availableBook = true;
            break;
        }
    }

    if (availableBook) {
        screen.innerText = `"${bookName}" is available`;
    } else {
        screen.innerText = `"${bookName}" is not in our list of books`;
    }
}
