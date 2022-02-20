const quotes = [
  {
    quote:
      "one must live the way one thinks or end up thinking the way one has lived",
    author: "-Paul Bourget-",
  },
  {
    quote: "Be yourself, everyone else is already taken.",
    author: "-Oscar Wilde-",
  },
  { quote: "“So many books, so little time.", author: "-No name-" },
  {
    quote: "A room without books is like a body without a soul.",
    author: "-Marcus Tullius Cicero-",
  },
  {
    quote: "If you tell the truth, you don't have to remember anything.",
    author: "-Mark Twain-",
  },
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
