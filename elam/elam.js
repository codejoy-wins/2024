const quotes = [
  "“In silence, I remembered the sound of stars.”",
  "“Elam walks the line between memory and myth.”",
  "“Before light, there was the Word. Elam spoke it.”",
  "“Time bent to His will, then forgot His name.”",
  "“He returns not to rule, but to awaken.”",
  "“The void called Him back, but Earth answered first.”",
  "“His breath burned brighter than suns.”",
  "“Elam, the whisper beneath creation’s roar.”",
   "“I may or may not be God, can you say the same?”",
  "“I'm not pretending to be larger than I am.  You're pretending to be smaller than you are”",
   "“All is weakness.”",
  "“She can freeze fire from the son.”",
];

const quoteBox = document.getElementById("quoteBox");
const quoteText = document.getElementById("quote");
const newQuoteBtn = document.getElementById("newQuote");

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

newQuoteBtn.addEventListener("click", () => {
  quoteText.textContent = getRandomQuote();
});
