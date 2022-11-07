const adviceID = document.querySelector(".advice_id");
const quote = document.querySelector(".quote");
const diceBTN = document.querySelector(".dice");

let advice;
adviceData();
function adviceData() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      advice = data;
    });
}

document.addEventListener("mousedown", function (event) {
  if (event.detail > 1) {
    event.preventDefault();
  }
});

diceBTN.addEventListener("click", function () {
  adviceData();
  adviceID.textContent = advice.slip.id;
  quote.textContent = advice.slip.advice;
});
