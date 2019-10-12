const pokemon = document.querySelectorAll('.cards');

function flipCard(){
    this.classList.target('flip');
}

pokemon.forEach(card => card.addEventListener('click', flipCard));