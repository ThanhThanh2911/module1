const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let couple = 0;

function flipCard() {

  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    //first click
    hasFlippedCard = true;
    firstCard = this;

    //dừng việc thi hành hàm
    return;
  }
  // second click
  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  couple++;
  resetBoard();
  checkWIN();
}

function unflipCards() {
  //tránh việc cặp thẻ trước chưa kiểm tra xong đã kích cặp thẻ sau
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1000);
}

//tránh lỗi click double
function resetBoard() {
  [hasFppedCardli, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
}shuffle();

function checkWIN() {
  if (couple === 6) {
    alert("You win!");
  }
}

cards.forEach(card => card.addEventListener('click', flipCard));