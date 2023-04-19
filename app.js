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
firstPage: "When he was nearly thirteen, my brother Jem got his arm badly broken at the elbow. When it healed, and Jem's fears of never being able to play football were assuaged, he was seldom self-conscious about his injury. His left arm was somewhat shorter than his right; when he stood or walked, the back of his hand was at right angles to his body, his thumb parallel to his thigh. He couldn't have cared less, so long as he could pass and punt."
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
firstPage: "Call me Ishmael. Some years ago-never mind how long precisely-having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world. It is a way I have of driving off the spleen and regulating the circulation. Whenever I find myself growing grim about the mouth; whenever it is a damp, drizzly November in my soul; whenever I find myself involuntarily pausing before coffin warehouses, and bringing up the rear of every funeral I meet; and especially whenever my hypos get such an upper hand of me, that it requires a strong moral principle to prevent me from deliberately stepping into the street, and methodically knocking people's hats off-then, I account it high time to get to sea as soon as I can. This is my substitute for pistol and ball. With a philosophical flourish Cato throws himself upon his sword; I quietly take to the ship. There is nothing surprising in this. If they but knew it, almost all men in their degree, some time or other, cherish very nearly the same feelings towards the ocean with me."
},

 {
      title: "Wuthering Heights",
      author: "Emily Bronte",
      link: "https://www.amazon.com/Wuthering-Heights-Emily-Bronte/dp/0141439556",
      blurb: "A dark and haunting novel that explores the destructive power of love and revenge.",
      firstPage: "1801 - I have just returned from a visit to my landlord - the solitary neighbour that I shall be troubled with."
    },
    {
      title: "The Picture of Dorian Gray",
      author: "Oscar Wilde",
      link: "https://www.amazon.com/Picture-Dorian-Gray-Oscar-Wilde/dp/0141442468",
      blurb: "A Gothic novel that tells the story of a young man who sells his soul for eternal youth and beauty.",
      firstPage: "The studio was filled with the rich odour of roses, and when the light summer wind stirred amidst the trees of the garden, there came through the open door the heavy scent of the lilac, or the more delicate perfume of the pink-flowering thorn."
    },
    {
      title: "The Count of Monte Cristo",
      author: "Alexandre Dumas",
      link: "https://www.amazon.com/Count-Monte-Cristo-Alexandre-Dumas/dp/0140449264",
      blurb: "An adventure novel that follows the story of a man who is wrongfully imprisoned and seeks revenge.",
      firstPage: "On the 24th of February, 1815, the look-out at Notre-Dame de la Garde signalled the three-master, the Pharaon from Smyrna, Trieste, and Naples."
    },


{
title: "Jane Eyre",
author: "Charlotte Bronte",
link: "https://www.amazon.com/Jane-Eyre-Charlotte-Bronte/dp/0142437204",
blurb: "A Gothic novel that follows the life of an orphaned governess and her complicated relationship with her employer.",
firstPage: "There was no possibility of taking a walk that day. We had been wandering, indeed, in the leafless shrubbery an hour in the morning; but since dinner (Mrs. Reed, when there was no company, dined early) the cold winter wind had brought with it clouds so sombre, and a rain so penetrating, that further outdoor exercise was now out of the question."

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
  function getRandomBook() {
    var randomIndex = Math.floor(Math.random() * books.length);
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
    
  // Event listener for keyboard inputs
document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    currentBook = getRandomBook();
    revealButton.style.visibility = "visible";
    displayBook(currentBook);
  } else if (event.key === " ") {
    event.preventDefault();
    if (revealButton.style.visibility === "hidden") {
      window.open(currentBook.link, "_blank");
    } else {
      displayBookInfo(currentBook);
      revealButton.style.visibility = "hidden";
    }
  }
});

// Event listener for next button
nextButton.addEventListener("click", function() {
  currentBook = getRandomBook();
  revealButton.style.visibility = "visible";
  displayBook(currentBook);
  nextButton.blur();
});


}
