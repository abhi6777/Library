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
  let read_a = readA.toLowerCase();
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
    if (read_a === "yes") {
      return "buttonsRight";
    } else if (read_a === "no") {
      return "buttonsWrong";
    }
  };
  // Read
  let read = document.createElement("button");
  read.innerHTML = readA;
  read.classList.add(result());
  read.id = "readStatus";
  buttons.appendChild(read);
  // Remove
  let remove = document.createElement("button");
  remove.classList.add("buttonsWrong");
  remove.id = "clear";
  remove.innerHTML = "Remove";
  buttons.appendChild(remove);
};

// Loop to show books
function displayBooks() {
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    newCard(book.title, book.author, book.pages, book.read);
  }
}

// Form Part

// Clear Form
function clearInput() {
  document.getElementById("myForm").reset();
}

const submitButton = document.querySelector("#Submit");

let titleValue, authorValue, pagesValue, readValue;

// Submission button for new book
submitButton.addEventListener("click", (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Retrieve form values
  titleValue = document.querySelector("#title").value;
  authorValue = document.querySelector("#author").value;
  pagesValue = document.querySelector("#pages").value;
  readValue = document.querySelector('input[name="read"]:checked').value;

  // Do something with the form values, such as storing them in an array or object
  addBookToLibrary(titleValue, authorValue, pagesValue, readValue);

  // Call newCard function to create a new card for the newly added book
  newCard(titleValue, authorValue, pagesValue, readValue);

  // Clear the form input fields
  clearInput();
});

displayBooks();

// The read status function status Toggle button

mainContainer.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    // Toggle the "buttonsRight" and "buttonsWrong" classes
    event.target.classList.toggle("buttonsRight");
    event.target.classList.toggle("buttonsWrong");

    // Update the innerHTML to reflect the change
    if (event.target.classList.contains("buttonsRight")) {
      event.target.innerHTML = "Yes";
    } else {
      event.target.innerHTML = "No";
    }
  }
});

// Add event listener to the main container
mainContainer.addEventListener("click", (event) => {
  // Check if the clicked element is a "Remove" button
  if (event.target.matches("#clear")) {
    // Get the parent element of the button (which is the card)
    let card = event.target.closest(".newCard");

    // Remove the card from the DOM
    card.remove();
  }
});