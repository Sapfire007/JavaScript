// SHUFFLE AN ARRAY

const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

cards.sort(() => Math.random() - 0.5); // Not so efficient for large amt of data

console.log(cards);


const cards2 = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
console.log(cards2);



function shuffle(array){
    for(let i = array.length-1; i > 0; i--){
        const random = Math.floor(Math.random() * (i + 1));
        
        [array[i], array[random]] = [array[random], array[i]];
    }
}

shuffle(cards);

console.log(cards);