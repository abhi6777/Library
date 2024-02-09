const myLibrary = [];
const mainContainer = document.querySelector(".main");

// constructor of Book or Object
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read.toLowerCase();
  // A helper function to determine is this readed or not
  const result = () => {
    if (this.read === "yes") {
      return "Read";
    } else {
      return "Not Read";
    }
  };
  this.info = () => {
    return `The ${this.title} by ${this.author}, pages: ${
      this.pages
    }, ${result()} yet`;
  };
}

// Function to add book to array list
function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

// Adding some books for test
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 218, "Yes");
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, "No");
addBookToLibrary("Hello World", "Abhimanyu Mahto", 320, "Yes");

// function to create new card
const newCard = (titleA, authorA, pagesA, readA) => {
  let newCard = document.createElement("div");
  newCard.classList.add("newCard");
  mainContainer.appendChild(newCard);
  // creating element of card
  // Title
  let title = document.createElement("h2");
  title.innerHTML = "Title";
  newCard.appendChild(title);
  let titleAns = document.createElement("h3");
  titleAns.innerHTML = titleA;
  newCard.appendChild(titleAns);
  // Author
  let author = document.createElement("h2");
  author.innerHTML = "Author";
  newCard.appendChild(author);
  let authorAns = document.createElement("h3");
  authorAns.innerHTML = authorA;
  newCard.appendChild(authorAns);
  // Pages
  let pages = document.createElement("h2");
  pages.innerHTML = "Pages";
  newCard.appendChild(pages);
  let pagesAns = document.createElement("h3");
  pagesAns.innerHTML = pagesA;
  newCard.appendChild(pagesAns);

  //div for buttons
  let buttons = document.createElement("div");
  buttons.classList.add("buttons");
  newCard.appendChild(buttons);

  const result = () => {
    if (read === "yes") {
      return "buttonsRight";
    } else {
      return "buttonsWrong";
    }
  };
  // Read
  let read = document.createElement("button");
  read.innerHTML = readA;
  read.classList.add(result());
  buttons.appendChild(read);
  // Remove
  let remove = document.createElement("button");
  remove.classList.add("buttonsWrong");
  remove.innerHTML = "Remove";
  buttons.appendChild(remove);
};

// Loop to show books
for (let i = 0; i < myLibrary.length; i++) {
  let book = myLibrary[i];
  newCard(book.title, book.author, book.pages, book.read);
}

// pop ing form for getting input for new book
let openForm = document.querySelector("#openFormButton");
