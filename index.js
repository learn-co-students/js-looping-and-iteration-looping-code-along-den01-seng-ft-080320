// Code your solutions in this file
const stringNames = ["Lisa", "Kaitlin", "Jan"]
const eventName = "surprise"
let newMessageArray = []

function writeCards(stringNames, eventName) {
    for (let i = 0; i < stringNames.length; i++) {
        newMessageArray.push(`Thank you, ${stringNames[i]}, for the wonderful ${eventName} gift!`)
    }
    return newMessageArray
}


function countDown() {
    let count = 10;
    while (count >= 0) {
        console.log(count--)
    }
}

