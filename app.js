window.onload = function() {
  var bookPage = document.getElementById("book-page");
  var revealButton = document.getElementById("reveal-button");
  var nextButton = document.getElementById("next-button");

  // Define book objects
  var books = [
    
{
title: "To Kill a Mockingbird",
author: "Harper Lee",
link: "https://www.amazon.com/Kill-Mockingbird-Harper-Lee/dp/0446310786",
blurb: "A powerful story of racial injustice and the loss of innocence in a small Southern town.",
firstPage: "When he was nearly thirteen, my brother Jem got his arm badly broken at the elbow. When it healed, and Jem’s fears of never being able to play football were assuaged, he was seldom self-conscious about his injury. His left arm was somewhat shorter than his right; when he stood or walked, the back of his hand was at right angles to his body, his thumb parallel to his thigh. He couldn’t have cared less, so long as he could pass and punt."
},
{
title: "Pride and Prejudice",
author: "Jane Austen",
link: "https://www.amazon.com/Pride-Prejudice-Jane-Austen/dp/0486284735",
blurb: "A witty and romantic novel of manners that explores the social conventions of Regency England.",
firstPage: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife."
},
{
title: "1984",
author: "George Orwell",
link: "https://www.amazon.com/1984-Signet-Classics-George-Orwell/dp/0451524934",
blurb: "A dystopian novel set in a totalitarian society where individualism is crushed and Big Brother is always watching.",
firstPage: "It was a bright cold day in April, and the clocks were striking thirteen. Winston Smith, his chin nuzzled into his breast in an effort to escape the vile wind, slipped quickly through the glass doors of Victory Mansions, though not quickly enough to prevent a swirl of gritty dust from entering along with him."
},
{
title: "Moby-Dick",
author: "Herman Melville",
link: "https://www.amazon.com/Moby-Dick-Herman-Melville/dp/0143124676",
blurb: "A tale of obsession and revenge as a sailor named Ishmael joins the crew of the Pequod on a hunt for the white whale, Moby Dick.",
firstPage: "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world. It is a way I have of driving off the spleen and regulating the circulation. Whenever I find myself growing grim about the mouth; whenever it is a damp, drizzly November in my soul; whenever I find myself involuntarily pausing before coffin warehouses, and bringing up the rear of every funeral I meet; and especially whenever my hypos get such an upper hand of me, that it requires a strong moral principle to prevent me from deliberately stepping into the street, and methodically knocking people’s hats off—then, I account it high time to get to sea as soon as I can. This is my substitute for pistol and ball. With a philosophical flourish Cato throws himself upon his sword; I quietly take to the ship. There is nothing surprising in this. If they but knew it, almost all men in their degree, some time or other, cherish very nearly the same feelings towards the ocean with me."
},





    
  ];

  // Define function to display a book on the main screen
  function displayBook(book) {
    bookPage.textContent = book.firstPage;
    revealButton.textContent = "Reveal Book";
  }

  // Define function to display book information
  function displayBookInfo(book) {
   bookPage.innerHTML = "<h1>" + book.title + "</h1><p>By " + book.author + "</p><p>" + book.blurb + "</p><p><a href='" + book.link + "'>Get the book</a></p>";
    //revealButton.textContent = "---->";
    //revealButton.style.backgroundColor = "white";
    //^ if removed, also remove "revealButton.style.backgroundColor = "#2ecc71"; from displayBook"
  }

  // Define function to get a random book from the array
  /*function getRandomBook() {
    var randomIndex = Math.floor(Math.random() * books.length);
    return books[randomIndex];
  }*/



// Initialize an array to keep track of which books have been displayed
let usedBooks = [];

// Define a function to get a random book that hasn't been displayed yet
function getRandomBook() {
  // If all books have been displayed, return a special message
  if (usedBooks.length === books.length) {
    //document.write("That's all folks");
    
     const message = document.createElement('p');
    message.textContent = "That's all folks";
    message.style.textAlign = 'center';
    message.style.position = 'absolute';
    message.style.top = '900';
    message.style.left = '0';
    message.style.fontSize = '18px';
    message.style.width = '100%';
    
    document.body.insertBefore(message, document.body.firstChild);
    
    
    /*
    const message = document.createElement('p');
    message.textContent = "That's all folks - if you would like more, please ";
    message.style.textAlign = 'center';
    message.style.position = 'absolute';
    message.style.top = '400px'; // Use "px" units for top and left positions
    message.style.left = '0';
    message.style.fontSize = '18px';
    message.style.width = '100%';

    const link = document.createElement('a');
    link.textContent = 'visit this page';
    link.href = 'https://www.example.com/'; // Replace with the actual URL of the new page
    message.appendChild(link); // Add the link element as a child of the message element

    document.body.insertBefore(message, document.body.firstChild);
    */
    
    
    
    return 'Thats all the books!';
  }
  
  // Pick a random book that hasn't been displayed yet
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * books.length);
  } while (usedBooks.includes(randomIndex));
  
  // Add the index of the selected book to the usedBooks array
  usedBooks.push(randomIndex);
  
  // Return the selected book
  return books[randomIndex];
}


















  // Display a random book on page load
  var currentBook = getRandomBook();
  displayBook(currentBook);

  // Event listener for reveal button
  revealButton.addEventListener("click", function() {
    displayBookInfo(currentBook);
    revealButton.style.visibility = 'hidden';
    //^ sister line  revealButton.style.visibility = 'visible';
  });
  
  // Event listener for reveal text
  //revealWritButton.addEventListener("click", function() {
    //displayBook(currentBook);
  //});

  // Event listener for next button
  nextButton.addEventListener("click", function() {
    currentBook = getRandomBook();
    revealButton.style.visibility = 'visible';
    //^ sister line  revealButton.style.visibility = 'hidden';
    displayBook(currentBook);
  });
}
