function writeCards(array, adj) {
    let cards = [];
    for (let i = 0; i < array.length; i++) {
        cards.push(`Thank you, ${array[i]}, for the wonderful ${adj} gift!`)
    }
    return cards
}

function countDown(number) {
   while (number > 0) {
       console.log(number);
       number --
   }
   console.log(number)
}

